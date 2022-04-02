import ArrowBack from "../../svg/ArrowBack";
import ArrowForward from "../../svg/ArrowForward";

export default function Pagination({ page }) {
  return (
    <div>
      <span>Rows per page:</span>
      <select>
        <option>10</option>
        <option>15</option>
      </select>

      <span>page:{page}</span>
      <button>
        <ArrowBack />
      </button>
      <button>
        <ArrowForward />
      </button>
    </div>
  );
}
