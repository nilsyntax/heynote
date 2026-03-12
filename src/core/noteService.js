import { noteModel } from "../models/note.model";

export class Service {
   constructor(store) {
      this.store = store
   }

   createNote() {
      const newNote = noteModel()
      this.store.setState(state => {
         state.notes.push(newNote)
         state.activeNoteId = newNote.id
      })

      return newNote.id       // returned new note id should pass to create new tab
   }

   updateNote(id, changes) {
      this.store.setState(state => {
         const note = state.notes.find(n => n.id === id)
         if (!note) return
         Object.assign(note, changes)
         note.lastUpdate = Date.now()
      })
   }

   deleteNote(noteId) {
      this.store.setState(state => {
         state.notes = state.notes.filter(n => n.id !== noteId) // removed

         state.tabs = state.tabs.filter(tab => {
            const index = tab.history.indexOf(noteId)

            if (index === -1) return true

            tab.history.splice(index, 1)

            if (index < tab.historyIndex) {
               tab.historyIndex--
            }

            if (tab.historyIndex >= tab.history.length) {
               tab.historyIndex = tab.history.length - 1
            }
            return tab.history.length > 0
         })
      })
   }
}