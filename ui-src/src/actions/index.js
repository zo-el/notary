// Holochain actions
export const FETCH_NOTARY_ENTRIES = 'fetchNotaryEntries';
export const SELECT_ENTRY = 'selectEntry';
export const ADD_ENTRY = 'addEntry';

// Holochain actions
export function fetchNotaryEntries(entries, then) {
  return {
    type: FETCH_NOTARY_ENTRIES,
    meta: {
      isHc: true,
      namespace: 'entries',
      data: entries,
      then
    }
  }
}

export function selectEntry(entry) {
// console.log(entry);
  return {
    type: SELECT_ENTRY,
    payload: entry
    // meta: {
    //   isHc: true,
    //   namespace: 'entries',
    //   data: entry
    // }
  }
}

export function addEntry(entry) {
  return {
    type: ADD_ENTRY,
    payload: entry
    // meta: {
    //   isHc: true,
    //   namespace: 'entries',
    //   data: entry
    // }
  }
}
