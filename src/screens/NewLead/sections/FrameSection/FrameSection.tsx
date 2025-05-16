import { BellIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import styles from "./styles.module.css";

export const FrameSection = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className={styles.breadcrumbHome}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRightIcon className={styles.smallIcon} />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className={styles.breadcrumbDeals}
            >
              Deals
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchIconWrapper}>
            <SearchIcon className={styles.icon} />
          </div>
          <Input
            className={styles.searchInput}
            placeholder="Search for any deal"
          />
        </div>

        <Button variant="outline" size="icon" className={styles.notificationButton}>
          <BellIcon className={styles.icon} />
        </Button>
      </div>
    </header>
  );
};
