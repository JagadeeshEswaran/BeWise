import React from "react";

import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleSidebarIconClick = (e, endpoint) => {
    if (endpoint === "/admin/login") {
      localStorage.clear();
      location.reload();
      return;
    }

    navigate(endpoint);
    window.history.pushState({}, undefined, endpoint);
  };

  return (
    <section
      className="p-0 sidebar_container d-flex justify-content-between flex-column"
      style={{ height: "100svh", background: "aliceblue" }}
    >
      {/* Repco Logo */}
      <a href="/admin/home">
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
        className="sidebar_icons_container d-flex flex-column w-100 justify-content-center align-items-center fs-2 mb-5"
        style={{ color: "", height: "25rem" }}
      >
        <a href="/dashboard" title="Dashboard">
          <RiDashboardFill className="sidebar_icons" />
        </a>

        <article
          onClick={(e) => handleSidebarIconClick(e, "/admin/home")}
          title="Home"
          className="mb-3"
        >
          <IoHome className="sidebar_icons" />
        </article>
        <article
          onClick={(e) => handleSidebarIconClick(e, "/admin/users")}
          title="Manage Users"
          className="mb-3"
        >
          <FaUsers className="sidebar_icons" />
        </article>
        <article
          onClick={(e) => handleSidebarIconClick(e, "/admin/profile")}
          title="Admin Profile"
          className="mb-3"
        >
          <MdAdminPanelSettings className="sidebar_icons" />
        </article>
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
        <article onClick={(e) => handleSidebarIconClick(e, "/admin/login")}>
          <IoMdLogOut className="sidebar_icons" />
        </article>
      </article>
    </section>
  );
};

export default AdminSidebar;
