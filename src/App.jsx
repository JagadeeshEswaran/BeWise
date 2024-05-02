import Main from "./Components/Page_Comp/Main";
import Sidebar from "./Components/Page_Comp/Sidebar";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Welcome from "./Components/Pages/Welcome/Welcome";
import Settings from "./Components/Pages/Settings/Settings";
import Logout from "./Components/Pages/Logout/Logout";
import Login from "./Components/Pages/UserAuth/Login";
import { AuthProvider } from "./AppContext/AuthContext";
import Signup from "./Components/Pages/UserAuth/Signup";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchMainContainer from "./Components/Pages/Search/SearchMainContainer";
import AllCoursesMain from "./Components/Pages/AllCourses/AllCoursesMain";
import BookmarkedCourses from "./Components/Pages/Bookmarked/BookmarkedCourses";
import UserProfileMain from "./Components/Pages/UserProfile/UserProfileMain";
import StatusCheck from "./Components/Pages/UserAuth/StatusCheck";
import AdminLogin from "./Components/Pages/UserAuth/AdminLogin";
import AdminDashboard from "./Components/AdminComponents/AdminDashboard";
import AdminSidebar from "./Components/AdminComponents/AdminSidebar";
import UserManagement from "./Components/AdminComponents/Pages/UserManagement";
import AdminUserProfile from "./Components/AdminComponents/Pages/AdminUserProfile";

const queryClient = new QueryClient();

const App = () => {
  const isAuthUser = localStorage.getItem("isLoggedIn");
  const isAuthAdmin = localStorage.getItem("isAdminUser");

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* User Routes */}
          <section
            className="row"
            style={{ width: "100vw", marginLeft: "0px" }}
          >
            {isAuthUser && !isAuthAdmin ? (
              <Sidebar />
            ) : isAuthUser && isAuthAdmin ? (
              <AdminSidebar />
            ) : null}

            <article className="p-0 col-11">
              <Routes>
                <Route
                  path="/login"
                  element={
                    isAuthUser === null ? <Login /> : <Navigate to="/" />
                  }
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/statusCheck" element={<StatusCheck />} />
                <Route
                  path="/"
                  element={
                    isAuthUser !== null ? <Welcome /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/search"
                  element={
                    isAuthUser !== null ? (
                      <SearchMainContainer />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/all_courses"
                  element={
                    isAuthUser !== null ? (
                      <AllCoursesMain />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/saved_courses"
                  element={
                    isAuthUser !== null ? (
                      <BookmarkedCourses />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/profile"
                  element={
                    isAuthUser !== null ? (
                      <UserProfileMain />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/settings"
                  element={
                    isAuthUser !== null ? (
                      <Settings />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />

                {/* ===================== Admin Routes =============================== */}
                <Route
                  path="/admin/login"
                  element={
                    isAuthUser === null ? (
                      <AdminLogin />
                    ) : (
                      <Navigate to="/admin/home" />
                    )
                  }
                />
                <Route
                  path="/admin/home"
                  element={
                    isAuthUser ? (
                      <AdminDashboard />
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    isAuthUser ? (
                      <UserManagement />
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />
                <Route
                  path="/admin/profile"
                  element={
                    isAuthUser ? (
                      <AdminUserProfile />
                    ) : (
                      <Navigate to="/admin/login" />
                    )
                  }
                />

                <Route path="/logout" element={<Logout />} />
              </Routes>
            </article>

            <article
              className=" position-absolute"
              style={{ bottom: "5px", left: "50%" }}
            >
              <p className=" fw-semibold" style={{ fontSize: "12px" }}>
                IT Dept. @ 2024
              </p>
            </article>
          </section>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            // transition: Bounce,
          />
        </BrowserRouter>

        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </AuthProvider>
  );
};
export default App;
