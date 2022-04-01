import { v4 } from "uuid";
import { useState } from "react";
import SortBtn from "../../svg/SortBtn";
import Arrows from "../../svg/Arrows";
import { Table, Score, Speed, Checkbox } from "./Table.styled";

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
            <Checkbox
              type="checkbox"
              name="check"
              checked={checked}
              onChange={chengeCheckbox}
            />
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
              <Checkbox
                type="checkbox"
                name="check"
                onChange={chengeCheckbox}
              />
            </td>
            <td>{student.name}</td>
            <td>{student.id}</td>
            <td>{student.class}</td>
            <td>
              <Score scoreType={student.score}>{student.score}</Score>
            </td>
            <td>
              <Speed speedType={student.speed}>{student.speed}</Speed>
            </td>
            <td>{student.parents.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
