function createState(initialState) {
  let state = initialState;

  function getState() {
      return state;
  }

  function dispatch(action) {
      switch (action.type) {
          case 'ADD':
              state = { ...state, count: state.count + 1 };
              break;
          case 'SUBTRACT':
              state = { ...state, count: state.count - 1 };
              break;
          case 'RESET':
              state = { ...state, count: 0 };
              break;
          default:
              break;
      }
  }

  return {
      getState,
      dispatch
  };
}

const initialState = { count: 0 };

const stateManager = createState(initialState);
stateManager.dispatch({ type: 'ADD' });
stateManager.dispatch({ type: 'ADD' });

console.log(stateManager.getState()); // should print: { count: 2 }

stateManager.dispatch({ type: 'SUBTRACT' });

console.log(stateManager.getState()); // should print: { count: 1 }

stateManager.dispatch({ type: 'RESET' });

console.log(stateManager.getState()); // should print: { count: 0 }
