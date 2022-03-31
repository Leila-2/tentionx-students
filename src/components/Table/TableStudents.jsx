import { v4 } from "uuid";
import { useState } from "react";
import SortBtn from "../../svg/SortBtn";
import Arrows from "../../svg/Arrows";
import { Table } from "./Table.styled";

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
            <p>Name</p>
            <button onClick={handleClick}>
              <SortBtn />
            </button>
          </th>
          <th>
            <p>ID</p>
            <Arrows />
          </th>
          <th>Class</th>
          <th>
            <p> Av.Score, %</p>
            <Arrows />
          </th>
          <th>
            <p>Av.Speed</p>
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
            <td></td>
            <td>{student.id}</td>
            <td>{student.class}</td>
            <td>{student.score}</td>
            <td>{student.speed}</td>
            <td>{student.parents}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
