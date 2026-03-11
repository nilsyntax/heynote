

import { aside } from "./aside/aside";
import { workspace } from "./workspace/workspace";
import { noteItem, tabItem } from "./components";
import { attachTabEvent, attachNoteEvent } from "./event";

export function renderApp(state, noteServices, tabManager) {
  const root = document.getElementById("app")
  root.innerHTML = ""
  root.append(aside(), workspace())

  // list all note in aside section
  const noteList = document.getElementById('note-list')
  state.notes.forEach(note => {
    noteList.append(noteItem(note))
  });

  // tabs
  const tabSpace = document.querySelector("#tab-space")
  state.tabs.forEach(tab => {
    const note = state.notes.find(n => n.id === tab.history[tab.historyIndex])
    tabSpace.append(tabItem(note, tab.id))
  })

  attachTabEvent(state, noteServices, tabManager)
  attachNoteEvent(noteServices)
}
