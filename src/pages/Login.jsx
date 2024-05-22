import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../redux/auth/operations";

export const Login = () => {
  const dispatch = useDispatch()

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(loginThunk(values))
    console.log(values);
  };

  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-sky-800">Login now!</h1>
            <p className="py-6 text-sky-800 text-sky-800">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form
                className="card-body"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-950">Email</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-gray-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-950">Password</span>
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered bg-gray-500"
                    required
                  />
                  <label className="label">
                    <Link
                      to='/register'
                      className="label-text-alt link link-hover text-slate-950"
                    >
                      Do not have account? Lets create it!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
