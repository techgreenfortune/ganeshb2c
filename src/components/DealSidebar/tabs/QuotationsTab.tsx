import React from "react";

interface Quotation {
  id: string;
  date: string;
  amount: string;
  status: "Pending" | "Approved" | "Rejected";
}

interface QuotationsTabProps {
  quotations?: Quotation[];
  onCreateNew?: () => void;
}

export default function QuotationsTab({
  quotations = [
    {
      id: "QT-2023-001",
      date: "Aug 12, 2023",
      amount: "₹ 25,000.00",
      status: "Pending"
    },
    {
      id: "QT-2023-002",
      date: "Aug 10, 2023",
      amount: "₹ 23,500.00",
      status: "Rejected"
    }
  ],
  onCreateNew = () => console.log("Create new quotation")
}: QuotationsTabProps) {
  return (
    <div>
      <div style={{ 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
      }}>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Quotations</div>
        <button 
          style={{
            padding: "6px 12px",
            background: "#0284c7",
            border: "none",
            borderRadius: 4,
            color: "#fff",
            fontSize: 14,
            cursor: "pointer"
          }}
          onClick={onCreateNew}
        >
          Create New
        </button>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {quotations.map((quotation, index) => (
          <div key={index} style={{
            border: "1px solid #e2e8f0",
            borderRadius: 4,
            padding: 16
          }}>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              marginBottom: 8 
            }}>
              <div style={{ fontWeight: 500 }}>{quotation.id}</div>
              <div style={{ 
                fontSize: 12, 
                padding: "2px 8px", 
                borderRadius: 4, 
                background: quotation.status === "Pending" ? "#f1f5f9" : 
                           quotation.status === "Approved" ? "#f0fdf4" : "#fee2e2",
                color: quotation.status === "Pending" ? "#64748b" : 
                       quotation.status === "Approved" ? "#16a34a" : "#ef4444"
              }}>
                {quotation.status}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ color: "#64748b", fontSize: 14 }}>{quotation.date}</div>
              <div style={{ fontWeight: 500 }}>{quotation.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 