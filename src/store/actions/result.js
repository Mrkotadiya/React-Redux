import * as actionTypes from "./actionTypes";



export const saveResult = ( res ) => {
     
    return {
       
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = ( res ) => {
    // const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result:res
        // result: updatedResult
    }
};

export const deleteResult = ( resElId ) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};