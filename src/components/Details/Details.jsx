import Circle from "../../svg/Circle";

import { v4 } from "uuid";

export default function Details({ tests, name, id }) {
  return (
    <div>
      <div>
        <p>Student name: {name}</p>
        <p>ID: {id}</p>

        <select>
          <option value="concepts">All concepts</option>
        </select>
        <select>
          <option value="score">All score</option>
        </select>
        <select>
          <option value="score">All speed</option>
        </select>
        <input type="text" placeholder="Select Period" />
      </div>

      <div>
        <ul>
          <li>Score</li>
          <li>
            <Circle color="#4285F4" /> 90%+ accuracy
          </li>
          <li>
            <Circle color="#0F9D58" /> 80 - 89% accuracy
          </li>
          <li>
            <Circle color="#E2B534" /> 50 - 79% accuracy
          </li>
        </ul>
        <ul>
          <li>Speed</li>
          <li>
            <Circle color="#4285F4" /> above expected
          </li>
          <li>
            <Circle color="#0F9D58" /> as expected
          </li>
          <li>
            <Circle color="#E2B534" /> below expected
          </li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Test Label</th>
            <th>Score</th>
            <th>Speed</th>
            <th>Total Q-ns</th>
            <th>Exp. Speed</th>
            <th>Concept</th>
            <th>Date</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr key={v4()}>
              <td>{test.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
