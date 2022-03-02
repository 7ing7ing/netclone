import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route
          exact
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_IN}
            >
              <Signin />
            </IsUserRedirect>
          }
        ></Route>
        <Route
          exact
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_UP}
            >
              <Signup />
            </IsUserRedirect>
          }
        ></Route>
        <Route
          exact
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user} path={ROUTES.SIGN_IN} exact>
              <Browse />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.HOME}
            >
              <Home />
            </IsUserRedirect>
          }
        ></Route>
      </Routes>
    </Router>
  );
}
