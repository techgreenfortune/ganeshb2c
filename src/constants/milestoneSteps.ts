import { StageConfig } from "@/types/milestones";

export const stageConfigs: Record<string, StageConfig> = {
  "New Lead": {
    title: "New Lead (C0)",
    totalSteps: 3,
    steps: [
      {
        title: "Initial Contact",
        description: "First contact with the customer",
        completed: true
      },
      {
        title: "Requirement Gathering",
        description: "Collect basic requirements",
        completed: true
      },
      {
        title: "Basic Information",
        description: "Record customer and site details",
        completed: true
      }
    ]
  },
  "Conversion": {
    title: "Conversion",
    totalSteps: 6,
    steps: [
      {
        title: "Follow up with customer to schedule a visit",
        description: "Connect with customer to confirm visiting",
        completed: false
      },
      {
        title: "Add Measurements",
        description: "Collect or update measurements to generate a quotation",
        completed: false
      },
      {
        title: "Send quotation to the customer",
        description: "Quotation once received, review it and send it to the customer",
        completed: false
      },
      {
        title: "Get approval on quotation from the customer",
        description: "Mark final quotation and proceed to payment",
        completed: false
      },
      {
        title: "Send token payment details",
        description: "Send payment details to collect the token amount",
        completed: false
      },
      {
        title: "Confirm token payment",
        description: "Share the payment details to confirm the payment from accounts team",
        completed: false
      }
    ]
  },
  "Survey": {
    title: "Survey",
    totalSteps: 4,
    steps: [
      {
        title: "Schedule site survey",
        description: "Plan and confirm site visit with the customer",
        completed: false
      },
      {
        title: "Collect site measurements",
        description: "Take detailed measurements at the site",
        completed: false
      },
      {
        title: "Document site conditions",
        description: "Record and photograph site conditions",
        completed: false
      },
      {
        title: "Submit survey report",
        description: "Complete and submit the detailed survey report",
        completed: false
      }
    ]
  },
  "Production": {
    title: "Production",
    totalSteps: 5,
    steps: [
      {
        title: "Create production order",
        description: "Generate detailed production specifications",
        completed: false
      },
      {
        title: "Material procurement",
        description: "Order and verify receipt of required materials",
        completed: false
      },
      {
        title: "Start manufacturing",
        description: "Begin the manufacturing process",
        completed: false
      },
      {
        title: "Quality inspection",
        description: "Perform quality checks on manufactured items",
        completed: false
      },
      {
        title: "Ready for delivery",
        description: "Complete production and prepare for delivery",
        completed: false
      }
    ]
  },
  "Delivery & Installation": {
    title: "Delivery & Installation",
    totalSteps: 4,
    steps: [
      {
        title: "Schedule delivery",
        description: "Coordinate delivery time with customer",
        completed: false
      },
      {
        title: "Deliver products",
        description: "Transport and deliver products to site",
        completed: false
      },
      {
        title: "Installation",
        description: "Complete product installation at site",
        completed: false
      },
      {
        title: "Final inspection",
        description: "Perform final quality check and get customer sign-off",
        completed: false
      }
    ]
  },
  "Closed": {
    title: "Closed",
    totalSteps: 2,
    steps: [
      {
        title: "Collect feedback",
        description: "Get customer feedback and ratings",
        completed: false
      },
      {
        title: "Close deal",
        description: "Complete all documentation and close the deal",
        completed: false
      }
    ]
  }
};
