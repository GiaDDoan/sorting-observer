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
    <button className="bg-[#0089FF] py-2 px-4 transition-all focus:outline-none top-2 hover:outline-none shadow-bottom disabled:opacity-20 focus:shadow-bottomHover focus:translate-y-2" onClick={() => resetArray()} disabled={settings.sorting}>
      Get New Array
    </button>
    <div className="flex flex-wrap justify-center gap-2">
      {algoList.map((algo, idx) => (
        <AlgoButton key={`${algo}-${idx}`} algo={algo}  />
      ))}
    </div>
    <button
      className={`bg-[#F50051] py-2 px-4 transition-all focus:outline-none top-2 hover:outline-none shadow-bottom disabled:opacity-20 disabled:shadow-bottomHover disabled:translate-y-2`}
      onClick={() => sort(settings.algoType)}
      disabled={settings.sorting}
    >
      Sort!
    </button>
  </div>
);

export default NavButtons;