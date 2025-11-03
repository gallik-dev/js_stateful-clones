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
    switch (ch.type) {
      case 'addProperties':
        Object.assign(cloneState, ch.extraData);
        break;

      case 'removeProperties':
        for (const key of ch.keysToRemove) {
          delete cloneState[key];
        }
        break;

      case 'clear':
        cloneState = {};
    }

    res.push({ ...cloneState });
  }

  return res;
}

module.exports = transformStateWithClones;
