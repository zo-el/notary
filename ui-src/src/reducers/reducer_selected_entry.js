import * as A from '../actions'

const initialState = {
    subject: "Joel",
    timestamp: "11:45 AM",
    content: "Joel bought a house",
    notary: "Art"
  }


export default function selectEntry(state = initialState, action) {
  const { type, meta, payload } = action
  //console.log('SelectEntry Reducer payload ', payload)
  // console.log('reducer meta ' + meta)

  switch (type) {
    case A.SELECT_ENTRY:
      return {
        ...state,
        entry: payload
      }
    default:
      return state
  }
}
