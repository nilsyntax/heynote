export function editor(id){
   const editor = document.createElement("div")
   
   const title = document.createElement("h1")
   const textArea = document.createElement("textarea")

   const state = store.getState()
   state.note.forEach(note => {
      if(note.id === id){
         title.innerHTML = note.title
         textArea.innerHTML = note.content
      }
   });

   editor.innerHTML = `
   ${title}
   ${textArea}
   `
}