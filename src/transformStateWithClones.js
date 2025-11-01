'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let cloneState = { ...state };
  const res = [];

  for (const ch of actions) {
    if (ch.type === 'addProperties') {
      cloneState = { ...cloneState, ...ch.extraData };
    }

    if (ch.type === 'removeProperties') {
      cloneState = { ...cloneState };

      for (const key of ch.keysToRemove) {
        delete cloneState[key];
      }
    }

    if (ch.type === 'clear') {
      cloneState = {};
    }

    res.push(cloneState);
  }

  return res;
}

module.exports = transformStateWithClones;
