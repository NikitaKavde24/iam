import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

export default function PrivateRoute({ component, ...rest }) {
  // const isAuthed = useSelector((store) => store.auth.isAuthed);
  // if (!isAuthed) {
  //   return <Navigate to={'/login'} />;
  // }
  return <Outlet />;
}
