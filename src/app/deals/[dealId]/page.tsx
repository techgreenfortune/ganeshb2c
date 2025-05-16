"use client";

import { useParams } from "next/navigation";
import { Sidebar } from "@/screens/NewLead/Sidebar";
import Header from "@/components/Header";
import styles from "./styles.module.css";
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
      <div className={styles.wrapper}>
        <Header 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Deals", href: "/deals" },
            { label: dealId as string }
          ]} 
        />
        <div className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <DealHeader />
            <div className={styles.milestonesWrapper}>
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
