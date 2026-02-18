export function workspace() {
   const container = document.createElement("div")
   container.classList.add(
      "workspace", "w-full", "overflow-hidden", "flex", "flex-col", "bg-gray-700"
   )
   container.innerHTML = `
   ${tabNavigation()}
   ${noteSpace()}
   `
   return container
}

function tabNavigation() {
   return `
   <div id="tab-section" class="bg-gray-800 flex items-center w-full h-8">
      <div class="flex items-center h-full">
         <span id="backward" class="cursor-pointer h-full w-full px-0.5"><svg class="w-4 h-full fill-gray-400"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(173,184,194,1)">
              <path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
            </svg>
         </span>
         <span id="forward" class="cursor-pointer h-full w-full px-0.5"><svg class="w-4 h-full fill-gray-400"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(173,184,194,1)">
              <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
            </svg>
         </span>
      </div>

      <div id="tab-space" class="flex flex-1 min-w-0 h-full"></div>
   </div>
   `
}

function noteSpace(){
   return `
      <div id="noteview" class="w-full h-full relative">
        <span class="mode absolute right-4 top-3 cursor-pointer">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
            fill="rgba(173,184,194,1)">
            <path
              d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z">
            </path>
          </svg>
        </span>
        <div class="shortcut-hints w-full h-16 absolute bottom-0 bg-linear-to-b from-transparent to-gray-900/40"></div>
      </div>
   `
}