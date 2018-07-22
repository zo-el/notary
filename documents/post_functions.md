# Post Function for Notary UI
## ZomeName: Notarization

### getPreliminaryDoc()
**Details:** Call to Retrieve the newly created Notary Doc
> function getPreliminaryDoc() {
  var result = query({
    Return: {
      Hashes: true
    },
    Constrain: {
      EntryTypes: ["preliminary_notary_doc"]
    }
  });
  return result;
}
