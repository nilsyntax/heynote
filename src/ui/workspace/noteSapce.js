import { editModeIcon } from "../../assets/svgico"

export function noteSpace(){
   return `
      <div id="noteview" class="w-full h-full relative">
        <span class="mode absolute right-4 top-3 cursor-pointer">
          ${editModeIcon()}
        </span>
        <div id="editor" class="bg-gray-500 w-full h-full">
            Hello World
        </div>
        <div class="shortcut-hints w-full h-16 absolute bottom-0 bg-linear-to-b from-transparent to-gray-900/40">
        
        </div>
      </div>
   `
}