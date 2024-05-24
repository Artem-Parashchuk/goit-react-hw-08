import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectContactFilter } from "../../redux/contacts/slice";
import { fetchContactsThunk } from "../../redux/contacts/operations.js";
import { useEffect } from "react";

const ContactList = () => {
  const filteredContacts = useSelector(selectContactFilter);
  const dispatch = useDispatch();


useEffect(() => {
  dispatch(fetchContactsThunk())
}, [dispatch])
  return (
    <ul className={s.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((item) => (
          <Contact key={item.id} {...item} />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </ul>
  );
};

export default ContactList;
