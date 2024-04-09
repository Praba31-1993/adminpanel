import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
function Login({auth}) {
    const [name, setName] = useState('');
    const [password, setPassword]=useState('')
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('name', name,'password', password);
        auth();
        navigate("/dashboard")
    }
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleSubmit} style={{cursor:'pointer'}}>Submit</button>
            </form>
        </div>
    );
}

export default Login;