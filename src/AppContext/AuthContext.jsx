import { createContext, useContext, useEffect, useState } from "react";
import Recon_CKYC_Backend from "../Axios/GlobalInstance";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === null ? false : true
  );
  const [userData, setUserData] = useState({
    access_privilege: "",
    emp_branch: "",
    emp_id: "",
    emp_role: "",
    name: "",
    username: "",
  });
  const [branchRemarks, setBranchRemarks] = useState(null);

  const fetchCaseWiseRemarks = async (brCode) => {
    // try {
    //   const response = await Recon_CKYC_Backend.get(
    //     `/recon/branch_cases/${brCode}`
    //   );
    //   if (response.status === 200) {
    //     await setBranchRemarks(response.data);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Something went wrong, Please wait a while.");
    // }
  };

  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem("userData");
    setUserData(JSON.parse(userDataFromLocalStorage));

    fetchCaseWiseRemarks(JSON.parse(userDataFromLocalStorage)?.emp_branch);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, branchRemarks }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAppAuth = () => {
  const context = useContext(AuthContext);

  // if (!context) console.log("GlobalContext must be inSide Component");

  return context;
};
