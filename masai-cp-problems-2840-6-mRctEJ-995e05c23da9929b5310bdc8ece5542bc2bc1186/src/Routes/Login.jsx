import React, {useContext,useState} from 'react';
import { useHistory} from 'react-router-dom';
import { AuthContext} from './AuthContext';

const Login = () =>{
  const {login} =useContext(AuthContext);
  const history = useHistory();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const handleLogin = async (e)=> {
    e.preventDefault();
    await login(email, password);
    history.push('/dashboard');
  };


  return (
    <div>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
