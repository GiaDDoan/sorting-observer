export type Algo = "merge sort" | "insertion sort" | "heap sort" | "quick sort" | "bubble sort";

export interface Settings {
  algoType: Algo;
  arrayLen: number;
  delay: number;
  sorting: boolean;
}

export interface ISettingsContext {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
  sort: (algoType: Algo) => void;
  resetArray: () => void;
}

export type Items = {
  items: number[];
  setItems?: React.Dispatch<React.SetStateAction<number[]>>;
};