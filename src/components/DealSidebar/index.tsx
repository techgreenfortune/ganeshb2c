import React, { useState } from "react";
import SidebarTabs from "../SidebarTabs";
import DetailsTab from "./tabs/DetailsTab";
import styles from "./styles.module.css";

interface DealSidebarProps {
  initialTab?: string;
  width?: number | string;
  height?: string;
}

export default function DealSidebar({
  initialTab = "details",
  width = 320,
  height = "calc(100vh - 57px)"
}: DealSidebarProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  
  const tabs = [
    { id: "details", label: "Details" },
    { id: "quotations", label: "Quotations" },
    { id: "notes", label: "Notes" }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case "details":
        return <DetailsTab />;
      case "quotations":
        // We'll add QuotationsTab later
        return <div>Quotations Tab Content</div>;
      case "notes":
        // We'll add NotesTab later
        return <div>Notes Tab Content</div>;
      default:
        return <DetailsTab />;
    }
  };

  return (
    <div
      className={styles.container}
      style={
        (width !== 320 || height !== "calc(100vh - 57px)") 
          ? { width, height } 
          : undefined
      }
    >
      <SidebarTabs 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className={styles.content}>
        {renderTabContent()}
      </div>
    </div>
  );
} 