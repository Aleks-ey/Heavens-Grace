// import { createContext, useState } from "react";
// import PropTypes from "prop-types";

// // Create a context to store indices
// export const IndexContext = createContext();

// // Provider component to manage multiple indices by contextId
// export const IndexContextProvider = ({ children }) => {
//   // State to store indices, with each entry keyed by contextId
//   const [indices, setIndices] = useState({});

//   // Function to get the current index for a specific contextId
//   const getIndex = (contextId) => {
//     return indices[contextId] || 0; // Default to 0 if the index is not set
//   };

//   // Function to set a new index for a specific contextId, or initialize it
//   const setIndex = (contextId, newIndex, initial = false) => {
//     setIndices((prevIndices) => {
//       // Only set the index if it's new or if explicitly called without initial
//       if (initial && prevIndices[contextId] !== undefined) return prevIndices;

//       return {
//         ...prevIndices,
//         [contextId]: newIndex,
//       };
//     });
//   };

//   return (
//     <IndexContext.Provider value={{ getIndex, setIndex }}>
//       {children}
//     </IndexContext.Provider>
//   );
// };

// IndexContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// IndexContextProvider.jsx
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create a context to store indices
export const IndexContext = createContext();

export const IndexContextProvider = ({ children }) => {
  const [indices, setIndices] = useState({});

  // Function to get the current index for a specific contextId
  const getIndex = (contextId) => {
    return indices[contextId] ?? 0; // Return 0 if index is not set
  };

  // Function to set a new index for a specific contextId
  const setIndex = (contextId, newIndex, isInitial = false) => {
    setIndices((prevIndices) => {
      // Only set index if not already set when initializing
      if (isInitial && prevIndices[contextId] !== undefined) return prevIndices;

      return {
        ...prevIndices,
        [contextId]: newIndex,
      };
    });
  };

  return (
    <IndexContext.Provider value={{ getIndex, setIndex }}>
      {children}
    </IndexContext.Provider>
  );
};

IndexContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
