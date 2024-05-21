import { useDispatch } from "react-redux";

import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";


const SearchBox = () => {
  const dispatch = useDispatch()
  return (<>

    <div className={s.wrap_filter}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
    </>
  );
};

export default SearchBox;
