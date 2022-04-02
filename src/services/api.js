import axios from "axios";

export function getStudents(page, size) {
  const resp = axios
    .get(`https://test-task-j.herokuapp.com/data?page=${page}&size=${size}`)
    .then((response) => response.data)
    .then((resp) => resp.data);
  return resp;
}

export function getTests(page, size) {
  const resp = axios
    .get(`https://test-task-j.herokuapp.com/data?page=${page}&size=${size}`)
    .then((response) => response.data)
    .then((resp) => resp.data)
    .then((res) => res.tests);
  return resp;
}
