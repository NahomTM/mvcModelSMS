// import React, { useState, useEffect, useRef } from 'react';
// import '../css/signIn.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamation } from '@fortawesome/free-solid-svg-icons';
// import EmailSentSuccess from './emailSent';
// import zewdlogo from '../resources/logo2.png';

// function ForgotPasswordForm() {
//     const [email, setEmail] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [currentPage, setCurrentPage] = useState('forgotPassword');
//     const inputRef = useRef(null);

//     useEffect(() => {
//         if (emailError) {
//             const timer = setTimeout(() => {
//                 setEmailError('');
//             }, 2500);

//             return () => clearTimeout(timer);
//         }
//     }, [emailError]);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!email) {
//             setEmailError('Please fill in your email');
//             return;
//         }

//         if (!isValidEmail(email)) {
//             setEmailError('Please enter a valid email');
//             return;
//         }
//         else {
//             handleEmailSent()
//         }
//     };
//     const handleEmailSent = () => {
//         setCurrentPage('emailSent')
//     }
//     const isValidEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         setEmailError('');
//     };

//     const handleInputClick = () => {
//         setEmailError('');
//         inputRef.current.focus();
//     };

//     const renderPage = () => {
//         if (currentPage === 'forgotPassword') {
//             return (
//                 <div className="full_content">
//                     <section>
//                         <div className="imgBx">
//                             <img src={zewdlogo} alt="" />
//                         </div>
//                         <div className="contentBx">
//                             <div className="formBx">
//                                 <h2>Forgot Password</h2>
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="inputBx">
//                                         <span>Email</span>
//                                         <input
//                                             ref={inputRef}
//                                             id="email"
//                                             type="text"
//                                             name="email"
//                                             value={email}
//                                             onChange={handleEmailChange}
//                                             onClick={handleInputClick}
//                                         />
//                                         {emailError && (
//                                             <div className="alert">
//                                                 <span>
//                                                     <FontAwesomeIcon icon={faExclamation} className="alert-icon" />
//                                                 </span>
//                                                 <div className="errorMsg">{emailError}</div>
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="inputBx">
//                                         <label htmlFor="email">Role</label>
//                                         <select name="" id="">
//                                             <option value="">Admin</option>
//                                             <option value="">Instructor</option>
//                                             <option value="">Manager</option>
//                                             <option value="">Accountant</option>
//                                         </select>
//                                     </div>
//                                     <div className="inputBx">
//                                         <input type="submit" value="Send Email" />
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             )
//         }
//         else if (currentPage === 'emailSent'){
//             return <EmailSentSuccess />
//         }
//     }

//     return (
//         <div>{renderPage()}</div>
//     );
// }

// export default ForgotPasswordForm;
