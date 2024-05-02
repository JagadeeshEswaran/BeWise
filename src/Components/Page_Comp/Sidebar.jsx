import React from "react";
import { useNavigate } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoBookmarks } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import { IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSidebarIconClick = (e, endpoint) => {
    if (endpoint === "/login") {
      localStorage.clear();
      return;
    }

    e.preventDefault();

    navigate(endpoint);
    window.history.pushState({}, undefined, endpoint);
  };

  return (
    <section
      className="p-0 sidebar_container col-1 d-flex justify-content-between flex-column"
      style={{ width: "6%", height: "100svh", background: "aliceblue" }}
    >
      {/* Repco Logo */}
      <a href="/">
        <article className="d-flex justify-content-center align-items-center pt-3">
          <img
            src="/logo.png"
            alt="Repco Home Finance Logo"
            height={60}
            width={150}
            className="ms-3"
          />
        </article>
      </a>

      {/* Icons set 1 */}
      <article
        className="sidebar_icons_container d-flex flex-column w-100 justify-content-evenly align-items-center fs-2 mb-5"
        style={{ color: "", height: "25rem" }}
      >
        <a
          href="/"
          onClick={(e) => handleSidebarIconClick(e, "/")}
          title="Home"
        >
          <IoHome className="sidebar_icons" />
        </a>
        <a
          href="/search"
          onClick={(e) => handleSidebarIconClick(e, "/search")}
          title="Search Courses"
        >
          <IoSearchSharp className="sidebar_icons" />
        </a>
        <a
          href="/all_courses"
          onClick={(e) => handleSidebarIconClick(e, "/all_courses")}
          title="All Courses"
        >
          <IoPlay className="sidebar_icons" />
        </a>
        <a
          href="/saved_courses"
          onClick={(e) => handleSidebarIconClick(e, "/saved_courses")}
          title="Saved Courses"
        >
          <IoBookmarks className="sidebar_icons" />
        </a>
        <a
          href="/profile"
          onClick={(e) => handleSidebarIconClick(e, "/profile")}
          title="Profile"
        >
          <FaUserCircle className="sidebar_icons" />
        </a>
      </article>

      {/* Icons set 2 */}
      <article
        className="sidebar_icons_container d-flex flex-column w-100 justify-content-evenly align-items-center  fs-2"
        style={{ color: "", height: "8rem" }}
      >
        <a
          href="/settings"
          onClick={(e) => handleSidebarIconClick(e, "/settings")}
        >
          <IoSettingsSharp className="sidebar_icons" />
        </a>
        <a href="/login" onClick={(e) => handleSidebarIconClick(e, "/login")}>
          <IoMdLogOut className="sidebar_icons" />
        </a>
      </article>
    </section>
  );
};

export default Sidebar;
