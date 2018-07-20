/*******************************************************************************
 * Utility functions
 ******************************************************************************/
function isValidEntryType (entryType) {
  // Add additonal entry types here as they are added to dna.json.
  return ["sampleEntry"].includes(entryType);
}

function readEntry (hash) {
  //get(hash, { GetMask: HC.GetMask.Sources })[0];
  return JSON.stringify(getLinks(App.DNA.Hash,"notary",{Load:true}));
}

function writeEntry (entries) {
  hash = commit("entries", entries);
  commit("entries_links",{
  Links: [
    {Base: App.DNA.Hash,Link: hash, Tag: "notary"}
  ]
});
}

function genesis () {
  return true;
}

function validateCommit (entryType, entry, header, pkg, sources) {
  return isValidEntryType(entryType);
}

function validatePut (entryType, entry, header, pkg, sources) {
  return validateCommit(entryType, entry, header, pkg, sources);
}

function validateMod (entryType, entry, header, replaces, pkg, sources) {
  return validateCommit(entryType, entry, header, pkg, sources)
    // Only allow the creator of the entity to modify it.
    && getCreator(header.EntryLink) === getCreator(replaces);
}

function validateDel (entryType, hash, pkg, sources) {
  return isValidEntryType(entryType)
    // Only allow the creator of the entity to delete it.
    && getCreator(hash) === sources[0];
}

function validateModPkg (entryType) {
  return null;
}

function validateDelPkg (entryType) {
  return null;
}
