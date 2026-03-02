import { Store } from "./core/store";
import { Service } from "./core/noteService";
import { Tab } from "./core/tab";

import { renderApp } from "./ui/render";


const store = new Store()
const getState = store.getState()

const noteServices = new Service(store)
const tabManager = new Tab(store)


store.subscribe(() => renderApp(getState, noteServices, tabManager))
renderApp(getState, noteServices, tabManager)


// // document.addEventListener("DOMContentLoaded", () => {
   
// //    const appRoot = document.getElementById('app')
// //    appLayout(appRoot)
   
// //    let createButton = document.querySelector("#create-note")
// //    console.log(createButton);
   
// // })

// const appRoot = document.getElementById('app')
// appLayout(appRoot)
   

// console.log(appRoot);


