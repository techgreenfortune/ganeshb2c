"use client";

import { useParams } from "next/navigation";
import { Sidebar } from "@/screens/NewLead/Sidebar";
import Header from "@/components/Header";
import styles from "../../../screens/NewLead/styles.module.css";
import DealHeader from "@/components/DealHeader";
import DealMilestones from "@/components/DealMilestones";
import DealSidebar from "@/components/DealSidebar";
import { useState } from "react";

export default function DealOverviewPage() {
  const { dealId } = useParams();
  const [currentStage] = useState("Conversion");
  
  // Handlers for conversion step actions
  const handleMarkStepAsDone = (stepId: string) => {
    console.log(`Mark step ${stepId} as done`);
    // In a real implementation, this would update the state and backend
  };
  
  const handleContinueStep = (stepId: string) => {
    console.log(`Continue step ${stepId}`);
    // In a real implementation, this would advance to the next step
  };
  
  const handleAddStepNote = (stepId: string) => {
    console.log(`Add note to step ${stepId}`);
    // In a real implementation, this would open a note dialog
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.wrapper} style={{ marginLeft: 56 }}>
        <Header 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Deals", href: "/deals" },
            { label: dealId as string }
          ]} 
        />
        {/* Main Content */}
        <div style={{ 
          display: "flex", 
          minHeight: "calc(100vh - 57px)", 
          background: "#f8fafc",
          width: "1384px",
          height: "845px"
        }}>
          <div style={{ 
            flex: "1 1 0%",
            width: "1064px",
            height: "845px"
          }}>
            <DealHeader />
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              height: "calc(100% - 65px)", // Subtract header height
              overflowY: "auto" // Make this section scrollable
            }}>
              <DealMilestones 
                currentStage={currentStage}
                progress={15}
                useDetailedConversionSteps={true}
                onMarkStepAsDone={handleMarkStepAsDone}
                onContinueStep={handleContinueStep}
                onAddStepNote={handleAddStepNote}
              />
            </div>
          </div>
          <DealSidebar />
        </div>
      </div>
    </div>
  );
}
