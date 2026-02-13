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

export function noteModel(title="Untitled", content=""){
   const now = Date.now()

   function validTitle(title){
      return typeof title === "string" && title.trim().length > 0 ? title.trim() : "Untitled"
   }

   function validContent(content){
      return typeof content === "string" && String(content ?? "")
   }

   return {
      id: crypto.randomUUID(),
      title: validTitle(title),
      content: validContent(content),
      tags: [],
      createdAt: now,
      lastUpdate: now,
      lastOpened: now,
      pinned: false,
      readonly: false
   }
}

console.log(noteModel("Hello", "This is Hello World"))