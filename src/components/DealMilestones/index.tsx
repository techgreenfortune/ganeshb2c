import React from "react";
import MilestoneProgressBar from "../MilestoneProgressBar";
import MilestoneStepsList from "../MilestoneStepsList";
import ConversionSteps, { ConversionStep } from "../ConversionSteps";
import { stageConfigs } from "@/constants/milestoneSteps";
import styles from "./styles.module.css";

interface DealMilestonesProps {
  currentStage?: string;
  progress?: number;
  useDetailedConversionSteps?: boolean;
  onMarkStepAsDone?: (stepId: string) => void;
  onContinueStep?: (stepId: string) => void;
  onAddStepNote?: (stepId: string) => void;
}

export default function DealMilestones({
  currentStage = "Conversion",
  progress = 15,
  useDetailedConversionSteps = false,
  onMarkStepAsDone = (stepId: string) => console.log(`Mark step ${stepId} as done`),
  onContinueStep = (stepId: string) => console.log(`Continue step ${stepId}`),
  onAddStepNote = (stepId: string) => console.log(`Add note to step ${stepId}`)
}: DealMilestonesProps) {
  // Helper function to convert MilestoneSteps to ConversionSteps format
  const getConversionSteps = (stageName: string): ConversionStep[] => {
    const config = stageConfigs[stageName];
    if (!config) return [];
    
    return config.steps.map((step, index) => ({
      id: `${stageName.toLowerCase()}-step-${index}`,
      title: step.title,
      description: step.description,
      completed: step.completed,
      isActive: index === 0 && !step.completed // First incomplete step is active
    }));
  };

  // Get current stage conversion steps if available
  const conversionSteps = currentStage ? getConversionSteps(currentStage) : [];
  const activeStepId = conversionSteps.find(step => !step.completed)?.id || '';
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Milestones</div>
          <MilestoneProgressBar currentStage={currentStage} progress={progress} />
        </div>
        <span className={styles.progressText}>
          <span>{progress}% progressed</span>
          <span> ⓘ</span>
        </span>
      </div>
      
      <div className={styles.stepsContainer}>
        {Object.entries(stageConfigs).map(([stage, config]) => {
          // If this is the current stage and we want to use detailed conversion steps
          if (stage === currentStage && useDetailedConversionSteps) {
            return (
              <ConversionSteps 
                key={stage}
                steps={conversionSteps}
                activeStep={activeStepId}
                onMarkAsDone={onMarkStepAsDone}
                onContinue={onContinueStep}
                onAddNote={onAddStepNote}
                isOngoing={true}
                title={stage}
              />
            );
          }
          
          // Otherwise use the regular MilestoneStepsList
          return (
            <MilestoneStepsList
              key={stage}
              title={config.title}
              steps={config.steps}
              totalSteps={config.totalSteps}
              completedSteps={stage === "New Lead" ? config.totalSteps : 0}
              isActive={stage === currentStage}
              variant={stage === "New Lead" ? "completed" : stage === currentStage ? "current" : "upcoming"}
            />
          );
        })}
      </div>
    </div>
  );
} 