import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { IoHome } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { IoBookmarks } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import { IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

import "./sidebar.css";
import ConfirmationModal from "../../Utils/ConfirmationModal";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSidebarIconClick = (e, endpoint) => {
    console.log(endpoint);

    if (endpoint === "/login") {
      localStorage.clear();

      location.reload();
    }

    e.preventDefault();

    navigate(endpoint);
    window.history.pushState({}, undefined, endpoint);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section
      className="p-0 sidebar_container col-1 d-flex justify-content-between flex-column"
      style={{ width: "4.5%", height: "100svh", background: "aliceblue" }}
    >
      {/* Repco Logo */}
      <a href="/">
        <article className="d-flex justify-content-center align-items-center pt-3">
          <img
            src="/logo.png"
            alt="Repco Home Finance Logo"
            height={60}
            width={120}
            className="ms-1"
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
          <IoSettingsSharp className="sidebar_icons" />
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
          className=""
        >
          <img
            src="/userProfilePic_2.png"
            alt=""
            height={50}
            className="sidebar_icons mb-1 rounded-circle bg-secondary"
          />
        </a>

        <article onClick={showModal}>
          <IoMdLogOut className="sidebar_icons" />
        </article>
      </article>

      <ConfirmationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSidebarIconClick={handleSidebarIconClick}
      />
    </section>
  );
};

export default Sidebar;
