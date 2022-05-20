export const fetchPersonnel = (personnel) =>{
    return {
        type: 'FETCH_PERSONNEL',
        payload: personnel
    }
}
export const fetchLoading = () =>{
    return {
        type: 'FETCH_LOADING',
    }
}

export function fetchData() {
    return async (dispatch) => {
        dispatch(fetchLoading());
        const req = await fetch(`https://randomuser.me/api/?results=28`);
        const res = await req.json();
        dispatch(fetchPersonnel(res));
    }
}