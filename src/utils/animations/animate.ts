import { Settings } from "../../contexts/AlgoProdiver.types";

interface Animate {
  newArr: number[];
  arr: number[][];
  setItems: React.Dispatch<React.SetStateAction<number[]>>;
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
}

type AnimateFunc = (animationProps: Animate) => void;

export const animateMerge: AnimateFunc = ({
  newArr,
  arr,
  settings,
  setItems,
  setSettings
}) => {
  if(!setSettings) return;
  setSettings(p => ({ ...p, sorting: true}));
  arr.forEach(([newHeight, index], idx) => {
    const div = document.getElementById(`${index}`);
    if (!div) return;
    setTimeout(() => {
      div.style.backgroundColor = "#b041f0";
      div.style.height = `${newHeight / 7}%`;
      setTimeout(() => {
        div.style.backgroundColor = "#482";
        if (idx === arr.length - 1) {
          setSettings(p => ({ ...p, sorting: false}));
          setItems(newArr);
        }
      }, settings.delay * 2);
    }, settings.delay * idx * 2);
  });
};

export const animateDivs: AnimateFunc = ({
  arr,
  newArr,
  setItems,
  settings,
  setSettings,
}) => {
  if(!setSettings) return;
  setSettings(p => ({ ...p, sorting: true}))

  arr.forEach(([first, second], idx) => {
    const div = document.getElementById(`${first}`);
    const div2 = document.getElementById(`${second}`);
    if (!div || !div2) return;
    setTimeout(() => {
      div.style.backgroundColor = "#b041f0";
      div2.style.backgroundColor = "#b041f0";
      const divHeight = div.style.height;
      div.style.height = div2.style.height;
      div2.style.height = divHeight;
      setTimeout(() => {
        div.style.backgroundColor = "#482";
        div2.style.backgroundColor = "#482";
        if (idx === arr.length - 1) {
          setItems(newArr);
          if(!setSettings) return;
          setSettings(p => ({ ...p, sorting: false}))
        }
      }, settings.delay * 2);
    }, settings.delay * idx * 2);
  });
};