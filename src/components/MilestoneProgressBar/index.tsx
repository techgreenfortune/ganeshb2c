import React from "react";
import styles from "./styles.module.css";

interface MilestoneProgressBarProps {
  currentStage?: string;
  progress?: number;
  lost?: boolean;
}

const stages = [
  "New Lead",
  "Conversion",
  "Survey",
  "Production",
  "Delivery & Installation",
  "Closed",
];

function getStageImage(stage: string, idx: number, currentStage: string, progress: number, lost: boolean) {
  const currentIdx = stages.indexOf(currentStage);
  if (lost && stage === "Lost") {
    return "/milestone-lost.png";
  }
  if (stage === "Closed" && progress === 100) {
    return "/milestone-completed.png";
  }
  if (idx < currentIdx) {
    return "/milestone-completed-bg.png";
  }
  if (idx === currentIdx) {
    return "/milestone-ongoing.png";
  }
  return "/milestone-upcoming.png";
}

function getStageTextClassName(idx: number, currentStage: string) {
  const currentIdx = stages.indexOf(currentStage);
  if (idx < currentIdx) return styles.stageTextCompleted;
  if (idx === currentIdx) return styles.stageTextCurrent;
  return styles.stageTextUpcoming;
}

const MilestoneProgressBar: React.FC<MilestoneProgressBarProps> = ({
  currentStage = "Conversion",
  progress = 15,
  lost = false,
}) => (
  <div className={styles.container}>
    {stages.map((stage, idx) => (
      <div
        key={stage}
        className={styles.stageContainer}
      >
        <img
          src={getStageImage(stage, idx, currentStage, progress, lost)}
          alt={stage}
          className={styles.stageImage}
        />
        <span
          className={`${styles.stageText} ${getStageTextClassName(idx, currentStage)}`}
        >
          {stage}
        </span>
        {idx < stages.length - 1 && <span className={styles.spacer} />}
      </div>
    ))}
  </div>
);

export default MilestoneProgressBar;
