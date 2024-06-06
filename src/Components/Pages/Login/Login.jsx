import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation()
    console.log(location,'location')
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch()
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
              
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
             
                </form>
                <p className="text-center mt-6">Do not have an account <Link className="text-blue-800 text-xl-bold" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;