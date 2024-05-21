import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import s from "./ContactForm.module.css";

import { Loader } from "../Loader/Loader";
import { addContactThunk } from "../../redux/contactsOps";
import { selectIsLoading } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, option) => {
    dispatch(addContactThunk({ name: values.name, number: values.number }));
    option.resetForm();
  };

  const formSchema = Yup.object({
    name: Yup.string()
      .required("Ім'я є обов'язковим")
      .min(3, "Ім'я має бути більше 3-х символів")
      .max(50, "Ім'я має бути не більше 50 символів"),
    number: Yup.string()
      .required("Номер є обов'язковим")
      .min(3, "Номер має бути більше 3-х символів")
      .max(50, "Номер має бути не більше 50 символів"),
  });

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={formSchema}
        initialValues={{ name: "", number: "" }}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              className={s.field}
              type="text"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={s.error}
            />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              className={s.field}
              type="text"
              name="number"
            />
            <ErrorMessage
              name="number"
              component="span"
              className={s.error}
            />
          </label>
          <button
            className={s.btn}
            type="submit"
          >
            Add contact
          </button>
        </Form>
      </Formik>
      {isLoading && <Loader />}
    </>
  );
};

export default ContactForm;
