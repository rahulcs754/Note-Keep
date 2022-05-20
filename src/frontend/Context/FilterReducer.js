export const FilterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SORT_BY_DATE":
      return { ...state, sortByDate: payload };

    case "SET_LABEL":
      return { ...state, labelFilter: payload };

    case "SET_PRIORITY":
      return { ...state, priorityFilter: payload };

    case "CLEAR_ALL":
      return {
        ...state,
        sortByDate: "",
        priorityFilter: "",
        labelFilter: "",
      };

    default:
      return state;
  }
};
