import { arrowForwardIcon, arrowBackIcon } from "../../assets/svgico"
export function tabNavigation() {
   return `
   <div id="tab-section" class="bg-gray-800 flex items-center w-full h-8">
      <div class="history-ctrl-btn flex items-center h-full">
         <span id="backward" class="cursor-pointer h-full w-full px-0.5">
            ${arrowForwardIcon()}
         </span>
         <span id="forward" class="cursor-pointer h-full w-full px-0.5">
            ${arrowBackIcon()}
         </span>
      </div>

      <div id="tab-space" class="flex flex-1 min-w-0 h-full gap-0.5"></div>
   </div>
   `
}