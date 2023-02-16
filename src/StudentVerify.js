import React, { useState } from "react";

const StudentVerificationForm1 = () => {
    const [studentInfo, setStudentInfo] = useState({
        firstName: "",
        lastName: "",
        studentID: "",
        email: "",
    });
    const handleChange = (e) => {
        setStudentInfo({
            ...studentInfo,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to verify student info
        fetch("http://localhost:3001/results", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(studentInfo),
        });
    };
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="">
                <p className="pl-4 underline">StudentVerificationForm</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex m-4">
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={studentInfo.firstName}
                                onChange={handleChange}
                                className="text-green bg-gray-100 w-full  border-2xl rounded-full"
                            />
                        </label>
                    </div>
                    <div className="flex m-4">
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={studentInfo.lastName}
                                onChange={handleChange}
                                className="text-green bg-gray-100 w-full  border-2xl rounded-full"
                            />
                        </label>
                    </div>
                    <div className="flex m-4">
                        <label>
                            Student ID:
                            <input
                                type="text"
                                name="studentID"
                                value={studentInfo.studentID}
                                onChange={handleChange}
                                className="text-green bg-gray-100 w-full  border-2xl rounded-full"
                            />
                        </label>
                    </div>
                    <div className="flex m-4">
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={studentInfo.email}
                                onChange={handleChange}
                                className="text-green bg-gray-100 w-full  border-2xl rounded-full"
                            />
                        </label>
                    </div>
                    <button type="button" className="border-2xl rounded">
                        Verification
                    </button>
                </form>
            </div>
        </div>
    );
};
create a login page with next page code
▎  15 //   import React, { useState } from 'react';
▎  14 //    import { Redirect } from 'react-router-dom';                                                                                                                                                           
▎  13 //    const LoginPage = () => {                                                                                                                                                                              
▎  12 //     const [isLoggedIn, setIsLoggedIn] = useState(false);                                                                                                                                                  
▎  11 //      const handleLogin = () => {                                                                                                                                                                          
▎  10 //        // Perform login logic here                                                                                                                                                                        
▎   9 //        setIsLoggedIn(true);                                                                                                                                                                               
▎   8 //      };                                                                                                                                                                                                   
▎   7 //      if (isLoggedIn) {                                                                                                                                                                                    
▎   6 //        return <Redirect to="/home" />;                                                                                                                                                                    
▎   5 //      }                                                                                                                                                                                                    
▎   4 //      return (                                                                                                                                                                                             
▎   3 //       <div>  
▎   2 //          <h1>Login Page</h1>
▎   1 //          <button onClick={handleLogin}>Login</button>
▎ 33  //        </div>                                                                                                                                                                                             
▎   1 //     );                                 
▎   2 //    };                                  
▎   3 //  export default LoginPage;  
export default StudentVerificationForm1;
