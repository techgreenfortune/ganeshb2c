import React from "react";

const DealCustomerHeader = ({
  customer = {
    name: "Shekhar K. Kumar",
    company: "Sumdha Homes",
    address: "1-8-196/23, road no. 32, gandhi nagar, juparpalli, hyderabad, 501789",
    email: "shekhark@gmail.com",
    phone: "9948932190",
  },
  onChat,
  onAdvance,
  onMenu,
  onEdit,
}: {
  customer?: {
    name: string;
    company: string;
    address: string;
    email: string;
    phone: string;
  };
  onChat?: () => void;
  onAdvance?: () => void;
  onMenu?: () => void;
  onEdit?: () => void;
}) => (
  <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: 4 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontWeight: 600, fontSize: 20 }}>{customer.name}</div>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          style={{ 
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #E2E8F0", 
            borderRadius: 4, 
            background: "#fff",
            color: "#64748b",
            fontSize: 16
          }}
          onClick={onEdit}
        >
          ✏️
        </button>
        <button
          style={{ 
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 36,
            border: "1px solid #e2e8f0", 
            borderRadius: 6, 
            padding: "0 12px", 
            background: "#fff",
            fontSize: 14,
            color: "#64748b",
            fontWeight: 500
          }}
          onClick={onChat}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          Chat with Customer
        </button>
        <button
          style={{ 
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 36,
            background: "#0284c7", 
            color: "#fff", 
            borderRadius: 6, 
            padding: "0 12px", 
            border: "none",
            fontSize: 14,
            fontWeight: 500
          }}
          onClick={onAdvance}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          Advance Deal
        </button>
        <button
          style={{ 
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none", 
            background: "transparent", 
            fontSize: 20, 
            cursor: "pointer",
            color: "#64748b"
          }}
          onClick={onMenu}
        >
          ⋮
        </button>
      </div>
    </div>
    <div style={{ color: "#64748b", fontSize: 14 }}>{customer.company}</div>
    <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#64748b", fontSize: 14, marginTop: 4 }}>
      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span>{customer.address}</span>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 2, color: "#0284c7", textDecoration: "none" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Get directions
        </a>
      </span>
      <a href={`mailto:${customer.email}`} style={{ display: "flex", alignItems: "center", gap: 2, color: "#0284c7", textDecoration: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        {customer.email}
      </a>
      <a href={`tel:${customer.phone}`} style={{ display: "flex", alignItems: "center", gap: 2, color: "#0284c7", textDecoration: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        {customer.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
      </a>
    </div>
  </div>
);

export default DealCustomerHeader;
