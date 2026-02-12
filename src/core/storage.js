export function saveNotes(notes){
   localStorage.setItem("notes-db", JSON.stringify(notes))
}


export function loadNotes(){
   return JSON.parse(localStorage.getItem("notes-db") || "[]")
}


/*
Title, Content, careted At(date)

let notes = [

]
*/