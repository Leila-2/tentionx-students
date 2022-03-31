import { ExportBtn } from "../ExportBtn";
import { Title, Section, SearchForm, SearchInp, Btn } from "./SerchBar.styled";
import SearchIcon from "../../svg/SearchIcon";
import { useState } from "react";

export default function SearchBar({ data }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <Section>
      <Title>STUDENTS</Title>

      <SearchForm>
        <SearchInp
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter Student Name, Parent or ID here"
          onChange={handleChange}
          value={searchInput}
        />
        <Btn type="submit">
          <SearchIcon />
        </Btn>
      </SearchForm>

      <ExportBtn csvData={data} fileName="students" />
    </Section>
  );
}
