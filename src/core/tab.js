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



   closeTab(tabId) {
      this.store.setState(state => {

         // find the index from the tabId
         const index = state.tabs.findIndex(ti => ti.id === tabId)
         if (index === -1) return

         // check if tab is active or not store into isActive
         const isActive = state.activeTabId === tabId

         // filter out the tab from state
         state.tabs = state.tabs.filter(t => t.id !== tabId)

         // check if isActive true or false -> false stop // true next step
         if (!isActive) return

         // last tab closed? set activeTabId to null
         if (state.tabs.length === 0) {
            state.activeTabId = null
            return
         }

         if (index === state.tabs.length) {
            // if the closed tab is the last index - set previous tab as active
            const preTabId = state.tabs[state.tabs.length - 1]
            console.log(preTabId);

            state.activeTabId = preTabId.id
            state.activeNoteId = preTabId.history[preTabId.historyIndex]
         }
         else {
            // if the closed tab is middle somether - set the next tab as active
            state.activeTabId = state.tabs[index].id
            state.activeNoteId = state.tabs[index].history[state.tabs[index].historyIndex]
         }
      })
   }

   // -----------------------------
   selectTab(tabId) {
      this.store.setState(state => {

         state.activeTabId = tabId

         const tab = state.tabs.find(t => t.id === tabId)
         if (!tab) return

         state.activeNoteId = tab.history[tab.historyIndex]

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