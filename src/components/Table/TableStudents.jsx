import { v4 } from "uuid";
import { useState } from "react";
import SortBtn from "../../svg/SortBtn";
import Arrows from "../../svg/Arrows";
import { Table, Score } from "./Table.styled";

export default function TableStudents({ students }) {
  const [sort, setSort] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    setSort(!sort);
  };

  function chengeCheckbox() {
    setChecked(!checked);
  }
  const sorter = () => {
    if (sort) {
      let newArr = [...students];
      const sortedArr = newArr.sort((a, b) => (a.name > b.name ? 1 : -1));
      return sortedArr;
    }
    return students;
  };

  const stdnts = sorter();

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" name="checkall" onClick={chengeCheckbox} />
          </th>
          <th>
            <span>Name</span>
            <button onClick={handleClick}>
              <SortBtn />
            </button>
          </th>
          <th>
            <span>ID</span>
            <Arrows />
          </th>
          <th>Class</th>
          <th>
            <span> Av.Score, %</span>
            <Arrows />
          </th>
          <th>
            <span>Av.Speed</span>
            <Arrows />
          </th>
          <th>Parents</th>
        </tr>
      </thead>
      <tbody>
        {stdnts.map((student) => (
          <tr key={v4()}>
            <td>
              <input type="checkbox" name="check" onClick={chengeCheckbox} />
            </td>
            <td>{student.name}</td>
            <td>{student.id}</td>
            <td>{student.class}</td>
            <Score scoreType={student.score}>{student.score}</Score>
            <td>{student.speed}</td>
            <td>{student.parents}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
