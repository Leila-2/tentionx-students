export default function Btn({ color }) {
  return (
    <svg
      width="10"
      height="5"
      fill="none"
      viewBox="0 0 10 5"
      style={{ cursor: "pointer", verticalAlign: "middle" }}
    >
      <path
        d="M0.333374 0.333374L4.50004 4.50004L8.66671 0.333374H0.333374Z"
        fill={color}
      />
    </svg>
  );
}
