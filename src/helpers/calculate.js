import { defaultExpression } from '../expressions';

/**
 *
 *
 * @export
 * @param {{A: boolean, B: boolean, C: boolean, D: number, E: number, F: number}} data - user input data
 * @param {{HM: string, HP: string, HT: string, KM: Function, KP: Function, KT: Function}[]} [customExpressions=[]] - array of custom expressions which extends default expressions
 * @returns {string} - Returns result {key | calculation result} or 'error' when no matching expressions
 */
export function getCalculation(data, customExpressions = []) {
  const mergedExpression = customExpressions.reduce((acc, item) => {
    return {...acc, ...item}
  }, {});
  const {HM, HP, HT, KM, KP, KT} = {...defaultExpression, ...mergedExpression};
  const definition = { M: HM, P: HP, T: HT };
  const formula = { M: KM, P: KP, T: KT };
  const {A, B, C, D, E, F} = data;
  const inputDefinition = [A, B, C].join('|');
  const definitionKey = getDefinitionKey(definition, inputDefinition);

  if (!definitionKey) {
    return 'error';
  }

  const result = formula[definitionKey](D, E, F);

  return `${definitionKey} | ${result}`;
};

function getDefinitionKey(definition, inputValue) {
  let value = null;
  Object.keys(definition).forEach(key => {
    if (definition[key] === inputValue) {
      value = key;
    }
  })
  return value;
};