import { FallingLines } from "react-loader-spinner";
import s from './Loader.module.css'
export const Loader = () => {
  return (
    <div className={s.loader}>
      <FallingLines
        color="#06069b"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};
