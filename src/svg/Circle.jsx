export default function Circle({ color }) {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      style={{ cursor: "pointer", verticalAlign: "middle", marginRight: "6px" }}
    >
      <rect y="0.5" width="12" height="12" rx="6" fill={color} />
    </svg>
  );
}
