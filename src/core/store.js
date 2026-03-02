import { save, load } from "../services/storage";

export class Store {
   constructor() {

      this.state = {
         notes: [],
         tabs: [],
         activeTabId: null,
         activeNoteId: null
      }

      this.listners = []

      const savedNote = load()
      if (savedNote) { this.state = savedNote }      // if savedNote isn't null, update this.state by storage data
   }

   getState(){
      return this.state
   }
   // An update function
   setState(updater) {                              // pass funciton responsible to update state data will pass by here
      updater(this.state)                          // This is execute in IIFE
      this.notify()
      this._save()
   }

   subscribe(renderer) {
      this.listners.push(renderer);
   }

   notify() {
      this.listners.forEach(render => {
         render()
      })
   }
   _save() {
      save(this.state)
   }
}