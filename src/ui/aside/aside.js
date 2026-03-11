import { createNoteIcon, searchIcon } from "../../assets/svgico"

export function aside() {
  const asideSec = document.createElement("div")
  asideSec.className = "aside min-w-70 bg-gray-800 px-3 py-1 border-r border-r-gray-600/50"

  const title = `<div class="app-name text-2xl mb-2 cursor-pointer text-gray-300">just<span class="text-teal-600">note</span></div>`
  const noteRef = `<div id="note-list" class="flex flex-col gap-1 mt-4"></div>`

  asideSec.innerHTML = `${title} ${noteRef}`
  asideSec.insertBefore(asideControls(), asideSec.querySelector("#note-list"))

  return asideSec
}



function asideControls() {
  const container = document.createElement("div")
  container.className = "aside-controls flex items-center gap-2"
  const searchEl = `
    <div class="search-section bg-gray-600/50 flex pl-1.5 w-full gap-1 rounded-xs">
      <span class="search-icon flex justify-center items-center w-fit aspect-square">
        ${searchIcon()}
      </span>
      <input type="search" name="search" id="search" placeholder="search note..."
      class="text-gray-200 outline-none text-[0.8rem] pb-0.5 pr-2">
    </div>
   `
  const createBtn = `
        <div id="create-note" class="inline-block mb-0.5 cursor-pointer">
          ${createNoteIcon()}
        </div>
   `

  container.innerHTML = `
      ${searchEl}
      ${createBtn}
   `
  return container
}