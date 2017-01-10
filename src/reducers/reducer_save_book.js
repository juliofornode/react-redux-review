export default function (state = [], action) {

    switch(action.type) {
        case('SAVE_BOOK'):
            return [action.data, ...state];
    }

    return state;

}