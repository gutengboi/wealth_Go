import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { useLoginUserMutation } from "state/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import { setLogin } from "state";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.global.user);
  const [loginNewUser] = useLoginUserMutation();

  useEffect(() => {
    if (user) {
      console.log(user);
      // navigate("/dashboard");
      window.location.href = "https://wealth-go.vercel.app/dashboard";
    }
  }, [user, navigate]);

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      const returned = await loginNewUser(JSON.stringify(values))
        .unwrap()
        .then((fulfilled) => {
          if (fulfilled)
            dispatch(
              setLogin({
                user: fulfilled.user,
                token: fulfilled.token,
              })
            );
          // redirect("/dashboard");
          window.location.href = "https://wealth-go.vercel.app/dashboard";
        });
    } catch (error) {}
    onSubmitProps.resetForm();
  };

  return (
    <div className="login">
      <div className="login-header">
        <h5 className="login-title">Login in to your account</h5>
        <p className="description">Enter your credentials below to continue</p>
      </div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesLogin}
        validationSchema={loginSchema}
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
              {/* <label htmlFor="email">Email address</label> */}
              <TextField
                label="email address"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                variant="outlined"
              />
            </div>
            <div className="form_input">
              {/* <label htmlFor="password">Password</label> */}
              <TextField
                label="password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                // sx={{ height: "40px" }}
                variant="outlined"
              />
            </div>
            <div className="forgot-btn">
              <button>Forgot passowrd ?</button>
            </div>
            <div className="login-btn">
              <button type="submit">Log In</button>
            </div>
            <p className="description">
              Dont have an account?{" "}
              <span className="register">
                <Link to="/register">Register here</Link>
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
