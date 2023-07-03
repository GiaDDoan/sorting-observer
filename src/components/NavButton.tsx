import { Algo, Settings } from "../contexts/AlgoProdiver.types";

interface Props {
  onAlgoChange: (type: Algo) => void;
  settings: Settings;
  sort: (algoType: Algo) => void;
  resetArray: () => void;
}

const NavButtons: React.FC<Props> = ({ onAlgoChange, settings, sort, resetArray }) => (
  <div className="row-span-1 flex items-center justify-center w-5/6 max-w-4xl mx-auto gap-5">
    <button className="underline" onClick={() => resetArray()}>
      Get new Array
    </button>
    <div className="flex flex-wrap justify-center">
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "merge sort" && "text-purple-500"
        }`}
        onClick={() => onAlgoChange("merge sort")}
      >
        Merge Sort
      </button>
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "insertion sort" && "text-purple-500"
        }`}
        onClick={() => onAlgoChange("insertion sort")}
      >
        Insertion Sort
      </button>
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "heap sort" && "text-purple-500"
        }`}
        onClick={() => onAlgoChange("heap sort")}
      >
        Heap Sort
      </button>
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "quick sort" && "text-purple-500"
        }`}
        onClick={() => onAlgoChange("quick sort")}
      >
        Quick Sort
      </button>
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "bubble sort" && "text-purple-500"
        }`}
        onClick={() => onAlgoChange("bubble sort")}
      >
        Bubble Sort
      </button>
    </div>
    <button className="underline disabled:opacity-25" onClick={() => sort(settings.algoType)} disabled={settings.sorting}>
      Sort!
    </button>
  </div>
);

export default NavButtons;