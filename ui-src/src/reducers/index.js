import { combineReducers } from 'redux';
import EntryReducer from "./reducer_entries";
import SelectedEntryReducer from "./reducer_selected_entry";
import AddEntryReducer from "./reducer_add_entry";

const rootReducer = combineReducers({
  // state: (state = {}) => state,
  entries: EntryReducer,
  selectedEntry: SelectedEntryReducer,
  addEntry: AddEntryReducer
});

export default rootReducer;
