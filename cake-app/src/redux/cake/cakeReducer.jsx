import { BUY_CAKE } from './caketypes';

const initalState = {
    numOfCakes: 10
}

const cakeReducer = (state = initalState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

export default cakeReducer;