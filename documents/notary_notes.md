#Notary App Notes:

**Notary Object:**
1.) Title
2.) Signing Parties
3.) Content

**Someone signs up to be a Notary >> must flow through the KYC**
**Auditing can be completed through package handling, wherein the Auditor requests and receives a notary's full local chain.**
**Every Entry Type === private; therefore the backend structure only requires 1.)Commits, and 2.)Query.**
**This will enact a chain of events >> all but the initial event will be triggered by the completion of the previous event.**

##Zome:
**1.) Notarization:**
    **Entries:**
      > 1.) createdDocs >> list the # and types of actors needed for the signature.
      > 2.) receivedDocs >> past the newly received docs to the unread key on the global state object
      > 3.) signedDocs/approvedDocs
      > 4.) notarizedDocs

    **Functions:**
      > createDoc >> return the names needed to verified
      > sendPartiesDoc >> identified names are found in system and the doc is sent to named parties for them to sign.
      > * addtoLocalChain/storeDoc >> commit the new docs to the local chain of each recipient
      > * queryforNewDocSignRequests > each time user signs on, they query their local chain for new docs
      > respondToSignRequest/signDoc >> once the user sees new docs to sign, they can review and sign them
      > returnToSender >> the signing parties send back the signed docs to the original sender (lawyer, etc.)
      > senderDocReview > >the original sender (lawyer, etc.) reviews the doc to ensure all parts are complete
      > finalDocReview >> confirm that full number & type of sigs are complete and verify user's identity (their sig hash),
      > notarySign >> return bool for whether accept data.


**2.) Notification:**
  This Zome is responsible for managing/tracking the state changes of the document as it progresses from initialization to notarization.
    Entries:
      1.)

    Functions:
      1.)

**3.) Actors:**
      Entries:
        1.) Legal Representative
        2.) Signing Party(/Parties)
        3.) Notary
