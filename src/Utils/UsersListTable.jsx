import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import BeWise_Backend from "../Axios/GlobalInstance";

const UsersListTable = ({ listData, setRefreshFlag, refreshFlag, variant }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handleAppApprove = async (isApproved, id) => {
    try {
      const response = await BeWise_Backend.put(`/admin/userAuth/${id}`, {
        newStatus: isApproved,
        userData: listData.find((item) => item.u_id === id),
      });

      if (response.data.success) {
        alert(response.data.message);
        setRefreshFlag(!refreshFlag);
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

  console.log(listData);

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
                <th scope="col">Account Created at</th>
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
              item.status !== "Approved" ? (
                <>
                  <tbody key={item?.id}>
                    <tr>
                      {/* <td>{idx + 1}</td> SL No */}
                      <td>{item?.u_id}</td> {/* User ID */}
                      <td>{item?.username}</td> {/* Username */}
                      <td>{item?.role ? item?.role : item?.userType}</td>{" "}
                      {/* Role */}
                      <td>
                        {item?.branch ? item?.branch : item?.branch_or_dept}
                      </td>{" "}
                      {/* Branch */}
                      <td>{item?.region}</td> {/* Region */}
                      {variant === 1 ? (
                        <>
                          <td>{item?.status}</td> {/* Status */}
                          <td className=" d-flex justify-content-evenly ">
                            <button
                              className="btn btn-info"
                              onClick={() =>
                                handleAppApprove("Approved", item?.u_id)
                              }
                            >
                              Approve
                            </button>
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
                            {new Date(item?.accountCreationDate).getTime()}
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
