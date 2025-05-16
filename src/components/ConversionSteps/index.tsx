"use client";

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Check, ChevronRight, FileEdit, ChevronDown, ChevronUp } from 'lucide-react';
import MarkAsDoneDialog from '../MarkAsDoneDialog';

export interface ConversionStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  isActive?: boolean;
}

interface ConversionStepsProps {
  steps: ConversionStep[];
  activeStep: string;
  onMarkAsDone: (stepId: string, data?: any) => void;
  onContinue: (stepId: string) => void;
  onAddNote: (stepId: string) => void;
  isOngoing?: boolean;
  title?: string;
}

export default function ConversionSteps({
  steps,
  activeStep,
  onMarkAsDone,
  onContinue,
  onAddNote,
  isOngoing = true,
  title = "Conversion"
}: ConversionStepsProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentStepId, setCurrentStepId] = useState<string | null>(null);
  const [stepsState, setStepsState] = useState<ConversionStep[]>(steps);

  // Update stepsState when steps prop changes
  useEffect(() => {
    setStepsState(steps.map(step => ({
      ...step,
      isActive: step.id === activeStep
    })));
  }, [steps, activeStep]);

  // Helper to get the next step ID
  const getNextStepId = (currentId: string) => {
    const currentIndex = stepsState.findIndex(step => step.id === currentId);
    if (currentIndex >= 0 && currentIndex < stepsState.length - 1) {
      return stepsState[currentIndex + 1].id;
    }
    return null;
  };

  // Helper to render step status indicator (circle)
  const renderStepIcon = (step: ConversionStep) => {
    if (step.completed) {
      return (
        <div className={styles.stepIcon}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle 
              cx="8" 
              cy="8" 
              r="6" 
              fill="#16a34a"
              stroke="#16a34a" 
              strokeWidth="1.5" 
            />
            <path 
              d="M5.5 8L7 9.5L10.5 6" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    } else if (step.id === activeStep) {
      return (
        <div className={styles.stepIcon}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle 
              cx="8" 
              cy="8" 
              r="6" 
              fill="transparent"
              stroke="#0284c7" 
              strokeWidth="2" 
            />
          </svg>
        </div>
      );
    } else {
      return (
        <div className={styles.stepIcon}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle 
              cx="8" 
              cy="8" 
              r="6" 
              fill="transparent"
              stroke="#e2e8f0" 
              strokeWidth="1.5" 
              strokeDasharray="3,3" 
            />
          </svg>
        </div>
      );
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleMarkAsDoneClick = (stepId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStepId(stepId);
    setDialogOpen(true);
  };
  
  const handleDialogComplete = (data: any) => {
    if (currentStepId) {
      // Mark the current step as done
      onMarkAsDone(currentStepId, data);
      
      // Update the local state to show the step as completed
      setStepsState(prev => 
        prev.map(step => 
          step.id === currentStepId 
            ? { ...step, completed: true, isActive: false }
            : step
        )
      );
    }
    setCurrentStepId(null);
  };
  
  const handleContinueClick = (stepId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Mark the current step as completed
    onMarkAsDone(stepId);
    
    // Find the next step
    const nextStepId = getNextStepId(stepId);
    if (!nextStepId) return; // No next step available
    
    // Update local state
    setStepsState(prev => 
      prev.map(step => {
        if (step.id === stepId) {
          return { ...step, completed: true, isActive: false };
        }
        if (step.id === nextStepId) {
          return { ...step, isActive: true };
        }
        return step;
      })
    );
    
    // Immediately set the active step to ensure buttons appear
    onContinue(nextStepId);
  };

  // Helper to render buttons for a step
  const renderStepButtons = (step: ConversionStep) => {
    // Don't show buttons for completed steps
    if (step.completed) {
      return null;
    }

    // Show buttons if this is the active step (either by ID or isActive flag)
    if (step.id !== activeStep && !step.isActive) {
      return null;
    }

    return (
      <div className={styles.actionsContainer}>
        {/* Note button */}
        <button 
          className={styles.noteButton} 
          onClick={(e) => {
            e.stopPropagation();
            onAddNote(step.id);
          }}
        >
          <FileEdit size={16} />
        </button>

        {/* Mark as Done button */}
        <button 
          className={styles.markAsDoneButton} 
          onClick={(e) => handleMarkAsDoneClick(step.id, e)}
        >
          <Check size={16} />
          Mark as Done
        </button>

        {/* Continue button */}
        <button 
          className={styles.continueButton} 
          onClick={(e) => handleContinueClick(step.id, e)}
        >
          Continue
          <ChevronRight size={16} />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        {/* Title heading with dropdown toggle */}
        <div className={styles.titleContainer} onClick={toggleExpanded}>
          <div>
            <div className={styles.conversionTitle}>{title}</div>
            <div className={styles.completionStatus}>
              {stepsState.filter(s => s.completed).length}/{stepsState.length} steps completed
            </div>
          </div>
          <div className={styles.dropdownToggle}>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
        
        {isExpanded && (
          <div className={styles.stepsContainer}>
            {/* Show ongoing indicator if needed */}
            {isOngoing && (
              <div className={styles.ongoingStatus} style={{marginBottom: 8}}>
                <div className={styles.ongoingDot} />
                <span>Deal is on-going</span>
              </div>
            )}
            
            {/* Step items */}
            {stepsState.map((step, index) => (
              <div 
                key={step.id} 
                className={`${styles.stepItem} ${step.id === activeStep ? styles.currentStep : ''} ${step.completed ? styles.completedStep : ''}`}
                style={{
                  marginBottom: index < stepsState.length - 1 ? '8px' : '0'
                }}
              >
                {/* Connecting line between steps */}
                {index < stepsState.length - 1 && (
                  <div className={styles.stepConnectingLine} />
                )}
                
                <div className={styles.stepContent}>
                  {renderStepIcon(step)}
                  
                  <div className={styles.stepTextContent}>
                    <div className={styles.stepTitle}>
                      {step.title}
                    </div>
                    
                    {/* Description and actions on the same row */}
                    <div className={styles.stepRow}>
                      {step.description && <div className={styles.stepDescription}>{step.description}</div>}
                    
                      {/* Action buttons */}
                      {renderStepButtons(step)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <MarkAsDoneDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onComplete={handleDialogComplete}
        stepTitle={stepsState.find(s => s.id === currentStepId)?.title}
      />
    </>
  );
} 