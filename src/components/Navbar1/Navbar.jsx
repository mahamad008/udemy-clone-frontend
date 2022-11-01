import React from "react";
import { Link } from "react-router-dom";

import css from "./Navbar.module.css";

import SearchBar from "../../utils/SearchBar/SearchBar";
import Button1 from "../../utils/Buttons/Button1/Button1";

import globeIcon from "/icons/globe.png";

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <Link className={css.logoBox} to="/">
        <img src="/images/logo-udemy.svg" alt="logo" className={css.logo} />
      </Link>
      <div className={css.catDropdown}>Categories</div>
      <div className={css.searchBox}>
        <SearchBar />
      </div>
      <a className={css.hovBox} href="#" target="_blank">
        Udemy Bussiness
      </a>
      <a className={css.hovBox} href="#" target="_blank">
        Teach on Udemy
      </a>
      <Link to="/cart" className={css.cartBox}>
        <img
          className={css.cartIcon}
          src="/icons/shopping-cart.png"
          alt="cart icon"
        />
      </Link>
      <div className={css.btns}>
        <Button1 txt="Login" link="/login" />
        <Button1
          txt="Sign up"
          bck="#1c1d1f"
          link="/signup"
          color="#fff"
          hovBck="#000"
        />
        <Button1 img={globeIcon} />
      </div>
    </div>
  );
};

export default Navbar;
