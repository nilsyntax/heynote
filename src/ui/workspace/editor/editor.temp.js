export function editorDummy(note) {   
   return `
   <div>
   <h1>${note.title}</h1>
   <textarea>${note.content}</textarea>
   </div>
   `
}

   // const title = document.createElement("h1")
   // const textArea = document.createElement("textarea")

   // title.innerHTML = note.title
   // textArea.innerHTML = note.content