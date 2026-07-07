// Exact ports of the General Community Lending Deck (Paper), in left-to-right order.
import S01Title from "./exact/S01Title";
import S02About from "./exact/S02About";
import S03BackedBy from "./exact/S03BackedBy";
import S04Problem from "./exact/S04Problem";
import S05Stack from "./exact/S05Stack";
import S06CreditOfficer from "./exact/S06CreditOfficer";
import S08ReadAnything from "./exact/S08ReadAnything";
import S07Underwriter from "./exact/S07Underwriter";
import S09Dashboard from "./exact/S09Dashboard";
import S10Integration from "./exact/S10Integration";
import S11Outcomes from "./exact/S11Outcomes";
import S12CTA from "./exact/S12CTA";

export const SLIDES = [
  { id: "title", Component: S01Title, fullBleed: true },
  { id: "about", Component: S02About, fullBleed: true },
  { id: "backed-by", Component: S03BackedBy },
  { id: "problem", Component: S04Problem },
  { id: "stack", Component: S05Stack },
  { id: "credit-officer", Component: S06CreditOfficer },
  { id: "read-anything", Component: S08ReadAnything },
  { id: "underwriter", Component: S07Underwriter },
  { id: "dashboard", Component: S09Dashboard },
  { id: "integration", Component: S10Integration },
  { id: "outcomes", Component: S11Outcomes },
  { id: "cta", Component: S12CTA, fullBleed: true },
];
