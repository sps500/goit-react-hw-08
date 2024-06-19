import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form} autoComplete="off">
          <div className={css.Style}>
            <label className={css.label}>
              Username
              <Field type="text" name="name" className={css.field} />
              {errors.name && touched.name ? (
                <div className={css.error}>{errors.name}</div>
              ) : null}
            </label>
            <label className={css.label}>
              Email
              <Field type="email" name="email" className={css.field} />
              {errors.email && touched.email ? (
                <div className={css.error}>{errors.email}</div>
              ) : null}
            </label>
            <label className={css.label}>
              Password
              <Field type="password" name="password" className={css.field} />
              {errors.password && touched.password ? (
                <div className={css.error}>{errors.password}</div>
              ) : null}
            </label>
            <button type="submit" className={css.btn}>
              Register
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
