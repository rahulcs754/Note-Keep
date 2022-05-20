import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "./FilterReducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const intialValue = {
    sortByDate: "",
    priorityFilter: "",
    labelFilter: "",
  };
  const [filterState, filterDispatch] = useReducer(FilterReducer, intialValue);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
