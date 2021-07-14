// importar db de firebase para hacer el crud con el noteAction 
import {db} from '../../firebase/firebaseConfig'

export const startNewNote = ( ) => {

    // fn nueva redux thunk getState, segundo parametro, sirve como el useSelector hook, 
    // para acceder al state del store
    return async (dispatch, getState) => {
        
        // extraemos el uid del state auth
       const {uid} = getState().auth; // asi se accede al state de auth por ej
   
       const newNote = {
           title: '',
           body:'',
           date: new Date().getTime()
       }

                            // collectionPath
       const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

       console.log(doc)
      

    }
}