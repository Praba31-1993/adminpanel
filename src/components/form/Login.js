import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { emailRegex, passwordRegex } from '../../commoncomponents/Regex';
import { validationMessages } from '../../commoncomponents/Messgaes';
function Login() {
    const [email, setEmail] = useState('');
    const [emailErrorText, setEmailErrorText] = useState('')
    const [password, setPassword] = useState('')
    const [passwordlErrorText, setPasswordErrorText] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!email){
            setEmailErrorText(validationMessages.email_required)
        }
        if(!password){
            setPasswordErrorText(validationMessages.password_required)
        }
        else{
            navigate("/dashboard")
        }
    }
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={email}
                        onChange={(e) => {
                            if (!emailRegex.test(e.target.value)) {
                                setEmail(e.target.value)
                                setEmailErrorText(validationMessages.email)
                            }
                            else {
                                setEmail(e.target.value)
                                setEmailErrorText("")
                            }
                        }}
                        class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                {emailErrorText && <p style={{ color: 'red' }}>{emailErrorText}</p>}

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <div class="input-group">
                        <input type={showPassword?"text":"password"} class="form-control" id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => {
                                if (!passwordRegex.test(e.target.value)) {
                                    setPassword(e.target.value)
                                    setPasswordErrorText(validationMessages.password)
                                }
                                else {
                                    setPassword(e.target.value)
                                    setPasswordErrorText("")
                                }
                            }}
                            placeholder="Password" />
                        <div class="input-group-prepend" >
                            <span class="input-group-text" id="inputGroupPrepend2" style={{cursor:'pointer'}}>
                                {showPassword ? <VisibilityIcon onClick={() => setShowPassword(false)} />

                                    :
                                    <VisibilityOffIcon onClick={() => setShowPassword(true)} />
                                }
                            </span>
                        </div>
                    </div>
                    {passwordlErrorText && <p style={{ color: 'red' }}>{passwordlErrorText}</p>}

                </div>

                <button type="submit" class="btn btn-primary" onClick={handleSubmit} style={{cursor:'pointer'}}>Submit</button>
            </form>
        </div>
    );
}

export default Login;