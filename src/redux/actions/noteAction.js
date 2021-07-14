export const startNewNote = ( ) => {

    // fn nueva redux thunk getState, segundo parametro, sirve como el useSelector hook
    return (dispatch, getState) => {
        
       const uid = getState()

       console.log(uid);
      

    }
}