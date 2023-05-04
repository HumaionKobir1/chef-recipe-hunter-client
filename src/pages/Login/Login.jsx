import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/google.png'
import { FaBeer, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';




const Login = () => {
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = event => {

        setSuccess('')
        setError('')

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true})
            setSuccess('Login successfully')
        })
        .catch(error => {
            setError("Email and Password doesn't match ")
        })
    }

    const handleShowPassword = event => {
        setShowPassword(event.target.checked);
        
    }

    const handleGoogleSignIn = () => {
        setError('')
        signInWithGoogle()
        .then(result => {
            const loggedUser =result.user;
            console.log(loggedUser)
            setSuccess('Login Successful');
        })
        .catch(error => {
            setError((error.message).slice(10, 50))
        })
    }

    const auth =getAuth(app)
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        setError('')
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser2 =result.user;
            console.log(loggedUser2)
            setSuccess('Login Successful');
        })
        .catch(error => {
            setError((error.message).slice(10, 50))
        })
    }

    return (
        <div className='mx-auto md:w-2/4 bg-white rounded-lg shadow-md p-8 mt-10 mb-10'>
            <h1 className='text-2xl font-semibold text-center'>Please Login</h1>
            <form onSubmit={handleLogin} className="w-full max-w-sm mx-auto mt-10">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email"  name='email' id="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type={showPassword ? 'text' : 'password'} name='password' id="password" placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>

                <div className='flex gap-1 justify-start'>
                    <input onClick={handleShowPassword}  type="checkbox" id="show-password" />
                    <label htmlFor="show-password">Show Password</label>
                </div>

                <div className='text-center mt-2 mb-6'>
                    <p className='text-lg font-medium text-red-900'>{error}</p>
                    <p className='text-lg font-medium text-green-800'>{success}</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                    </button>
                    <a  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                    </a>
                </div>
            </form>
            <div className='mt-4 text-center'>
                <p>New to Thatix? Please <Link to='/register' className='text-blue-500 hover:text-blue-800'>Registration</Link></p>
            </div>

            <div className=' text-center md:w-[35%] w-full rounded mx-auto mt-5 border-2 hover:bg-slate-300 py-2 flex gap-3 justify-center items-center'>
                <img className='w-6 h-6' src={google} alt="" />
                <button onClick={handleGoogleSignIn}>  Continue with Google</button>
            </div>
            <div className='text-center md:w-[35%] w-full rounded mx-auto mt-1 border-2 hover:bg-slate-300 py-2 flex gap-3 justify-center items-center'>
                <FaGithub></FaGithub> 
                <button onClick={handleGithubSignIn}>Continue with Github</button>
            </div>

        </div>
    );
};

export default Login;