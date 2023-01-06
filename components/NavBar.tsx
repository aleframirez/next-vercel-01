import React from "react";
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {
        menuItems.map( ({ text, href }) => (
          <ActiveLink key={ href } texto={ text } href={ href }/>
        ))
      }
      {/* <ActiveLink texto="Home" href="/" />
      <ActiveLink texto="About" href="/about" />
      <ActiveLink texto="Contact" href="/contact" />
      <ActiveLink texto="Pricing" href="/pricing" /> */}
    </nav>
  );
};
