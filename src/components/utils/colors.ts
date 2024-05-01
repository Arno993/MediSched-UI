export function getRandomColor() {
  const getByte = () => 128 + Math.floor(Math.random() * 128);
  return `rgb(${getByte()}, ${getByte()}, ${getByte()})`;
}

export const colorScheme = [
  "#34495e", // dark blue
  "#8e44ad", // dark purple
  "#c0392b", // dark red
  "#7f8c8d", // dark grey
  "#3d3d3d", // dark charcoal
  "#78281F", // dark maroon
  "#154360", // dark azure
];
