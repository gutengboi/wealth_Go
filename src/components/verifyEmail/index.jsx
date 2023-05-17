import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useRegisterUserMutation } from "state/api";
import { Formik } from "formik";
import * as yup from "yup";

const registerSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
});
const initialValuesRegister = {
  email: "",
};

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [registerNewUser] = useRegisterUserMutation();

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      const returned = await registerNewUser(JSON.stringify(values))
        .unwrap()
        .then((fulfilled) => {
          if (fulfilled) console.log(fulfilled);
          localStorage.setItem("email-reg", values.email);
          navigate("/register/verify");
        });
    } catch (error) {}
    onSubmitProps.resetForm();
  };

  return (
    <div className="verifyEmail">
      <div className="login-header">
        <h5 className="login-title">Create your account</h5>
        <p className="description">Enter your Email below to continue</p>
      </div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesRegister}
        validationSchema={registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form_input">
              <TextField
                label="Email"
                multiline={true}
                rows={2}
                size="small"
                type="email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-btn">
              <button
                type="submit"
                // onClick={() => {
                //   // localStorage.setItem("email-reg", values.email);
                //   navigate("/register/verify");
                // }}
              >
                Continue
              </button>
            </div>
            <p className="description">
              Already have an account?{" "}
              <span className="register">
                <Link to="/login">Login here</Link>
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default VerifyEmail;
