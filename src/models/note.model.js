// Note Model structure
// ```
// {
//    Note ID [uuid]
//    Note Title [string]
//    Note Content [markdown as string]
//    Note Tag [string]
//    Created At [Time]
//    Last Updated [Time]
//    Last Opened [Time]
//    Pinned [boolean]
// }
// ```

export function noteModel(title="Untitled", content="Write Your Note"){
   const now = Date.now()
   const randomNumber = Math.floor(Math.random() * 100) + 1
   const randomTitle = title + randomNumber

   function validTitle(randomTitle){
      let valid
      
      if(randomTitle === "string" && randomTitle.trim().length > 0) {
         valid = randomTitle.trim()
      }
      else {valid = "Untitled" + randomNumber}
      
      return valid;
      // return typeof title === "string" && title.trim().length > 0 ? title.trim() : "Untitled"
   }


   function validContent(content){
      let valid
      if (typeof content === "string" && String(content)){
         valid = content
      }

      else { valid = String("") }
      return valid
      // return typeof content === "string" && String(content ?? "")
   }

   return {
      id: crypto.randomUUID(),
      title: validTitle(randomTitle),
      content: validContent(content),
      tags: [],
      createdAt: now,
      lastUpdate: now,
      lastOpened: now,
      pinned: false,
      readonly: false
   }
}

// console.log(noteModel("Hello", "This is Hello World"))