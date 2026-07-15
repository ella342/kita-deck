// The underwriter deck: the community deck's narrative, rewritten for banks in
// any market. Same slide order and file numbering as components/deck/exact, so a
// file-to-file diff against its community counterpart shows only the copy deltas.
import U01Title from "./U01Title";
import U02About from "./U02About";
import U03BackedBy from "./U03BackedBy";
import U04Problem from "./U04Problem";
import U05Stack from "./U05Stack";
import U13Intake from "./U13Intake";
import U06CreditOfficer from "./U06CreditOfficer";
import U08ReadAnything from "./U08ReadAnything";
import U07Underwriter from "./U07Underwriter";
import U09Dashboard from "./U09Dashboard";
import U10Integration from "./U10Integration";
import U11Outcomes from "./U11Outcomes";
import U12CTA from "./U12CTA";

export const UNDERWRITER_SLIDES = [
  { id: "title", Component: U01Title, fullBleed: true },
  { id: "about", Component: U02About, fullBleed: true },
  { id: "backed-by", Component: U03BackedBy },
  { id: "problem", Component: U04Problem },
  { id: "stack", Component: U05Stack },
  { id: "intake", Component: U13Intake },
  { id: "credit-officer", Component: U06CreditOfficer },
  { id: "read-anything", Component: U08ReadAnything },
  { id: "underwriter", Component: U07Underwriter },
  { id: "dashboard", Component: U09Dashboard },
  { id: "integration", Component: U10Integration },
  { id: "outcomes", Component: U11Outcomes },
  { id: "cta", Component: U12CTA, fullBleed: true },
];
