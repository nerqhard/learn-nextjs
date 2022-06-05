import { db } from '../../firebase'
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { FIRE_BASE_CONSTANTS } from 'constants/firebaseConstants'
import { addTextDisplay } from './actions'

export const getTextDisplay = () => async (dispatch: any) => {
    getDocs(collection(db, FIRE_BASE_CONSTANTS.TEXT_COLLECTION))
        .then((querySnapshot) => {
            const newTexts = querySnapshot.docs?.map((doc) => doc.data()?.label)
            dispatch(addTextDisplay(newTexts[newTexts.length - 1 || 0]))
        })
        .catch((e) => console.log('Error: ', e))
}

export const setTextDisplay = (textArray: string[]) => async (dispatch: any) => {
    try {
        await getDocs(collection(db, FIRE_BASE_CONSTANTS.TEXT_COLLECTION))
            .then((querySnapshot) => {
                querySnapshot.docs?.map(async (item) => {

                    await deleteDoc(doc(db, FIRE_BASE_CONSTANTS.TEXT_COLLECTION, item.id))
                })
            })
            .catch((e) => console.log('Error: ', e))
        const docRef = await addDoc(collection(db, FIRE_BASE_CONSTANTS.TEXT_COLLECTION), {
            label: textArray,
        })
        dispatch(getTextDisplay())
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}
