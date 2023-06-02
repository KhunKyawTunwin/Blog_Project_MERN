import React from "react";
import "./settings.css";
import Sidebar from "../../Components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProPic">
            <img
              className="settingsProPic_img"
              src="https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=716&q=80"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProPicIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Mr Khun" />
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />
          <label>Password</label>
          <input type="password" />

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
