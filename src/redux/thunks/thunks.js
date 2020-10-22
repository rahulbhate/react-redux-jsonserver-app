
import { loadDataInProgress, loadDataSuccess, loadDataFailure } from '../actions/apidataActions';

export const loadData = () => async(dispatch,getState) =>{
    try{
        dispatch(loadDataInProgress());
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        dispatch(loadDataSuccess(data));
    }catch(e){
        dispatch(loadDataFailure());
        dispatch(displayAlert(e));
    }
    
}
export const displayAlert = text => () =>{
    alert(text);
}