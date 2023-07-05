import { useContext } from "react";

import { Algo, Settings } from "../contexts/AlgoProdiver.types";
import { AlgoContext } from "../contexts/AlgoProvider";

interface Props {
    algo: string;
}

const AlgoButton: React.FC<Props> = ({ algo }) => {
  const { settings, setSettings} = useContext(AlgoContext);

  const onAlgoChange = (
      type: Algo
    ) => {
      if(!setSettings) return;
      setSettings(p => ({ ...p, algoType: type }));
  }

  const capitalizeFirstLetterOfEachWord = (str: string) => {
    const strArray = str.split(' ');
    const newStrArr: string[] = [];


    strArray.map(word => {
      const uppercasedStr = word[0].toUpperCase() + word.substring(1);
      newStrArr.push(uppercasedStr);
    })

    if(newStrArr.length === 0) return;
    return newStrArr.join(' ');
  }

  return (
      <button
        className={`py-2 px-4 transition-all focus:outline-none top-2 disabled:opacity-20 hover:outline-none bg-[#96AFB8] shadow-bottom ${
          settings.algoType === algo && "shadow-bottomHover translate-y-2"
        }`}
        onClick={() => onAlgoChange(`${algo}`)}
        disabled={settings.sorting}
      >
        {capitalizeFirstLetterOfEachWord(algo)}
      </button>
  )
}

export default AlgoButton