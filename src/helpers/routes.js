import React from "react";
import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  if (user) {
    return <Navigate {...rest} to={{ pathname: loggedInPath }} />;
  }
  return children;
  //   return (
  //     <Route
  //       {...rest}
  //       render={() => {
  //         if (user) {
  //           return <Navigate to={{ pathname: loggedInPath }} />;
  //         }
  //         return children;
  //       }}
  //     />
  //   );
}

export function ProtectedRoute({ user, path, children, ...rest }) {
  if (!user) {
    return <Navigate to={path} />;
  }

  return children;
}
