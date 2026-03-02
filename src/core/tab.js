export class Tab {
   constructor(store) {
      this.store = store
   }


   openNewTab(noteId) {
      let newTab = {
         id: crypto.randomUUID(),
         history: [noteId],
         historyIndex: 0
      }

      this.store.setState(state => {
         state.tabs.push(newTab)
         state.activeTabId = newTab.id
         state.activeNoteId = newTab.history[newTab.historyIndex]
      })
   }

   openInTab(noteId) {
      
      this.store.setState(state => {

         const activeTab = state.tabs.find(tab => tab.id === state.activeTabId)
         if (!activeTab) return

         const { history, historyIndex } = activeTab
         if (activeTab.history[activeTab.historyIndex] === noteId) return

         if (historyIndex < history.length - 1) {
            activeTab.history = history.slice(0, historyIndex + 1)
         }

         activeTab.history.push(noteId)
         activeTab.historyIndex++
         state.activeNoteId = activeTab.history[historyIndex]
      })
   }

   selectTab(tabId, noteId) {
      this.store.setState(state => {
         state.activeTabId = tabId
         state.activeNoteId = noteId
         // set note last opened id
      })
   }

   closeTab(tabId) {
      this.store.setState(state => {
         state.tabs = state.tabs.filter(t => t.id !== tabId)
      })
   }

   goBack() {
      this.store.setState(state => {
         const activeTab = state.tabs.find(tab => tab.id === state.activeTabId)
         if (!activeTab) return

         if (activeTab.historyIndex > 0) {
            activeTab.historyIndex--
         }
      })
   }

   goForward() {
      this.store.setState(state => {
         const activeTab = state.tabs.find(tab => tab.id === state.activeTabId);
         if (!activeTab) return;

         if (activeTab.historyIndex < activeTab.history.length - 1) {
            activeTab.historyIndex++;
         }
      })
   }

}


// export function tabModel(noteId) {

//    return {
//       id: crypto.randomUUID(),
//       history: [noteId],
//       historyIndex: 0
//    }
// }
// export function openNewTab(store, newNoteId) {
//    let newTab = tabModel(newNoteId)

//    store.setState(state => {
//       state.tabs.push(newTab)
//       state.activeTabId = newTab.id
//       state.activeNoteId = newTab.history[historyIndex]
//    })
// }

// export function openInTab(store, noteId) {
//    store.setState(state => {
//       const activeTab = state.tabs.find(tab => tab.id === state.activeTabId)

//       if (!activeTab) return

//       const { history, historyIndex } = activeTab

//       if (activeTab.history[activeTab.historyIndex] === noteId) return

//       if (historyIndex < history.length - 1) {
//          activeTab.history = history.slice(0, historyIndex + 1)
//       }

//       activeTab.history.push(noteId)
//       activeTab.historyIndex++
//       state.activeNoteId = newTab.history[historyIndex]
//    })
// }

// export function selectTab(store, tabId) {
//    store.setState(state => {
//       state.activeTabId = tabId
//    })
// }

// export function closeTab(store, tabId) {
//    store.setState(state => {
//       state.tabs = state.tabs.filter(t => t.id !== tabId)
//    })
// }


// export function goBack(store) {
//    store.setState(state => {
//       const activeTab = state.tabs.find(tab => tab.id === state.activeTabId);
//       if (!activeTab) return;

//       if (activeTab.historyIndex > 0) {
//          activeTab.historyIndex--;
//       }
//    });
// }

// export function goForward(store) {
//    store.setState(state => {
//       const activeTab = state.tabs.find(tab => tab.id === state.activeTabId);
//       if (!activeTab) return;

//       if (activeTab.historyIndex < activeTab.history.length - 1) {
//          activeTab.historyIndex++;
//       }
//    });
// }
// console.log(tabModel("3242nfwnerkj345r0"))