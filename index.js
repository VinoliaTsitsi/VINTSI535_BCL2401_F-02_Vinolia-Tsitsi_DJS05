function createState (initialState) {
    let State = initialState; 

    function getState() {
        return State; 

    }

    return {
        getState
    }; 
}

const initialState = {count : 0}; 
const currentState = createState(initialState); 
console.log (currentState.getState()); 
