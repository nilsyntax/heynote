export function aside(){

   const asideSec = document.createElement("div")
   asideSec.classList.add(
    "aside", "min-w-70", "bg-gray-800", "px-3", "py-1", "border-r", "border-r-gray-600/50"
   )

   const title = `<div class="app-name text-2xl mb-2 cursor-pointer text-gray-300">just<span class="text-teal-600">note</span></div>`

   const noteRef = `<div id="note-list" class="flex flex-col gap-1 mt-4"></div>`
   
   asideSec.innerHTML = `
      ${title}
      ${noteRef}
   `

   asideSec.insertBefore(
    asideControls(), asideSec.querySelector("#note-list")
   )
   return asideSec
}



function asideControls(){
   const container = document.createElement("div")

   container.classList.add(
    "aside-controls", "flex", "items-center", "gap-2"
   )
   const searchEl = `
        <div class="search-section bg-gray-600/50 flex pl-1.5 w-full gap-1 rounded-xs">
          <span class="search-icon flex justify-center items-center w-fit aspect-square">
            <svg class="inline-block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="rgba(173,184,194,1)">
              <path
                d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z">
              </path>
            </svg>
          </span>
          <input type="search" name="search" id="search" placeholder="search note..."
            class="text-gray-200 outline-none text-[0.8rem] pb-0.5 pr-2">
        </div>
   `
   const createBtn = `
        <div id="create-note" class="inline-block mb-0.5 cursor-pointer">
          <svg class="inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
            height="24" fill="rgba(173,184,194,1)">
            <path
              d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z">
            </path>
          </svg>
        </div>
   `

   container.innerHTML = `
      ${searchEl}
      ${createBtn}
   `
   return container
}