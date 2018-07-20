import * as A from '../actions'

const initialState = [
  {
    subject: "Joel",
    timestamp: "11:45 AM",
    content: "Joel bought a house",
    notary: "Art"
  },
  {
    subject: "Michael",
    timestamp: "01:45 PM",
    content: "Michael sold his property",
    notary: "Joel"
  },
  {
    subject: "Yang",
    timestamp: "05:45 PM",
    content: "Yang received student visa",
    notary: "Daniel"
  }
]

export default function fetchNotaryEntries(state = initialState, action) {
  const { type, meta, payload } = action
  // console.log('reducer type ', type)

  switch (type) {
    case A.FETCH_NOTARY_ENTRIES:
      return {
        ...state,
        entries: payload
      }
    default:
      return state
  }
}
