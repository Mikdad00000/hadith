import { Formik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};
const onSubmit = (values, { setSubmitting }) => {
  window.alert(JSON.stringify(values, null, 2));
  console.log(values);
  setSubmitting(false);
};
const iValue = {
  name: "",
};

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  /* and other goodies */
}) => {
  return (
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
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-green bg-gray-100 w-full  border-2xl rounded-full"
            />
            {errors.name && touched.name}
          </div>
        </form>
        <button
          type="submit"
          className="border-2xl bg-blue-500 ml-36 p-1  w-24 rounded-full"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
const Test = () => {
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
export default Test;
