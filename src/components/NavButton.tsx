import { Algo, Settings } from "../contexts/AlgoProdiver.types";
import AlgoButton from "./AlgoButton";

interface Props {
  onAlgoChange: (type: Algo) => void;
  settings: Settings;
  sort: (algoType: Algo) => void;
  resetArray: () => void;
}

const algoList = [
  "merge sort",
  "insertion sort",
  "heap sort",
  "quick sort",
  "bubble sort"
]

const NavButtons: React.FC<Props> = ({ settings, sort, resetArray }) => (
  <div className="row-span-1 flex items-center justify-center w-5/6 max-w-4xl mx-auto gap-5">
    <button className="underline" onClick={() => resetArray()}>
      Get new Array
    </button>
    <div className="flex flex-wrap justify-center gap-2">
      {algoList.map((algo, idx) => (
        <AlgoButton key={`${algo}-${idx}`} algo={algo}  />
      ))}
    </div>
    <button className="underline disabled:opacity-25" onClick={() => sort(settings.algoType)} disabled={settings.sorting}>
      Sort!
    </button>
  </div>
);

export default NavButtons;