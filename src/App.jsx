import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import s from "./App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])


  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox/>
      <ContactList/>
    </div>
  );
}

export default App;
