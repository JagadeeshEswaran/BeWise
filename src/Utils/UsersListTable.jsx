import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import BeWise_Backend from "../Axios/GlobalInstance";
import { notification } from "antd";

const UsersListTable = ({
  listData,
  setRefreshFlag,
  refreshFlag,
  variant,
  isLoading,
  setLoading,
  endPoint,
  handleFetchUsers,
}) => {
  const [data, setData] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  console.log(endPoint);

  const handleAppApprove = async (isApproved, param) => {
    setRefreshFlag(!refreshFlag);
    setLoading(true);

    try {
      const response = await BeWise_Backend.put(`/admin/${endPoint}/${param}`, {
        newStatus: isApproved,
        userData: listData.find((item) => item.u_id === param),
      });

      if (response.data.success) {
        () => {
          api[success]({
            message: "Notification Title",
            description:
              "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
          });
        };

        handleFetchUsers("allReqAuthors");
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
      alert("Internal Server Error !");
    }
  };

  useEffect(() => {
    setData([...listData]);
    // listData ? setLoading(false) : null;
  }, [listData]);

  console.log(variant);
  // alert(endPoint);

  return (
    <>
      <table className="table m-2">
        <thead>
          <tr>
            {/* <th scope="col">SL No</th> */}
            {variant === 2 && endPoint === "authorizeAuthor" ? (
              <></>
            ) : (
              <th scope="col">User ID</th>
            )}
            <th scope="col">Username</th>

            {variant === 2 && endPoint === "authorizeAuthor" ? (
              <></>
            ) : (
              <th scope="col">Role</th>
            )}

            {variant === 2 && endPoint === "authorizeAuthor" ? (
              <></>
            ) : (
              <th scope="col">Branch</th>
            )}

            <th scope="col">Region</th>

            {variant === 1 ? (
              <>
                {" "}
                <th scope="col">Status</th>
                <th scope="col" className="text-center">
                  Actions
                </th>
              </>
            ) : (
              <>
                <th scope="col">Account Created on</th>
              </>
            )}
          </tr>
        </thead>

        {isLoading ? (
          <article
            className="mt-5 d-flex justify-content-center align-items-center position-absolute end-50 start-50 "
            stylw={{ width: "100%" }}
          >
            <Bars
              height="80"
              width="80"
              color="rgb(255, 193, 7)"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </article>
        ) : (
          <>
            {" "}
            {data?.map((item, idx) =>
              item.status !== "Approved" || item?.isApproved?.data[0] === 0 ? (
                <>
                  <tbody key={item?.id}>
                    <tr>
                      {/* <td>{idx + 1}</td> SL No */}
                      {/* <td>{"E000" + item?.u_id}</td> User ID */}
                      {variant === 2 && endPoint === "authorizeAuthor" ? (
                        <></>
                      ) : (
                        <td>
                          {item?.u_id < 10
                            ? "E000" + item?.u_id
                            : item?.u_id < 100
                            ? "E00" + item?.u_id
                            : item?.u_id < 1000
                            ? "E0" + item?.u_id
                            : item?.u_id < 10000
                            ? "E" + item?.u_id
                            : item?.u_id}
                        </td>
                      )}
                      {/* Username */}
                      <td>{item?.username}</td>
                      {/* Role */}
                      {variant === 2 && endPoint === "authorizeAuthor" ? (
                        <>
                          <td>
                            {/* {item?.branch_or_dept
                              ? JSON.parse(item?.branch_or_dept)?.role
                              : ""} */}
                          </td>
                        </>
                      ) : (
                        <td>{item?.role ? item?.role : item?.userType}</td>
                      )}

                      {/* Branch */}
                      {variant === 2 && endPoint === "authorizeAuthor" ? (
                        <>
                          <td>
                            {/* {item?.branch_or_dept
                              ? JSON.parse(item.branch_or_dept).branch_or_dept
                              : ""} */}
                          </td>
                        </>
                      ) : (
                        <td>
                          {item?.role ? item?.role : item?.branch_or_dept}
                        </td>
                      )}

                      {/* Region */}
                      <td>{item?.region}</td>

                      {variant === 1 ? (
                        <>
                          {/* Status */}
                          <td>
                            {item?.status || item?.isApproved?.data[0] === 0
                              ? "Pending"
                              : "Approved"}
                          </td>

                          <td className=" d-flex justify-content-evenly ">
                            {(endPoint !== "authorizeAuthor" &&
                              item?.status !== "Approved") ||
                            (endPoint === "authorizeAuthor" &&
                              item?.isApproved?.data[0] !== 1) ? (
                              <button
                                className="btn btn-info"
                                onClick={() =>
                                  handleAppApprove("Approved", item?.u_id)
                                }
                              >
                                Approve
                              </button>
                            ) : (
                              <></>
                            )}

                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                handleAppApprove("Rejected", item?.u_id)
                              }
                            >
                              Reject
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          {variant === 2 && endPoint === "authorizeAuthor" ? (
                            <td>
                              {/* {item?.branch_or_dept
                                ? formatDate(
                                    JSON.parse(item?.branch_or_dept)?.approvedAt
                                  )
                                : ""} */}
                            </td>
                          ) : (
                            <td>
                              {new Date(
                                item?.accountCreationDate
                              ).toLocaleString()}
                            </td>
                          )}
                        </>
                      )}
                    </tr>
                  </tbody>
                </>
              ) : (
                <></>
              )
            )}
          </>
        )}
      </table>
    </>
  );
};

export default UsersListTable;
