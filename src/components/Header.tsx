import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import { ChevronRightIcon } from "lucide-react";

type BreadcrumbType = {
  label: string;
  href?: string;
};

interface HeaderProps {
  breadcrumbs: BreadcrumbType[];
}

const Header: React.FC<HeaderProps> = ({ breadcrumbs }) => (
  <header className="w-full border-b border-neutral-200 bg-white" style={{ minHeight: 57, display: "flex", alignItems: "center", paddingLeft: 32 }}>
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((bc, idx) => (
          <React.Fragment key={idx}>
            <BreadcrumbItem>
              {bc.href ? (
                <BreadcrumbLink href={bc.href}>{bc.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{bc.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {idx < breadcrumbs.length - 1 && (
              <BreadcrumbSeparator>
                <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  </header>
);

export default Header;
