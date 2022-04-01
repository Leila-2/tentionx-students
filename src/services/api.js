import axios from "axios";

export default function getStudents(page, size) {
  const resp = axios
    .get(`https://test-task-j.herokuapp.com/data?page=${page}&size=${size}`)
    .then((response) => response.data)
    .then((resp) => resp.data);
  return resp;
}
