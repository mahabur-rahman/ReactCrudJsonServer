import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3003/users`, user);
    history.push("/");
  };

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={formSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={user.website}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
