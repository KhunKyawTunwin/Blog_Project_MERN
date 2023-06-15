import React, { useContext, useState } from "react";
import "./settings.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import { Context } from "../../content/Content";
import Axios from "axios";
import { BACKEND_URL } from "../../config";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
    }
    try {
      await Axios.post(`${BACKEND_URL}/upload`, data);
      setSuccess(true);
    } catch (error) {}

    try {
      await Axios.put(`${BACKEND_URL}/users/${user._id}`, updatedUser);
      setSuccess(true);
      window.location.replace("/");
    } catch (error) {
      console.log("Nothing input data", error);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsProPic">
            <img
              className="settingsProPic_img"
              src={file ? URL.createObjectURL(file) : user.profilePic}
            />
            <label htmlFor="fileInput">
              <i className="settingsProPicIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span style={{ color: "green" }}>Profile has been updated.</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
