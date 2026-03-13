export function editorDummy(note) {   
   return `
   <div class="px-10 py-5 w-full h-full">
   <h1 class="text-3xl mb-4">${note.title}</h1>
   <textarea class="w-full h-full">${note.content}</textarea>
   </div>
   `
}

   // const title = document.createElement("h1")
   // const textArea = document.createElement("textarea")

   // title.innerHTML = note.title
   // textArea.innerHTML = note.content