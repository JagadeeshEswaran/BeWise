import React, { useEffect, useRef, useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { toast } from "react-toastify";

import "./Styles/UserMgmt.css";
import BeWise_Backend from "../../../Axios/GlobalInstance";
import UsersListTable from "../../../Utils/UsersListTable";

const UserManagement = () => {
  const [selectedFilter, setSelectedFilter] = useState("btnNewUsers");
  const [refreshFlag, setRefreshFlag] = useState(true);
  const [usersList, setUsersList] = useState();
  const [variant, setVaraint] = useState(1);
  const [learnersList, setLearnersList] = useState([]);
  const userSearchRef = useRef();

  const handleFilterBtnClick = async (e, dialog) => {
    const filterId = e.target.id;
    setSelectedFilter(filterId);

    if (filterId === "btnNewUsers") {
      await handleFetchUsers("registeredUsers");
      setVaraint(1);
    } else if (filterId === "btnRegLearners") {
      await handleFetchUsers("learners");
      setVaraint(2);
    }
  };

  const handleFetchUsers = async (usersType) => {
    try {
      const response = await BeWise_Backend.get(`/admin/${usersType}`);
      if (response.data.success) {
        setUsersList(response.data.data);
      }
    } catch (error) {
      console.log("Error : ", error);
      // toast.danger("Internal Server Error : ", error);
    }
  };

  useEffect(() => {
    handleFetchUsers("registeredUsers");
  }, [setRefreshFlag]);

  console.log(usersList);

  return (
    <section
      className=" d-flex flex-column justify-content-center align-items-center"
      style={{ height: "97svh" }}
    >
      {/* Header Component */}
      <article
        className="header_container d-flex justify-content-between align-items-center rounded-1 mb-2 w-100 ms-5"
        style={{ height: "10vh" }}
      >
        <article className="d-flex justify-content-between ps-3">
          <article
            id="btnNewUsers"
            className={`border btn me-3 px-4 py-2 ${
              selectedFilter === "btnNewUsers" ? "btn-warning" : "btn-light"
            }`}
            onClick={(e) => handleFilterBtnClick(e, "Rendering New Users")}
          >
            New Users
          </article>
          <article
            id="btnRegLearners"
            className={`border btn me-3 px-4 py-2 ${
              selectedFilter === "btnRegLearners" ? "btn-warning" : "btn-light"
            }`}
            onClick={(e) =>
              handleFilterBtnClick(e, "Rendering Registered Learners")
            }
          >
            Learners
          </article>
        </article>

        <article className="header_search_container border-danger d-flex justify-content-center align-items-center position-relative">
          <input
            type="text"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 6))}
            name=""
            id=""
            className="header_serach_input w-100 rounded border-0 shadow-sm px-2"
            ref={userSearchRef}
          />

          <MdPersonSearch
            className="fs-2 position-absolute end-0 opacity-50"
            type="button"
            onClick={() => handleUserSearch(userSearchRef)}
          />
        </article>
      </article>

      <article className="card w-100 ms-5" style={{ height: "83vh" }}>
        <UsersListTable
          listData={usersList?.length > 0 ? usersList : []}
          setRefreshFlag={setRefreshFlag}
          refreshFlag={refreshFlag}
          variant={variant}
        />
      </article>
    </section>
  );
};

export default UserManagement;
