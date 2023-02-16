import { Formik } from "formik";
import { Link } from "react-router-dom";

const validate = (values) => {
    const errors = {};
    if (!values.first) {
        errors.first = "Required";
    } else if (values.first.length < 4) {
        errors.first = "Name must be at least 4 characters";
    }
    if (!values.last) {
        errors.last = "Required";
    } else if (values.last.length < 4) {
        errors.last = "Name must be at least 4 characters";
    }
    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.mobile) {
        errors.mobile = "Required";
    } else if (values.mobile.length < 11) {
        errors.mobile = "Mobile number is not valid";
    } else if (!/^[0-9]*$/i.test(values.mobile)) {
        errors.mobile = "Mobile Number must be in valid formate";
    }
    if (!values.password) {
        errors.password = "Required";
    } else if (!/(?=.*?[A-Z])/i.test(values.password)) {
        errors.password = "At least one Uppercase";
    } else if (!/(?=.*?[a-z])/i.test(values.password)) {
        errors.password = "At least one Lowercase";
    } else if (!/(?=.*?[0-9])/i.test(values.password)) {
        errors.password = "At least one digit";
    } else if (!/(?=.*?[#?!@$%^&*-])/i.test(values.password)) {
        errors.password = "At least one Special Characters";
    } else if (!/.{8,}/i.test(values.password)) {
        errors.password = "At least minumum 8 characters";
    }
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password dase not match";
    }
    console.log(errors);
    return errors;
};
const onSubmit = (values, { setSubmitting }) => {
    fetch("http://localhost:3001/teachersignup", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    }).then((response) => alert(JSON.stringify(values, null, 2)));
    setSubmitting(false);
};
const iValue = {
    first: "",
    last: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const form = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => {
    function SInput({ label, type, ph, value, name }) {
        return (
            <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    {label}
                </label>
                <input
                    type={type || "text"}
                    placeholder={ph}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    name={name}
                />
            </div>
        );
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">
                    <div
                        className="hidden bg-cover lg:block lg:w-2/5"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')",
                        }}
                    ></div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <div className="mt-6">
                                <h1 className="text-gray-500 dark:text-gray-300">
                                    Select type of account
                                </h1>

                                <div className="mt-3 md:flex md:items-center md:-mx-2">
                                    <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span className="mx-2">Teacher Admin</span>
                                    </button>
                                    <Link to="/data2">
                                        <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>

                                            <span className="mx-2">Student</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                            >
                                <SInput
                                    label="First Name"
                                    ph="Abdur"
                                    value={values.first}
                                    name="first"
                                />
                                <span className="text-red-500">
                                    {errors.first && touched.first}
                                </span>
                                <SInput
                                    label="Last Name"
                                    ph="Rahman"
                                    value={values.last}
                                    name="last"
                                />
                                <span className="text-red-500">
                                    {errors.last && touched.last}
                                </span>
                                <SInput
                                    label="Phone Number"
                                    ph="XXX-XX-XXX-XXX"
                                    value={values.mobile}
                                    name="mobile"
                                />
                                <span className="text-red-500">
                                    {errors.mobile && touched.mobile}
                                </span>
                                <SInput
                                    label="Email Address"
                                    ph="Abdullah@gmail.com"
                                    value={values.email}
                                    name="email"
                                />
                                <span className="text-red-500">
                                    {errors.email && touched.email}
                                </span>
                                <SInput
                                    label="Password"
                                    ph="Enter your password"
                                    type="password"
                                    value={values.password}
                                    name="password"
                                />
                                <span className="text-red-500">
                                    {errors.password && touched.password}
                                </span>
                                <SInput
                                    label="Confirm Password"
                                    type="password"
                                    ph="Confirm your password"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                />
                                <span className="text-red-500">
                                    {errors.confirmPassword && touched.confirmPassword}
                                </span>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                >
                                    <span>Sign Up </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 rtl:-scale-x-100"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
const TeacherSignUp = () => {
    return (
        <div>
            <Formik
                initialValues={iValue}
                component={form}
                onSubmit={onSubmit}
                validate={validate}
            />
        </div>
    );
};

export default TeacherSignUp;
