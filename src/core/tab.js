

export function tabModel(noteId) {

   return {
      id: crypto.randomUUID(),
      noteIds: [noteId],
      activeNoteIndex: 0
   }
}

export function createNewTab(store, newNoteId) {

   let newTab = tabModel(newNoteId)

   store.setState(state => {
      state.tabs.push(newTab)
      state.activeTabId = newTab.id
   })
}

export function openNote(store, noteId) {
   store.setState(state => {
      const activeTab = state.tabs.find(tab => tab.id === state.activeTabId)
      
      const {noteIds, activeNoteIndex } = activeTab
      if(noteIds[activeNoteIndex] === noteId) {
         return
      }
      if(activeNoteIndex < noteIds.length - 1){
         activeTab.noteIds = noteId.slice(0, activeNoteIndex + 1)
      }
      activeTab.noteIds.push(noteId)
      activeTab.activeNoteIndex++
   })
}

export function selectTab(){
   
}
// console.log(tabModel("3242nfwnerkj345r0"))