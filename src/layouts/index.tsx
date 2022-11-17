import { ReactNode } from "react";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import style from "./Layout.module.css";

export default function index({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className?: string;
  type?: string;
}) {
  return (
    <div className="overflow-hidden" style={{ height: "100%", minHeight: "100vh" }}>
      <Navbar />
      {type === "no-container" ? (
        <div className={`${style["content-height"]} ${className}`}>
          {children}
        </div>
      ) : (
        <Container className={`${style["content-height"]} ${className}`}>
          {children}
        </Container>
      )}
      <Footer />
    </div>
  );
}
