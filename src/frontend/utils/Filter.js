export function filterComposer(state, notes, ...functions) {
  return functions.reduce((acc, curr) => {
    return curr(state, acc);
  }, notes);
}

const FilterByLabels = (state, notes) => {
  const { labelFilter } = state;
  if (labelFilter.length > 0) {
    return notes.filter((item) => item.label === labelFilter);
  }
  return notes;
};

const FilterByPriority = (state, notes) => {
  const { priorityFilter } = state;
  if (priorityFilter.length > 0) {
    return notes.filter((item) => item.priority === priorityFilter);
  }
  return notes;
};

const SortByDate = (state, notes) => {
  const { sortByDate } = state;

  if (sortByDate.length > 0) {
    const sortData = [...notes].sort(
      (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
    );
    return sortByDate === "Old Date" ? sortData : sortData.reverse();
  }
  return notes;
};

export function getFilterNotes(state, notes) {
  return filterComposer(
    state,
    notes,
    FilterByLabels,
    FilterByPriority,
    SortByDate
  );
}
