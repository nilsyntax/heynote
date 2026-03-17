import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";


export function createEditor(container, content, onChange){

   const editorState = EditorState.create({
      doc: content,
      
   })

   const editorView = new EditorView({
      state: editorState,
      parent: container
   })

   return editorView
}