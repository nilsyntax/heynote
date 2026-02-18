// export function appLayout(root){
//    root.innerHTML = `
//        <!-- Left note reference panel -->
//     <div class="app-sidebar min-w-70 bg-gray-800 px-3 py-1 border-r border-r-gray-600/50">
//       <div class="app-name text-2xl mb-2 cursor-pointer text-gray-300">just<span class="text-teal-600">note</span></div>

//       <div class="panel-utility flex items-center gap-2">
//         <!-- search -->
//         <div class="search-section bg-gray-600/50 flex pl-1.5 w-full gap-1 rounded-xs">
//           <span class="search-icon flex justify-center items-center w-fit aspect-square">
//             <svg class="inline-block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//               fill="rgba(173,184,194,1)">
//               <path
//                 d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z">
//               </path>
//             </svg>
//           </span>
//           <input type="search" name="search" id="search" placeholder="search note..."
//             class="text-gray-200 outline-none text-[0.8rem] pb-0.5 pr-2">
//         </div>
//         <!-- search -->
//         <div id="create-note" class="inline-block mb-0.5 cursor-pointer">
//           <svg class="inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
//             height="24" fill="rgba(173,184,194,1)">
//             <path
//               d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z">
//             </path>
//           </svg>
//         </div>
//       </div>

//       <div id="note-ref-section" class="flex flex-col gap-1 mt-4">
//         <!-- note reference component -->
//         <!-- <div class="note-ref-item text-sm px-1.5 py-1 flex gap-1.5 cursor-pointer text-gray-400">
//           <span class="flex items-center"><svg width="12" height="15" viewBox="0 0 17 20" fill="none"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M4.72222 0V20H0V16V14V11V9V6V4V0H4.72222ZM15.1157 0C16.1564 0 17 0.89821 17 1.9908V18.0092C17 19.1087 16.157 20 15.1157 20H5.66667V0H15.1157Z"
//                 fill="#ADB8C2" />
//             </svg></span>
//           This active note title
//         </div> -->

//         <!-- /////// -->
//         <!-- <div class="note-ref-item text-sm px-1.5 py-1 flex gap-1.5 cursor-pointer text-gray-400">
//           <span class="flex items-center"><svg width="12" height="15" viewBox="0 0 17 20" fill="none"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M4.72222 0V20H0V16V14V11V9V6V4V0H4.72222ZM15.1157 0C16.1564 0 17 0.89821 17 1.9908V18.0092C17 19.1087 16.157 20 15.1157 20H5.66667V0H15.1157Z"
//                 fill="#ADB8C2" />
//             </svg></span>
//           The is note title
//         </div> -->
//         <!-- note reference component -->
//       </div>

//     </div>

//     <!-- note view main section -->
//     <div class="note-main-section w-full overflow-hidden flex flex-col bg-gray-700">

//       <!-- Note tab section -->
//       <div id="tab-section" class="bg-gray-800 flex items-center w-full h-8">

//         <div class="flex items-center h-full">
//           <span id="prev" class="cursor-pointer h-full w-full px-0.5"><svg class="w-4 h-full fill-gray-400"
//               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(173,184,194,1)">
//               <path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
//             </svg></span>
//           <span id="next" class="cursor-pointer h-full w-full px-0.5"><svg class="w-4 h-full fill-gray-400"
//               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(173,184,194,1)">
//               <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
//             </svg></span>
//         </div>

//         <div class="tab-container flex flex-1 min-w-0 h-full">
//           <!-- tab component -->
//           <!-- <div class="tab flex items-center min-w-0 max-w-40 h-full py-1.5 pl-2 pr-1.5 cursor-pointer bg-gray-700">
//             <span class="block min-w-0 truncate text-gray-400 text-xs">This active note title</span>
//             <span class=""><svg class="w-4 h-4 ml-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//                 fill="rgba(207,207,207,1)">
//                 <path
//                   d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
//                 </path>
//               </svg></span>
//           </div> -->
//           <!-- ///////////// -->
//           <!-- <div class="tab flex items-center min-w-0 max-w-38 h-full py-1.5 pl-2 pr-1 cursor-pointer bg-gray-800">
//             <span class="block min-w-0 truncate text-gray-400 text-xs">This is note title</span>
//             <span class=""><svg class="w-4 h-4 ml-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//                 fill="rgba(207,207,207,1)">
//                 <path
//                   d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
//                 </path>
//               </svg></span>
//           </div> -->
//           <!-- tab component -->
//         </div>

//         <!-- Note view section -->
//       </div>
//       <div id="noteview" class="w-full h-full relative">
//         <span class="mode absolute right-4 top-3 cursor-pointer">
//           <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
//             fill="rgba(173,184,194,1)">
//             <path
//               d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z">
//             </path>
//           </svg>
//         </span>
//         <div class="shortcut-hints w-full h-16 absolute bottom-0 bg-linear-to-b from-transparent to-gray-900/40"></div>
//       </div>
//     </div>
//    `
// }

import { aside } from "./sidebar";
import { workspace } from "./workspace";


export function appLayout (root){
  root.append(aside(), workspace())
}