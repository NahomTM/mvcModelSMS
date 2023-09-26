import React from 'react';
import { useEffect } from 'react';
import {useState, useRef} from 'react';
import axios from 'axios';
import '../css/electronApp.css';
import zewdlogo from '../resource/logo2.png';

function ResetPasswordForm() {
    const [newPassword, setNewPassword] = useState('');
    const token = useRef(null);
    useEffect(()=>{
        const searchParameter = new URLSearchParams(window.location.search);
        token.current = searchParameter.get('token');
    })
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log(token.current);
        await axios.post('http://localhost:4000/auth/resetPassword', {
          newPassword: newPassword, token: token
        }).then(function(res){
            if(res.data.success){
                //password reset successfully
            }
            else{

            }
        });
        
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
        <div className="full_content">
            <section>
                <div className="imgBx">
                    <img src={zewdlogo} alt='' />
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <form onSubmit={handleSubmit}>
                            <div className="inputBx">
                                <label htmlFor="newPassword">New password</label>
                                <input type="password" id="newPassword" name="newPassword" placeholder="Password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
                            </div>
                            <div className="inputBx">
                                <label htmlFor="confirmPassword">Confirm password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Password" />
                            </div>
                            <div className="inputBx">
                                <input type="submit" value="Reset password" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ResetPasswordForm;