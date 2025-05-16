import React from "react";

interface ProjectDetail {
  label: string;
  value: string | number;
}

interface DetailsTabProps {
  estimatedOrderValue?: string;
  orderAmountPaid?: string;
  paidPercentage?: number;
  projectDetails?: {
    stage?: string;
    subStage?: string;
    area?: string;
    orderValue?: string;
    projectType?: string;
    windows?: number;
    doors?: number;
  };
}

export default function DetailsTab({
  estimatedOrderValue = "₹ 25,000.00",
  orderAmountPaid = "₹ 0",
  paidPercentage = 0,
  projectDetails = {
    stage: "Lead",
    subStage: "T&C pending",
    area: "1290 sft.",
    orderValue: "₹ 25,000.00",
    projectType: "4BHK",
    windows: 8,
    doors: 3
  }
}: DetailsTabProps) {
  return (
    <>
      {/* Payment Section */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
          Payment
        </div>
        <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Estimated order value</div>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>{estimatedOrderValue}</div>
        <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Order amount paid till date</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontWeight: 600, fontSize: 16 }}>{orderAmountPaid}</span>
          <span style={{
            background: "#f1f5f9",
            color: "#0f172a",
            borderRadius: 4,
            fontWeight: 500,
            fontSize: 12,
            padding: "2px 8px"
          }}>{paidPercentage}%</span>
        </div>
        <button
          style={{
            width: "100%",
            border: "1px solid #e2e8f0",
            borderRadius: 4,
            padding: "10px 0",
            background: "#f8fafc",
            color: "#94a3b8",
            fontWeight: 500,
            fontSize: 14,
            cursor: "not-allowed",
          }}
          disabled
        >
          ₹ Request Payment
        </button>
      </div>

      {/* Project Section */}
      <div>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
          Project
        </div>
        
        {/* Project details with exact styling */}
        <div style={{ display: "grid", gap: 16 }}>
          <div>
            <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Stage</div>
            <div style={{ fontWeight: 500 }}>{projectDetails.stage}</div>
          </div>
          
          <div>
            <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Sub-stage</div>
            <div style={{ fontWeight: 500 }}>{projectDetails.subStage}</div>
          </div>
          
          <div>
            <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Area</div>
            <div style={{ fontWeight: 500 }}>{projectDetails.area}</div>
          </div>
          
          <div>
            <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Order value</div>
            <div style={{ fontWeight: 500 }}>{projectDetails.orderValue}</div>
          </div>
          
          <div>
            <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Project type</div>
            <div style={{ fontWeight: 500 }}>{projectDetails.projectType}</div>
          </div>
          
          <div style={{ display: "flex", gap: 24 }}>
            <div>
              <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Windows</div>
              <div style={{ fontWeight: 500 }}>{projectDetails.windows}</div>
            </div>
            <div>
              <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>Doors</div>
              <div style={{ fontWeight: 500 }}>{projectDetails.doors}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 