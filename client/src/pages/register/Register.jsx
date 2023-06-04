import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">Login</button>
      </form>
    </div>
  );
};

export default Register;
