

import { aside } from "./aside/aside";
import { workspace } from "./workspace/workspace";
import { noteItem, tabItem } from "./components";
import { editorDummy } from "./workspace/editor/editor.temp";
import { attachEvent } from "./event";




export function renderApp(state, noteServices, tabManager) {
  const root = document.getElementById("app")
  root.innerHTML = ""
  root.append(aside(), workspace())


  // list all note in aside section
  const noteList = document.getElementById('note-list')
  state.notes.forEach(note => {
    noteList.append(noteItem(note, note.id === state.activeNoteId))
  });


  // list the tabs present with active note
  const tabSpace = document.querySelector("#tab-space")
  state.tabs.forEach(tab => {
    const note = state.notes.find(n => n.id === tab.history[tab.historyIndex])
    tabSpace.append(tabItem(note, tab.id, tab.id === state.activeTabId))
  })

  
  
  // // Editor
  const editorArea = document.querySelector("#editor")
  const currentActiveNote = state.notes.find(n => n.id === state.activeNoteId)
  // console.log("Current Active Note\n", currentActiveNote)
  if(!currentActiveNote) {
    editorArea.innerHTML = "No note Opened"
  }
  else{
    editorArea.innerHTML = `${editorDummy(currentActiveNote)}`
  }


  attachEvent(state, noteServices, tabManager)
}
