
import { loadDataInProgress, loadDataSuccess, loadDataFailure } from '../actions/apidataActions';
import { loadImagesInProgress, loadImagesSuccess, loadImagesFailure} from "../actions/imagesActions";

export const loadData = () => async(dispatch,getState) =>{
    try{
        dispatch(loadDataInProgress());
        const response = await fetch("https://aible-quarkus.crowtech.com.au/api/public/quizs/courses/COR_DISABILITY");
        const data = await response.json();
        dispatch(loadDataSuccess(data));
    }catch(e){
        dispatch(loadDataFailure());
        dispatch(displayAlert(e));
    }
    
}

export const loadImages = () => async(dispatch,getState) =>{
    console.log("Load Images Thunks Called");
   try{
    dispatch(loadImagesInProgress());
    const baseUrl = process.env.API_URL + "/images/";
    const response = await fetch(baseUrl);
        const images = await response.json();
        dispatch(loadImagesSuccess(images));
   }catch(e){
    dispatch(loadImagesFailure());
    dispatch(displayAlert(e));
   }
}
export const displayAlert = text => () =>{
    alert(text);
}

