// Exact ports of the Microlender deck (Paper file "kita-sales-deck", page "Microlender"),
// in left-to-right canvas order.
import M01Title from "./M01Title";
import M02BackedBy from "./M02BackedBy";
import M03Problem from "./M03Problem";
import M04DataStack from "./M04DataStack";
import M05Insight from "./M05Insight";
import M06Methodology from "./M06Methodology";
import M07Backtest from "./M07Backtest";
import M08Results from "./M08Results";
import M09WhyDocuments from "./M09WhyDocuments";
import M10NextSteps from "./M10NextSteps";
import M11Close from "./M11Close";

export const MICROLENDER_SLIDES = [
  { id: "title", Component: M01Title, fullBleed: true },
  { id: "backed-by", Component: M02BackedBy },
  { id: "problem", Component: M03Problem },
  { id: "data-stack", Component: M04DataStack },
  { id: "insight", Component: M05Insight },
  { id: "methodology", Component: M06Methodology },
  { id: "backtest", Component: M07Backtest },
  { id: "results", Component: M08Results },
  { id: "why-documents", Component: M09WhyDocuments },
  { id: "next-steps", Component: M10NextSteps },
  { id: "close", Component: M11Close, fullBleed: true },
];
