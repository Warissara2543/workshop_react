import { useState,useEffect } from 'react';
import firebase from 'firebase';

const VocabController = () => {

    const col = firebase.firestore().collection('vocabs');

    useEffect(() => {

       const unsub = col.onSnapshot((snapshot)=>{

           const dataList = snapshot.docs.map((doc)=>{
               const dataObj = doc.data();

               return {
                   ...dataObj,
                   createAt: dataObj.createAt ? dataObj.createAt.toDate() : null
               }
           })

           setVocabs(dataList);
       })

       return()=>{
           unsub();
       }

    }, []);

    const [vocabs, setVocabs] = useState(null);

    const addVocabs = (word, types, meanings) => {
        return col.doc(word).set({
            word: word,
            types: types,
            meanings: meanings.split(",").map((item) => item.trim()),
            createAt: new Date()
        })
    }

    const deleteVocabs = (index) => {
        console.log();
        return col.doc(vocabs[index].word).delete();
    }

    return {
        vocabs: vocabs,
        setVocabs: setVocabs,
        addVocabs,
        deleteVocabs
    }

}

export default VocabController;