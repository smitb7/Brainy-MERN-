import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home Page </Link> 
        <br />
        <Link to="/blogs">Blogs Page</Link>
        <br />
        <Link to="/contacts">  Contacts Page </Link>
        <br />
        <Link to="/nopage">No page</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;