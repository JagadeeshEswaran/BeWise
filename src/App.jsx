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

const queryClient = new QueryClient();

const App = () => {
  const isAuthUser = localStorage.getItem("isLoggedIn");

  // console.log(isAuthUser);

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <section className="row">
            {isAuthUser && <Sidebar />}

            <article className="p-0 col-11">
              <Routes>
                <Route
                  path="/login"
                  element={
                    isAuthUser === null ? <Login /> : <Navigate to="/" />
                  }
                />
                <Route path="/signup" element={<Signup />} />
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
                <Route path="/logout" element={<Logout />} />
              </Routes>
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
