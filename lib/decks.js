// Per-deck access config, shared by /api/unlock and the deck pages.
// Bump a deck's token to invalidate all of its existing sessions.
export const DECKS = {
  community: { password: "community", cookie: "kita_access", token: "4" },
  microlender: { password: "signal", cookie: "kita_access_micro", token: "1" },
  underwriter: { password: "underwriter", cookie: "kita_access_underwriter", token: "1" },
};
