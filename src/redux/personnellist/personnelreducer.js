const initState = {
    loading: true,
    personnel: {}
}

export const personnelreducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_LOADING': return {
            ...state,
            loading: true
        }
        case 'FETCH_PERSONNEL': return {
            loading: false,
            personnel: action.payload
        }
    
        default: return state
    }
}