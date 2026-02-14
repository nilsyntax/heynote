import { save, load } from "../services/storage";

export class Store {
   constructor () {

      this.state = {
          notes: [],
          tabs: [],
          activeNoteId: null
      }

      this.listners = []

      const savedNote = load()
      if(savedNote){ this.state = savedNote }
   }

   // An update function
   setState(updater){  // param = an any funciton that responsible to update data
      updater(this.state)
      this.notify()
      this._save()
   }

   subscribe(renderer){
      this.listners.push(renderer);
   }

   notify(){
      this.listners.forEach(render => {
         render()
      })
   }
   _save(){
      save(this.state)
   }
}




// import { saveNotes, loadNotes } from "../services/storage.js"
// import { noteModel } from "../models/note.model.js"

// export class Store {
//    constructor() {
//       this.notes = loadNotes()
//       this.listeners = []
//    }

//    saveNotes() {
//       saveNotes(this.notes)
//    }

   // createNote(title, content) {
   //    const newNote = noteModel(title, content)
   //    this.notes.unshift(newNote)
   //    this.saveNotes()
   //    console.log(this.notes)
   // }

   // updateNote(id, updates) {
   //    this.notes = this.notes.map(note => {
   //       note.id === id ? { ...note, ...updates } : note
   //    });
   // }

   // deleteNote(id) {
   //    this.notes = this.notes.filter(note => note.id !== id)
   // }
// }
