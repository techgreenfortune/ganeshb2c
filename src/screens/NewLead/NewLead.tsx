import React from "react";
import { Sidebar } from "./Sidebar";
import { DivSection } from "./sections/DivSection";
import { DivWrapperSection } from "./sections/DivWrapperSection";
import { FrameSection } from "./sections/FrameSection";
import { FrameWrapperSection } from "./sections/FrameWrapperSection";
import styles from "./styles.module.css";

export const NewLead = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <FrameSection />
        <div className={styles.mainContent}>
          <FrameWrapperSection />
          <DivWrapperSection />
          <DivSection />
        </div>
      </div>
    </div>
  );
};
