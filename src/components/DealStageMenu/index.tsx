import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { 
  ArrowRight,
  Clock,
  File,
  History,
  MoreHorizontal,
  Package,
  PackageCheck,
  Send,
  Trash2,
  MessageSquare
} from "lucide-react";
import { Button } from "../ui/button";

type StageNames = 
  | "New Lead"
  | "Conversion"
  | "Production"
  | "Delivery & Installation"
  | "Lost"
  | "Referred"
  | "Completed";

interface DealStageMenuProps {
  currentStage: {
    name: StageNames;
    icon: string;
  };
  onActionSelect: (action: string) => void;
}

const stageActions: Record<StageNames, Array<{ id: string; label: string; icon: React.ReactNode }>> = {
  "New Lead": [
    { id: "advance", label: "Advance the deal", icon: <ArrowRight className="h-4 w-4" /> },
    { id: "mark_future", label: "Mark as in-future", icon: <Clock className="h-4 w-4" /> },
    { id: "move_foregone", label: "Move to Foregone", icon: <Trash2 className="h-4 w-4" /> },
  ],
  "Conversion": [
    { id: "advance", label: "Advance the deal", icon: <ArrowRight className="h-4 w-4" /> },
    { id: "payment_history", label: "Show payment history", icon: <History className="h-4 w-4" /> },
    { id: "view_quotation", label: "View latest quotation", icon: <File className="h-4 w-4" /> },
    { id: "mark_future", label: "Mark as in-future", icon: <Clock className="h-4 w-4" /> },
    { id: "move_foregone", label: "Move to Foregone", icon: <Trash2 className="h-4 w-4" /> },
  ],
  "Production": [
    { id: "advance", label: "Advance the deal", icon: <ArrowRight className="h-4 w-4" /> },
    { id: "payment_history", label: "Show payment history", icon: <History className="h-4 w-4" /> },
    { id: "view_quotation", label: "View latest quotation", icon: <File className="h-4 w-4" /> },
    { id: "mark_future", label: "Mark as in-future", icon: <Clock className="h-4 w-4" /> },
    { id: "move_foregone", label: "Move to Foregone", icon: <Trash2 className="h-4 w-4" /> },
  ],
  "Delivery & Installation": [
    { id: "advance", label: "Advance the deal", icon: <ArrowRight className="h-4 w-4" /> },
    { id: "payment_history", label: "Show payment history", icon: <History className="h-4 w-4" /> },
    { id: "view_quotation", label: "View latest quotation", icon: <File className="h-4 w-4" /> },
    { id: "proof_delivery", label: "Show proof of delivery", icon: <PackageCheck className="h-4 w-4" /> },
    { id: "delivery_challan", label: "Show delivery challan", icon: <Package className="h-4 w-4" /> },
    { id: "mark_future", label: "Mark as in-future", icon: <Clock className="h-4 w-4" /> },
    { id: "move_foregone", label: "Move to Foregone", icon: <Trash2 className="h-4 w-4" /> },
  ],
  "Lost": [
    { id: "write_customer", label: "Write to customer", icon: <Send className="h-4 w-4" /> },
    { id: "show_notes", label: "Show Notes", icon: <MessageSquare className="h-4 w-4" /> },
  ],
  "Referred": [
    { id: "write_customer", label: "Write to customer", icon: <Send className="h-4 w-4" /> },
    { id: "show_notes", label: "Show Notes", icon: <MessageSquare className="h-4 w-4" /> },
  ],
  "Completed": [
    { id: "payment_history", label: "Show payment history", icon: <History className="h-4 w-4" /> },
    { id: "view_quotation", label: "View latest quotation", icon: <File className="h-4 w-4" /> },
    { id: "proof_delivery", label: "Show proof of delivery", icon: <PackageCheck className="h-4 w-4" /> },
    { id: "delivery_challan", label: "Show delivery challan", icon: <Package className="h-4 w-4" /> },
  ],
};

export function DealStageMenu({ currentStage, onActionSelect }: DealStageMenuProps) {
  const actions = stageActions[currentStage.name] || [];
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {actions.map((action, index) => (
          <React.Fragment key={action.id}>
            <DropdownMenuItem onClick={() => onActionSelect(action.id)} className="flex items-center gap-2">
              {action.icon}
              {action.label}
            </DropdownMenuItem>
            {index < actions.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
