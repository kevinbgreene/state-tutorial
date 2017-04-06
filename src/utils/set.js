export default function(key, value, state) {
  const newState = {};
  for (let k in state) {
    if (k === key) {
      newState[k] = value;
    } else {
      newState[k] = state[k];
    }
  }

  return newState;
}