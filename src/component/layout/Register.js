import React from "react";
import ja from "./ja21.png";

const Register = () => {
  return (
    <div
      style={{
        paddingTop: "150px",
        paddingBottom: "150px",
        height: "100%",
        alignItems: "center",
      }}
    >
      <div className="text-center">
        <form className="form-signin">
          <img className="mb-4" src={ja} alt="" width="100" height="100" />
          <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
          <label for="inputEmail" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            placeholder="Name"
            required
            autofocus
          />
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <br />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Register
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
        </form>
      </div>
    </div>
  );
};

export default Register;