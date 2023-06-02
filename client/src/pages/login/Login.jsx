import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <form action="" className="loginForm">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">Register</button>
      </form>
    </div>
  );
};

export default Login;
