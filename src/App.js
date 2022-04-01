import { useState, useEffect } from "react";

import getStudents from "./services/api";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import TableStudents from "./components/Table/TableStudents";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const forward = () => {
    if (students < size) {
      return;
      //disabled
      //setAttribute
    }
    setPage(page + 1);
  };
  const backward = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const test = getStudents(page, size);
  console.log(test);

  useEffect(() => {
    (async () => {
      await setStudents(getStudents(page, size));
    })();
  }, [page, size]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <SubHeader />
      <SearchBar data={students} />
      <TableStudents students={students} />
      <Pagination />
      <button onClick={forward}>вперед</button>
      <span>{page}</span>
      <button onClick={backward}> назад</button>

      <select>
        <option>10</option>
        <option>15</option>
      </select>
    </div>
  );
}

export default App;
