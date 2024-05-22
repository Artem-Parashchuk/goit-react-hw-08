import { GoPersonFill } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContactThunk } from "../../redux/contacts/operations";

const Contact = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.content}>
        <p className={s.name}>
          <GoPersonFill /> {name}
        </p>
        <p className={s.phone}>
          <MdPhone /> {number}
        </p>
      </div>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
