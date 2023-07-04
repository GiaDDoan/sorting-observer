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

  return (
    <button
    className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
      settings.algoType === "bubble sort" && "text-purple-500"
    }`}
    onClick={() => onAlgoChange(`${algo}`)}
  >
    {`${algo}`}
  </button>
  )
}

export default AlgoButton