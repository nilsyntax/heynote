// attach event after render updates

export function attachTabEvent(state, services, tabManager) {

  // Event one - create note + in new tab
  const createNoteBtn = document.querySelector("#create-note")
  createNoteBtn.addEventListener('click', () => {
    const noteId = services.createNote()
    tabManager.openNewTab(noteId)
  })


  // Event two - click note to open
  const listItems = document.querySelector("#note-list")
  listItems.addEventListener("click", (e) => {
    const item = e.target.closest(".note-ref-item")
    if (!item) return

    const noteId = item.dataset.id

    if (state.activeTabId === null) {
      tabManager.openNewTab(noteId)
    }
    else if (e.ctrlKey) {
      tabManager.openNewTab(noteId)
    }
    else {
      tabManager.openInTab(noteId)
    }
  })

  // Event four - select tab

  // Event five - close tab
  // const tabSpace = document.querySelector("#tab-space")
  // tabSpace.addEventListener('click', (e) => {
  //   const closeBtn = e.target.closest(".tabClose")
  //   if (!closeBtn) return

  //   const tabId = closeBtn.dataset.tabId
  //   tabManager.closeTab(tabId)
  // })

  const tabSpace = document.querySelector("#tab-space")

  tabSpace.addEventListener("click", (e) => {

    const closeBtn = e.target.closest(".tabClose")
    if (closeBtn) {
      const tabId = closeBtn.dataset.tabId
      tabManager.closeTab(tabId)
      return
    }

    const tab = e.target.closest(".tab")
    if (tab) {
      const tabId = tab.dataset.id
      tabManager.selectTab(tabId)
    }

  })

  // Event three - back/forward
  const historyCtrlBtn = document.querySelector(".history-ctrl-btn")
  historyCtrlBtn.addEventListener('click', (e) => {
    // find the active tab
    //
    if (e.target.closest("#backward")) {
      tabManager.goBack()
    }
    if (e.target.closest("#forward")) {
      tabManager.goForward()
    }
  })
}






export function attachNoteEvent(services) {

  const listItems = document.querySelector("#note-list")

  listItems.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-note")
    if (!deleteBtn) return

    console.log(deleteBtn);
    const noteItem = deleteBtn.closest(".note-ref-item")
    const noteId = noteItem.dataset.id
    console.log(noteId);

    services.deleteNote(noteId)
  })

}



// Event two
// const tabSpace = document.querySelector("#tab-space")

// When delete a note there is some condition
// if note is open or not just delete
// if note is in a tab histoy, order after note is delete
// if it is current active(opened) note of tab history? set the next or previous one active note
// if the note is only note in the tab, delete note with closing the tab