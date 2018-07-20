import * as A from '../actions'
const initialState = {
    subject: "name",
    timestamp: "time",
    content: "action",
    notary: "Notary Republic Authority"
  }

export default function addEntry(state = initialState, action) {
  const { type, meta, payload } = action
  // console.log('reducer type = ', type);
  // console.log('reducer meta = ', meta);

  switch (type) {
    case A.ADD_ENTRY:
      console.log("meta for Add Entry", meta);
      return [payload, ...state];
    default:
      return state
  }
}
