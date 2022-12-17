import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import ToolbarMenuMobile from "./ToolbarMenuMobile";
import Logo from "../public/logo.svg";
import Image from "next/image";

export default function ToolbarMenuCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas
        className="bg-primary bg-opacity-90 navbar-dark"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <Image
              alt="Portolfio"
              src={Logo}
              width="64"
              height="64"
              className="d-inline-block align-middle"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto text-uppercase">
            <ToolbarMenuMobile />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
