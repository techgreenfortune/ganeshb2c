import { ChevronDownIcon, FilterIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { NewDealDialog } from "@/components/NewDealDialog/index";
import styles from "./styles.module.css";

export const FrameWrapperSection = (): JSX.Element => {
  // Data for the deals count
  const dealsData = {
    total: 1290,
    label: "All Deals",
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={styles.dropdownButton}
            >
              Showing: {dealsData.label} ({dealsData.total})
              <ChevronDownIcon className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* Dropdown content would go here */}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="outline"
          className={styles.filterButton}
        >
          <FilterIcon className={styles.icon} />
          Filter
        </Button>
      </div>

      <NewDealDialog />
    </div>
  );
};