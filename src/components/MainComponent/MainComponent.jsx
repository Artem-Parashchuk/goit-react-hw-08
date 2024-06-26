import { Toaster } from "react-hot-toast";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./MainComponent.module.css";
export const MainComponent = () => {
  
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
