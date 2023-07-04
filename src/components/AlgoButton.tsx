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
        className={`py-2 px-4 transition-all focus:outline-none top-2 hover:outline-none bg-red-200 shadow-bottom ${
          settings.algoType === algo && "shadow-bottomHover translate-y-2"
        }`}
        onClick={() => onAlgoChange(`${algo}`)}
      >
        {`${algo}`}
      </button>
  )
}

export default AlgoButton