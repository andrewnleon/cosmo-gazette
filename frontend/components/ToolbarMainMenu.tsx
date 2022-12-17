import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

export default function ToolbarMenu() {
  return (
    <>
      <Nav className="text-uppercase" defaultActiveKey="/">
        {/* <Scrollspy
          items={["recentwork"]}
          offset={70}
          className="mb-0 pl-2 list-unstyled"
          currentClassName="text-secondary active"
        >
          <li>
            <NavLink href="#recentwork">
              <span>Recent Work</span>
            </NavLink>
          </li>
        </Scrollspy> */}
        <NavLink href="/portfolio">
          <span>Portfolio</span>
        </NavLink> 
        <NavLink href="/case-studies">
          <span>Case Studies</span>
        </NavLink>

        <NavLink href="/about">
          <span>About</span>
        </NavLink>
        <NavLink href="/about">
          <span>Contact</span>
        </NavLink> 
      </Nav>
    </>
  );
}
