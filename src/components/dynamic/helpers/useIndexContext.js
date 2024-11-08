// import { useContext, useEffect } from "react";
// import { IndexContext } from "./IndexContextProvider";

// // Custom hook to use the IndexContext
// export const useIndexContext = (contextId, initialIndex = 0) => {
//   const context = useContext(IndexContext);
//   if (!context) {
//     throw new Error(
//       "useIndexContext must be used within an IndexContextProvider"
//     );
//   }

//   const { getIndex, setIndex } = context;

//   // Initialize the index only once with initialIndex if it hasn't been set yet
//   useEffect(() => {
//     if (getIndex(contextId) === 0 && initialIndex !== 0) {
//       setIndex(contextId, initialIndex, true);
//     }
//   }, [contextId, initialIndex, getIndex, setIndex]);

//   return {
//     index: getIndex(contextId),
//     setIndex: (newIndex) => setIndex(contextId, newIndex),
//   };
// };

// useIndexContext.js
import { useContext, useEffect, useRef } from "react";
import { IndexContext } from "./IndexContextProvider";
import { v4 as uuidv4 } from "uuid"; // Optional, or use a simpler unique id generation approach

export const useIndexContext = (contextId, initialIndex = 0) => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error(
      "useIndexContext must be used within an IndexContextProvider"
    );
  }

  const { getIndex, setIndex } = context;

  // Generate a unique ID if no contextId is provided
  const uniqueIdRef = useRef(contextId || uuidv4());
  const resolvedContextId = contextId || uniqueIdRef.current;

  useEffect(() => {
    // Initialize the index if not already set
    setIndex(resolvedContextId, initialIndex, true);
  }, [resolvedContextId, initialIndex, setIndex]);

  return {
    index: getIndex(resolvedContextId),
    setIndex: (newIndex) => setIndex(resolvedContextId, newIndex),
  };
};
