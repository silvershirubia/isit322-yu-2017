/**
 * Created by bcuser on 6/6/17.
 */

const gistState = {

    numbers: {
        nine: 0,
        eight: 0,
        seven: 0,
        six: 0,
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0
    },
    getFoo:{
        foo: 'foo',
        file: 'api.js'
    }
};

const gistReducer = (state = gistState, action) => {
    switch (action.type) {
        case 'NUMBER_NINE':
            return Object.assign({}, state, {
                numbers: {
                    nine: 9,
                    eight: state.numbers.eight
                }
            });
        case 'NUMBER_EIGHT':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: 8
                }
            });
        case 'NUMBER_SEVEN':
            return Object.assign({}, state, {
                numbers: {
                    seven: 7
                }
            });
        case 'NUMBER_SIX':
            return Object.assign({}, state, {
                numbers: {
                    six: 6
                }
            });
        case 'NUMBER_FIVE':
            return Object.assign({}, state, {
                numbers: {
                    five: 5
                }
            });
        case 'NUMBER_FOUR':
            return Object.assign({}, state, {
                numbers: {
                    four: 4
                }
            });
        case 'NUMBER_THREE':
            return Object.assign({}, state, {
                numbers: {
                    two: state.numbers.nine,
                    three: 3
                }
            });
        case 'NUMBER_TWO':
            return Object.assign({}, state, {
                numbers: {
                    two: 2
                }
            });
        case 'NUMBER_ONE':
            return Object.assign({}, state, {
                numbers: {
                    one: 1
                }
            });

        case 'GETFOO':
            return Object.assign({}, state, {
                getFoo: action.getFoo
            });


        default:
            return state;
    }


};

export default gistReducer;