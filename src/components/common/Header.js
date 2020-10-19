import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#5e2ca5", fontWeight: "bold" };

  const guestLinks = (
    <>
      <NavLink
        to='/customers'
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
        activeStyle={activeStyle}
      >
        Customers
      </NavLink>
      {" | "}
      {" | "}
      <NavLink
        to='/images'
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
        activeStyle={activeStyle}
      >
        Images
      </NavLink>
    </>
  );
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header fw8 i'>alinta energy</div>
        <nav className='dt w-100 mw8 center'>
          <div className='dtc v-mid tr pa3'>
            {guestLinks}
          </div>
        </nav>
        <div className='collapse navbar-collapse'>This is NavBar</div>
      </div>
    </nav>
  );
};
export default Header;
