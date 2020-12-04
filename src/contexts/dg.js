import React, { createContext, useContext, useState } from "react";

const DgContext = createContext({ correct: false, qnt: -1 });

export const DgProvider = ({ children }) => {

   const { qnt } = useContext(DgContext);
   const [ quantidade, setQuantidade ] = useState(qnt);
   const teste = quantidade;
   var palavra = "ELEFANTE";

   function changeNmb(ReceivedValue) {
      setQuantidade(ReceivedValue);
   }

   return (
      <DgContext.Provider value={{ quantidade, palavra, changeNmb }} >
         {children}
      </DgContext.Provider>
   )
}

export default DgContext;