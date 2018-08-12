import * as actionTypes from './actions';

const initialState = {
    gifts: [1, 2, 3]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_GIFT: {
            console.log('in add_gift_reducer');
            const gift = state.gifts;

            return {
                ...state,
                gifts: [...gift, 1]
            };
        }
        case actionTypes.REMOVE_GIFT: {
            console.log('in remove_gift_reducer');
            const gift = state.gifts;
            gift.pop();
            return {
                ...state,
                gifts: [...gift]

            };
        }
        default:
            return state;
    }
}

export default reducer;