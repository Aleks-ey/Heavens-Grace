import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create a context to store indices
export const IndexContext = createContext();

// Provider component to manage multiple indices by contextId
export const IndexContextProvider = ({ children }) => {
  // State to store indices, with each entry keyed by contextId
  const [indices, setIndices] = useState({});

  // Function to get the current index for a specific contextId
  const getIndex = (contextId) => {
    return indices[contextId] || 0; // Default to 0 if the index is not set
  };

  // Function to set a new index for a specific contextId
  const setIndex = (contextId, newIndex) => {
    setIndices((prevIndices) => ({
      ...prevIndices,
      [contextId]: newIndex,
    }));
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
