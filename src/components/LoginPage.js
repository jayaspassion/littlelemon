import React from "react";

const LoginPage = () => {
  return (
    <section className="login-page">
      <form className="login-form">
        <h1 className="h1--primary color--primary">Login</h1>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn--primary">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
