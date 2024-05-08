import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import BeWise_Backend from "../Axios/GlobalInstance";

const UsersListTable = ({
  listData,
  setRefreshFlag,
  refreshFlag,
  variant,
  isLoading,
  setLoading,
  endPoint,
}) => {
  const [data, setData] = useState([]);

  const handleAppApprove = async (isApproved, param) => {
    setRefreshFlag(!refreshFlag);
    setLoading(true);

    try {
      const response = await BeWise_Backend.put(`/admin/${endPoint}/${param}`, {
        newStatus: isApproved,
        userData: listData.find((item) => item.u_id === param),
      });

      if (response.data.success) {
        alert(response.data.message);
        location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("Internal Server Error !");
    }
  };

  useEffect(() => {
    setData(listData);
    listData ? setLoading(false) : null;
  }, [listData]);

  // console.log(listData);
  // alert(endPoint);

  return (
    <>
      <table className="table m-2">
        <thead>
          <tr>
            {/* <th scope="col">SL No</th> */}
            <th scope="col">User ID</th>
            <th scope="col">Username</th>
            <th scope="col">Role</th>
            <th scope="col">Branch</th>
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
                      {/* Username */}
                      <td>{item?.username}</td>
                      {/* Role */}
                      <td>{item?.role ? item?.role : item?.userType}</td>{" "}
                      {/* Branch */}
                      <td>
                        {item?.branch ? item?.branch : item?.branch_or_dept}
                      </td>{" "}
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
                            {!item?.status ||
                            !item?.isApproved?.data[0] === 0 ? (
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
                          <td>
                            {new Date(
                              item?.accountCreationDate
                            ).toLocaleString()}
                          </td>{" "}
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
