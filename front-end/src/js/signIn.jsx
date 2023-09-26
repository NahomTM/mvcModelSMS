// /* eslint-disable jsx-a11y/anchor-is-valid */
// //import 'bootstrap/dist/css/bootstrap.min.css';
// // import {React,useState} from'react';
// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import '../css/signIn.css';
// import ForgotPasswordForm from './forgotPassword';
// import Admin from './adminDashboard';
// import Instructor from './instructorDashboard';
// import Manager from './managerDashboard';
// import Finance from './financeDashboard';
// import zewdlogo from '../resources/logo2.png';
// function SignIn(props) {

//     const [password, setPassword] = useState("");
//     const [signInAs, setSignInAs] = useState("");
//     const [remember, setRemember] = useState(false);
//     const [username, setUsername] = useState("");
//     const [isError, setIsError] = useState(false);
//     const [msgError, setMsgError] = useState("");
//     const [currentPage, setCurrentPage] = useState('signIn');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(`your user is ${username}`);
//         axios.post('http://localhost:4000/auth/login', { username, password })
//             .then(function (res) {
//                 if (res.data.success) {
//                     localStorage.setItem('username', username);
//                     if (signInAs === 'Admin') {

//                         setCurrentPage('adminDashboard');
//                     }
//                     if (signInAs === 'Instructor') {

//                         setCurrentPage('instructorDashboard');
//                     }
//                     if (signInAs === 'Manager(HR)') {

//                         setCurrentPage('managerDashboard');
//                     }
//                     if (signInAs === 'Manager(Finance)') {

//                         setCurrentPage('financeDashboard');
//                     }
//                 } else {
//                     setIsError(true);
//                     setMsgError(res.data.msg);
//                     console.log("isError is: ", isError);
//                     console.log(msgError);
//                 }
//             }

//             )
//             .catch(err => console.log(err));


//     }

//     const handleForgotPassword = () => {
//         setCurrentPage('forgotPassword');
//     };
//     const renderPage = () => {
//         if (currentPage === 'signIn') {
//             return (
//                 <div className="full_content">
//                     <section>
//                         <div className="imgBx">
//                             <img src={zewdlogo} alt='' />
//                         </div>
//                         <div className="contentBx">
//                             <div className="formBx">
//                                 <h2>Sign in</h2>
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="inputBx">
//                                         <span>Username</span>
//                                         <input id='username' type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
//                                     </div>
//                                     <div className="inputBx">
//                                         <span>Password</span>
//                                         <input id='pass' type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} required />
//                                     </div>
//                                     <div className="inputBx">
//                                         <span>Sign in as:</span>
//                                         <select onChange={(e) => { setSignInAs(e.target.value) }} name="signInAs" value={signInAs} >
//                                             <option selected="selected">Admin</option>
//                                             <option>Manager(HR)</option>
//                                             <option>Manager(Finance)</option>
//                                             <option>Instructor</option>
//                                         </select>
//                                     </div>
//                                     <div className="remember">
//                                         <label for=""><input name='remember' checked={remember} type="checkbox" id='remember' onChange={(e) => setRemember(e.target.value)} />Remember me</label>
//                                         <label className="forget"><button onClick={handleForgotPassword}> Forgot password </button></label>
//                                     </div>
//                                     <div className="inputBx">
//                                         <input type="submit" value="sign in" name="" />
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             )
//         }
//         else if (currentPage === 'forgotPassword') {
//             return <ForgotPasswordForm />;
//         }
//         else if (currentPage === 'instructorDashboard') {
//             return <Instructor />
//         }
//         else if (currentPage === 'adminDashboard') {
//             return <Admin />
//         }
//         else if (currentPage === 'managerDashboard') {
//             return <Manager />
//         }
//         else if (currentPage === 'financeDashboard') {
//             return <Finance />
//         }
//     }
//     return (
//         <div>{renderPage()}</div>
//     );
// }

// export default SignIn;