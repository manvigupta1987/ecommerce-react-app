import {createSelector} from 'reselect';

//input selector --> takes complete state and returns piece of the state. 
const selectDirectory = state => state.directory;

//createSelector takes two argument : first an array of the input selectors, 
// second: an function that would return the value that you want from this selector. This function
// takes the input return from the inputSelector (first parameter)
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)