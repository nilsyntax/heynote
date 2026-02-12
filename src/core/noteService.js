import { loadNotes, saveNotes } from "./storage.js"
import { noteModel } from "./note.model.js"

export class Service {
   constructor() {
      this.notes = loadNotes()   // in-memoery state (RAM) -> store array of object from storage
   }

   saveNotes() {
      saveNotes(this.notes)
   }

   createNote(title, content) {
      const newNote = noteModel(title, content)
      this.notes.unshift(newNote)
      this.saveNotes()
      console.log(this.notes)
   }

   updateNote(id, updates) {
      this.notes = this.notes.map(note => {
         note.id === id ? { ...note, ...updates } : note
      });
   }

   deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
   }
}
