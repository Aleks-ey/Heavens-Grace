import { useContext } from "react";
import { IndexContext } from "./IndexContextProvider";

// Custom hook to use the IndexContext
export const useIndexContext = (contextId) => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error(
      "useIndexContext must be used within an IndexContextProvider"
    );
  }

  const { getIndex, setIndex } = context;

  // Return the current index and the setIndex function, scoped to the provided contextId
  return {
    index: getIndex(contextId),
    setIndex: (newIndex) => setIndex(contextId, newIndex),
  };
};
