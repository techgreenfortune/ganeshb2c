"use client";

import React from "react";
import { Sidebar } from "../NewLead/Sidebar";
import { FrameSection } from "../NewLead/sections/FrameSection/FrameSection";
import styles from "../NewLead/styles.module.css";

const Home = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <FrameSection />
      <div className={styles.mainContent} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <h1 style={{ fontSize: "2rem", color: "#888" }}>Page Under Construction</h1>
      </div>
    </div>
  </div>
);

export default Home;
