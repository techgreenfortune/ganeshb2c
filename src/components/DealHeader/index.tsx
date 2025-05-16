import React from "react";
import DealCustomerHeader from "../DealCustomerHeader";
import styles from "./styles.module.css";

interface DealHeaderProps {
  onEdit?: () => void;
  onChat?: () => void;
  onAdvance?: () => void;
  onMenu?: () => void;
  width?: number | string;
}

export default function DealHeader({
  onEdit = () => console.log("Edit customer details"),
  onChat = () => console.log("Chat with customer"),
  onAdvance = () => console.log("Advance deal"),
  onMenu = () => console.log("Open menu"),
  width = "1064px"
}: DealHeaderProps) {
  return (
    <div 
      className={styles.container}
      style={width !== "1064px" ? { width } : undefined}
    >
      <DealCustomerHeader 
        onEdit={onEdit}
        onChat={onChat}
        onAdvance={onAdvance}
        onMenu={onMenu}
      />
    </div>
  );
} 