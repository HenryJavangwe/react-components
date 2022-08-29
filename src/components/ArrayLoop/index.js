import React, { useState, createContext, useContext } from 'react';

const LanguageContext = createContext();
const languages = ['JavaScript', 'Python'];

export default function Index() {
  const [state, setState] = useState({
    index:0,
    languages: languages
  })

  const handleChange = ()=>{
    const newIndex = state.index + 1;

    if(state.languages[newIndex]){
      setState({...state, index : newIndex})
    }
    else{
      setState({...state, index : 0})
    }
  }
  return (
    <LanguageContext.Provider value={{...state, handleChange: handleChange}}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  let context = useContext(LanguageContext);
  let {handleChange, languages, index } = context;

  return (
    <div>
      <p id="favoriteLanguage">
        Favorite programing language: {languages[index]}
      </p>
      <button id="changeFavorite" onClick={handleChange}>Toggle language</button>
    </div>
  )
}
