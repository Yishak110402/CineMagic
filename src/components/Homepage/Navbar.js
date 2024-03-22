import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [mobShow, setMobShow]=useState(false)
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}><NavLink to="/">CineMagic</NavLink></div>
      <ul className={styles.desktopNav}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="nowshowing">Now Showing</NavLink>
        </li>
        <li>
          <NavLink to="booktickets">Book Tickets</NavLink>
        </li>
      </ul>
      <ul className={styles.mobileNav} id="mobNav">
        <div onClick={()=>(setMobShow((m)=>(!m)))}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      </div>
        {mobShow && <div className={styles.mobileNavContainer} onClick={()=>(setMobShow(false))}>
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="nowshowing">Now Showing</NavLink>
        </li>
        <li>
          <NavLink to="booktickets">Book Tickets</NavLink>
        </li>
        </div>}
      </ul>
    </nav>
  );
}
