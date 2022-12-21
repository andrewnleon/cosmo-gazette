import React, { Suspense, useRef, useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { zoomInDown } from "react-animations";
import { Parallax } from "react-scroll-parallax";
import { SiReact, SiCsharp } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import Earth from "./Earth";

const ZoomAnimation = keyframes`${zoomInDown}`;
const ZoomIn = styled.div`
  animation: 1.2s ${ZoomAnimation};
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: block;
`;

interface StackIcons {
  id: number;
  icon: JSX.Element;
  tooltip: string;
}
export default function Cover() {
  const [showIcons, setShowIcons] = useState(true);
  const targetIcons = useRef(null);
  const stackIcons: StackIcons[] = [
    { id: 1, icon: <SiCsharp className="fs-2" />, tooltip: "C# .Net" },
    { id: 2, icon: <SiReact className="fs-2" />, tooltip: "ReactJs" },
    {
      id: 3,
      icon: <AiOutlineConsoleSql className="fs-2" />,
      tooltip: "SQL Server",
    },
    { id: 4, icon: <BsWordpress className="fs-2" />, tooltip: "Wordpress" },
  ];
  return (
    <Container
      fluid
      id="cover-container"
      className="p-0 d-flex flex-column"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_KIT_URI}/tr:w-1920,h-1080,fo-center,ar-16-9/drewcity.jpg)`,
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <CanvasContainer className="m-auto">
        <Earth />
      </CanvasContainer>
    </Container>
  );
}
