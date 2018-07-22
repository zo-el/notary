function register() {}

// -----------------------------------------------------------------
//  The Genesis Function https://developer.holochain.org/genesis
// -----------------------------------------------------------------

function genesis() {
  return true;
}

// -----------------------------------------------------------------
//  Validation functions for every change to the local chain or DHT
// -----------------------------------------------------------------

function validateCommit(entryName, entry, header, pkg, sources) {
  //debug("entry_type:" + entryName + "entry" + JSON.stringify(entry) + "header" + JSON.stringify(header) + "PKG: " + JSON.stringify(pkg) + "sources" + sources);
  return validate(entryName, entry, header, pkg, sources);
}

function validate(entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "public_key":
      return true;
    default:
      return false;
  }
}

function validatePut(entryName, entry, header, pkg, sources) {
  return validate(entryName, entry, header, pkg, sources);

}

function validateMod(entryName, entry, header, replaces, pkg, sources) {
  return false;
}

function validateDel(entryName, hash, pkg, sources) {
  return false;
}

function validateLink(entryName, baseHash, links, pkg, sources) {
  return false;
}

function validatePutPkg(entryName) {
  return null;
}

function validateModPkg(entryName) {
  return null;
}

function validateDelPkg(entryName) {
  return null;
}

function validateLinkPkg(entryName) {
  return null;
}
