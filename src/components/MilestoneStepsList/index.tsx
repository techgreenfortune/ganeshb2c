import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  completed: boolean;
}

interface MilestoneStepsListProps {
  title: string;
  steps: Step[];
  totalSteps: number;
  completedSteps: number;
  isActive?: boolean;
  variant?: 'completed' | 'current' | 'upcoming';
}

export default function MilestoneStepsList({ 
  title, 
  steps, 
  totalSteps,
  completedSteps,
  isActive = false,
  variant = 'upcoming'
}: MilestoneStepsListProps) {
  const [isExpanded, setIsExpanded] = useState(isActive);

  const getContainerStyles = () => {
    if (variant === 'completed') return { background: '#f0fdf4', border: '1px solid #dcfce7' };
    return { background: '#fff', border: '1px solid #e2e8f0' };
  };

  const getTitleColor = () => {
    if (variant === 'completed') return '#16a34a';
    return '#0f172a';
  };

  // Create a dashed border circle
  const createDashedCircle = (completed: boolean, isCurrent: boolean) => {
    let strokeColor = '#e2e8f0'; // Default gray for upcoming
    let strokeDasharray = '3,3'; // Dashed style
    let fill = 'transparent';
    let stroke = '1.5';
    
    if (completed) {
      strokeColor = '#16a34a'; // Green for completed
      fill = '#16a34a';
      strokeDasharray = '0'; // Solid circle when completed
    } else if (isCurrent) {
      strokeColor = '#0284c7'; // Blue for current
      stroke = '2';
    }
    
    return (
      <svg width="16" height="16" viewBox="0 0 16 16">
        <circle 
          cx="8" 
          cy="8" 
          r="6" 
          fill={fill}
          stroke={strokeColor} 
          strokeWidth={stroke} 
          strokeDasharray={strokeDasharray} 
        />
        {completed && (
          <path 
            d="M5.5 8L7 9.5L10.5 6" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        )}
      </svg>
    );
  };

  return (
    <div 
      style={{ 
        ...getContainerStyles(),
        borderRadius: 4, 
        padding: 16, 
        marginBottom: 8,
        cursor: 'pointer' 
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ color: getTitleColor(), fontWeight: 600 }}>{title}</div>
          <div style={{ color: "#64748b", fontSize: 14 }}>{completedSteps}/{totalSteps} steps completed</div>
        </div>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {isExpanded && (
        <div style={{ marginTop: 12 }}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                paddingLeft: 8
              }}
            >
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: 18,
                  left: 8,
                  width: 1,
                  height: 'calc(100% - 10px)',
                  backgroundColor: '#e2e8f0',
                  zIndex: 1
                }} />
              )}
              
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: '8px 0',
                  gap: 8,
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div style={{ marginTop: 2 }}>
                  {createDashedCircle(
                    step.completed, 
                    variant === 'current' && index === 0
                  )}
                </div>
                <div>
                  <div style={{ 
                    fontWeight: 500,
                    color: step.completed ? '#16a34a' : 
                          (variant === 'current' && index === 0) ? '#0284c7' : '#0f172a'
                  }}>
                    {step.title}
                    {variant === 'current' && index === 0 && (
                      <span style={{
                        marginLeft: 8,
                        fontSize: 12,
                        color: '#0284c7',
                        background: '#f0f9ff',
                        padding: '2px 8px',
                        borderRadius: 4,
                        fontWeight: 500
                      }}>
                        Current
                      </span>
                    )}
                  </div>
                  <div style={{ color: "#64748b", fontSize: 14 }}>{step.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
