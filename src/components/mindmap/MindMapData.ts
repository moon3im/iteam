export const nodes = [
  { key: "iTeam", text: "i-Team\nDigital Hub", category: "Center" },

  { key: "Security", text: "Security", parent: "iTeam" },
  { key: "Dev", text: "Development", parent: "iTeam" },
  { key: "UIUX", text: "UI / UX", parent: "iTeam" },
  { key: "Automation", text: "Automation", parent: "iTeam" },
];

export const links = nodes
  .filter(n => n.parent)
  .map(n => ({
    from: n.parent,
    to: n.key
  }));
