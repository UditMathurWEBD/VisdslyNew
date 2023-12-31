import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Payments from "./scenes/Payments";
import Login from "./scenes/login/login";
import Signup from "./scenes/signup/signup";
import ForgotPass from "./scenes/forgotPassword/forgotpass";
import MyProfileForm from "./scenes/myprofile/myProfile";
import ResetPassword from "./scenes/resetPassword/resetPassword";
// import NotFoundRoute from "./scenes/404/404";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const shouldRenderTopbarAndSidebar = (path) => {
    // Define the paths where you want to hide Topbar and Sidebar
    const pathsWithoutTopbarAndSidebar = [
      "/login",
      "/signup",
      "/forgotpass",
      /^\/resetPassword\/.*$/,
    ];

    // Check if the current path is in the exclusion list
    return !pathsWithoutTopbarAndSidebar.some((pattern) =>
      typeof pattern === "string" ? path === pattern : pattern.test(path)
    );
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          {shouldRenderTopbarAndSidebar(window.location.pathname) && (
            <Sidebar isSidebar={isSidebar} />
          )}
          <main className="content">
            {shouldRenderTopbarAndSidebar(window.location.pathname) && (
              <Topbar setIsSidebar={setIsSidebar} />
            )}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/myprofile" element={<MyProfileForm />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpass" element={<ForgotPass />} />
              <Route
                path="/resetPassword/:id/:token"
                element={<ResetPassword />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
