import React from 'react';

import { getCalculation } from '../helpers/calculate';
import { customExpression1, customExpression2 } from '../expressions';

const App = () => {
  const [result, setResult] = React.useState(null);
  const [inputA, setInputA] = React.useState(true);
  const [inputB, setInputB] = React.useState(false);
  const [inputC, setInputC] = React.useState(true);
  const [inputD, setInputD] = React.useState('');
  const [inputE, setInputE] = React.useState('');
  const [inputF, setInputF] = React.useState('');

  let submit = (e) => {
    e.preventDefault();

    const inputData = {
      A: inputA,
      B: inputB,
      C: inputC,
      D: inputD,
      E: inputE,
      F: inputF,
    };
    const isInvalid = Object.values(inputData).some(val => val === '');
    const result = isInvalid ?
      'Please fill all fields' :
      getCalculation(
        inputData,
        [
          customExpression1,
          customExpression2
        ]
      );

    setResult(result);
  }

  return (
    <div data-test="component-app">
      <form>
        <p>
          <label>A:&nbsp;
            <select
              data-test="input-A"
              value={inputA}
              onChange={(e) => setInputA(e.target.value)}
              required>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
          </label>
        </p>
        <p>
          <label>B:&nbsp;
            <select
              data-test="input-B"
              value={inputB}
              onChange={(e) => setInputB(e.target.value)}
              required>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
          </label>
        </p>
        <p>
          <label>C:&nbsp;
            <select
              data-test="input-C"
              value={inputC}
              onChange={(e) => setInputC(e.target.value)}
              required>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
          </label>
        </p>
        <p>
          <label>D:&nbsp;
            <input
              placeholder="number"
              data-test="input-D"
              name="inputD"
              type="number"
              value={inputD}
              onChange={(e) => setInputD(e.target.value)}
              required />
          </label>
        </p>
        <p>
          <label>E:&nbsp;
            <input
              placeholder="number"
              data-test="input-E"
              type="number"
              name="inputE"
              value={inputE}
              onChange={(e) => setInputE(e.target.value)}
              required />
          </label>
        </p>
        <p>
          <label>F:&nbsp;
            <input
              placeholder="number"
              data-test="input-F"
              type="number"
              name="inputF"
              value={inputF}
              onChange={(e) => setInputF(e.target.value)}
              required />
          </label>
        </p>
        <button
          type="submit"
          onClick={(e) => submit(e)}
          data-test="submit-button">
            Submit
        </button>
      </form>
      <h3 data-test="result-container">{result}</h3>
    </div>
  );
}

export default App;
