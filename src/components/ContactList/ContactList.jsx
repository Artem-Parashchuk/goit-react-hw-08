import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectContactFilter } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectContactFilter);

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
