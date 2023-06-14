import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../config/index";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  //   const [fixed, setFixed] = useState(false);
  //
  //   const setFixedSidebar = () => {
  //     if (window.scrollY >= 500) {
  //       setFixed(true);
  //     } else {
  //       setFixed(false);
  //     }
  //   };
  //   window.addEventListener("scroll", setFixedSidebar);

  useEffect(() => {
    const getCats = async () => {
      const response = await Axios.get(`${BACKEND_URL}/categories`);
      setCats(response.data);
    };
    getCats();
  }, []);

  return (
    <div className={`sidebar`}>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="aboutMe"
        />
        <p>
          Feel free to personalize this content based on your specific skills,
          experiences, and achievements as a Full Stack Developer.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((category) => (
            <Link
              key={category._id}
              to={`/?cat=${category.name}`}
              className="link"
            >
              <li className="sidebarListItem">{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
