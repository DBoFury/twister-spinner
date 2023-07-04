export const getBackgroundColor = (color: string): string => {
  if (color === "red") return "bg-red";
  else if (color === "green") return "bg-green";
  else if (color === "blue") return "bg-blue";
  else if (color === "yellow") return "bg-yellow";
  return "bg-red";
};

export const getActiveColor = (color: string): string => {
  if (color === "red") return "bg-red-bright shadow-red-sd";
  else if (color === "green") return "bg-green-bright shadow-green-sd";
  else if (color === "blue") return "bg-blue-bright shadow-blue-sd";
  else if (color === "yellow") return "bg-yellow-bright shadow-yellow-sd";
  return "bg-red-bright";
};
