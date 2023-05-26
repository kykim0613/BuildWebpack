const SET_DIFT= 'counter/SET_DIFT'
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const setDift = dift => ({type: SET_DIFT, dift})
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})

const initialState = {
    number: 0,
    dift: 1
}

export const counter = () => {
    switch(action.type){
        case SET_DIFT:
            return {
                ...State,
                dift: action.dift
            }
        case INCREASE:
            return {
                ...State,
                number: state.number + state.dift
            }
        case DECREASE:
            return {
                ...state,
                number: state.number - state.dift
            }
        default: return state
    }
}