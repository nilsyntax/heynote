import { circleIcon, closeIcon, deleteIcon} from "../assets/svgico"

export function noteItem(note, isActive) {
   
   const div = document.createElement("div")
   div.className = `note-ref-item group relative text-sm px-1.5 py-1 flex gap-1.5 cursor-pointer ${isActive ? "text-teal-700 font-medium": "text-gray-500"}`

   div.dataset.id = note.id

   div.innerHTML = `
    <span class="flex items-center"> ${circleIcon()} </span>
    <span>${note.title}</span>
    <span class="delete-note absolute right-0.5 opacity-0 transition duration-50 group-hover:opacity-80">${deleteIcon()}</span>
  `
   return div
}


export function tabItem(note, tabId, isActive){
   const div = document.createElement("div")
   div.className = `tab group flex items-center min-w-0 w-40 h-full py-1.5 pl-2 pr-1.5 cursor-pointer ${isActive?"bg-gray-700":"bg-transparent"} relative`
   div.dataset.id = tabId
   
   const title = `<span class="block min-w-0 truncate text-gray-400 text-xs">${note.title}</span>`
   const svgIcon = `<span class="tabClose absolute right-1 opacity-0 transition duration-50 group-hover:opacity-80" data-tab-id="${tabId}">${closeIcon()}</span>`
   // console.log("Component.js", note.title);
   
   
   div.innerHTML = `${title} ${svgIcon}`

   return div
}