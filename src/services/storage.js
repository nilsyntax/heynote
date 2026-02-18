export function save(notes){
   localStorage.setItem("NOTES-DB", JSON.stringify(notes))
}


export function load(){
   const data = localStorage.getItem("NOTES-DB")

   return data ? JSON.parse(data) : null
}