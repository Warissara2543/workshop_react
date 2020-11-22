import React, { useState } from 'react'
import VocapController from '../context/VocabCotroller';


const AppContext = React.createContext();

export const AppProvider = (props) => {

    // const [vocabs, setVocabs] = useState(initData);

    // const value = {
    //     vocabs: vocabs,
    //     setVocabs: setVocabs
    // }
    
    const vocapController = VocapController();

    const value={
        vocapController
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;

//How to user conext api *react