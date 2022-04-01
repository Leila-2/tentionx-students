import ArrowBack from "../../svg/ArrowBack";
import ArrowForward from "../../svg/ArrowForward";

export default function Pagination({ page }) {
  return (
    <div>
      <p>
        Rows per page:
        <select>
          <option>10</option>
          <option>15</option>
        </select>
      </p>
      <p>page:{page}</p>
      <span>
        <ArrowBack />
      </span>
      <span>
        <ArrowForward />
      </span>
    </div>
  );
}
