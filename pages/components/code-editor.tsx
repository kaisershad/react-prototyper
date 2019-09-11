import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

interface ICodeEditor  {
  code?: string | null;
}

export function CodeEditor(props: ICodeEditor) {
  return(
    <div>Code Editor</div>
  )
}