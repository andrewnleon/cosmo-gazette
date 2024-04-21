import React, { useEffect, useState } from "react";
import {
  Nav,
  Navbar,
  Stack,
  Container,
  Col,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import ToolbarMainMenu from "./ToolbarMainMenu";
import MobileMenuCanvas from "./ToolbarMenuCanvas";
import Link from "next/link";
import { IoEllipsisHorizontal, IoEllipsisVertical } from "react-icons/io5";

export default function ToolBar() {
  //Mobile menu toggle
  const options = [{ scroll: false, backdrop: true }];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  //Smooth navbar background
  const [color, setColor] = useState(false);
  const [size, setSize] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
      setSize(true);
    } else {
      setColor(false);
      setSize(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <Container fluid>
      <Navbar
        data-testid="Navbar"
        id="toolbar"
        fixed="top"
        expand="lg"
        variant="dark"
        className={`${size ? "py-2" : "py-2"} ${
          color ? "bg-primary bg-opacity-95" : "bg-primary bg-opacity-0"
        }`}
        style={{ transition: "all 0.5s ease-out" }}
        role="navigation"
      >
        <Container>
          <Col
            lg={1}
            style={{
              top: "0px",
              left: "0px",
              width: "50px",
              position: "relative",
            }}
          >
            <Link href="/">
              {/* <Image
                alt="Cosmo Gazette"
                className="navbar-brand"
                src={Logo}
                quality={100}
                width={50}
                height={50}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                priority
              /> */}
            </Link>
          </Col>
          <Stack
            className="me-auto my-auto d-none d-sm-none d-md-none d-lg-block"
            direction="horizontal"
            gap={1}
          >
            <ToolbarMainMenu />
          </Stack>
          <Nav>
            <button
              onClick={toggleShow}
              className="me-3 p-0 m-0 bg-transparent nav-link border-0"
            >
              <IoEllipsisHorizontal size={32} />
            </button>
          </Nav>
          {options.map((props, id) => (
            <MobileMenuCanvas
              name="MobileMenu"
              show={show}
              onHide={handleClose}
              key={id}
              {...props}
            />
          ))}
        </Container>
      </Navbar>
    </Container>
  );
}
