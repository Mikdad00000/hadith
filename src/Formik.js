import React from "react";
import { Formik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.writer) {
    errors.writer = "Required";
  }
  if (!values.mobileNo) {
    errors.mobileNo = "Required";
  }
  if (values.password.length < 8) {
    errors.password = "atleast 8 chareactar needed";
  }
  if (values.confirmPassword !== values.password) {
    errors.name = "Required";
  }
  if (!values.death) {
    errors.death = "Required";
  }
  return errors;
};

const onSubmit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 2));
  setSubmitting(false);
};

const Form = ({
  values,
  errors,
  touched,
  handlechange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  /* and other goodies */
}) => (
  <div className="flex justify-center items-center h-screen w-full">
    <div className="">
      <p className="ml-32">Bismillahi Rohmanir Rohim</p>
      <form onSubmit={handleSubmit}>
        <div className="flex m-4">
          <p className="m-1 w-20">Name</p>
          <input
            value={values.name}
            name="name"
            type="name"
            placeholder="   Name"
            onChange={handlechange}
            onBlur={handleBlur}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
          {errors.name && touched.name && errors.name}
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">email</p>
          <input
            value={values.email}
            name="email"
            type="email"
            placeholder="   email"
            onChange={handlechange}
            onBlur={handleBlur}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
          {errors.email && touched.email && errors.email}
        </div>

        <div className="flex m-4">
          <p className="m-1 w-20">MobileNo</p>
          <input
            name="MobileNo"
            value={values.mobileNo}
            type="text"
            placeholder="   MobileNo"
            onChange={handlechange}
            onBlur={handleBlur}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
          {errors.mobileNo && touched.mobileNo && errors.mobileNo}
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">Password</p>
          <input
            name="password"
            value={values.password}
            type="password"
            placeholder="   Password"
            onChange={handlechange}
            onBlur={handleBlur}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
          {errors.password && touched.password && errors.password}
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">ConfirmPassword</p>
          <input
            value={values.confirmPassword}
            name="confirmPassword"
            type="password"
            placeholder="   ConfirmPassword"
            onChange={handlechange}
            onBlur={handleBlur}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
          {errors.confirmPassword &&
            touched.confirmPassword &&
            errors.confirmPassword}
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">Writer</p>
          <input
            value={values.writer}
            name="writer"
            type="writer"
            placeholder="   Writer"
            onChange={handlechange}
            onBlur={handleBlur}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
          {errors.writer && touched.writer && errors.writer}
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">Death</p>
          <input
            value={values.death}
            name="death"
            type="death"
            placeholder="   Death"
            onChange={handlechange}
            onBlur={handleBlur}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
          {errors.death && touched.death && errors.death}
        </div>
        <div className="flex m-4">
          <p className="m-1 w-20">Image</p>
          <input
            type="file"
            onChange={handlechange}
            onBlur={handleBlur}
            className="text-green bg-gray-100 w-full  border-2xl rounded-full"
          />
        </div>
      </form>
      <button
        type="submit"
        className="border-2xl bg-blue-500 ml-36 p-1  w-24 rounded-full"
        disabled={isSubmitting}
      >
        Submit
      </button>
      {/* <p>{JSON.stringify(users)}</p> */}
    </div>
  </div>
);
const iValue = {
  name: "",
  email: "",
  mobileNo: "",
  password: "",
  confirmPassword: "",
  death: ""
};

const Basic = () => {
  return (
    <div>
      <Formik
        initialValues={iValue}
        component={Form}
        validate={validate}
        onSubmit={onSubmit}
      ></Formik>
    </div>
  );
};

export default Basic;
