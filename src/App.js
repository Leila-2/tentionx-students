import { useState, useEffect } from "react";
import axios from "axios";

import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import TableStudents from "./components/Table/TableStudents";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const forward = () => {
    if (!data) {
      //disabled
      //setAttribute
    }
    setPage((prev) => {
      setPage(prev + 1);
    });
  };
  const backward = () => {
    setPage((prev) => {
      setPage(prev - 1);
    });
  };

  useEffect(() => {
    axios
      .get(
        `https://test-task-j.herokuapp.com/data?page=${page}&size=${size}&sortBy=score&sortDir=-1`
      )
      .then((response) => response.data)
      .then((resp) => setData(resp.data));
  }, [page, size]);

  console.log(data);
  return (
    <div>
      <GlobalStyles />
      <Header />
      <SubHeader />
      <SearchBar data={data} />
      <TableStudents students={data} />
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
