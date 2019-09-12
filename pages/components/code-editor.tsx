import React from 'react'
import MonacoEditor from 'react-monaco-editor'

class CodeEditor extends React.Component<{}, {code: string}> {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
    }
  }
  
  editorDidMount(editor) {
    console.log('editorDidMount', editor)
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e)
  }
  render() {
    const options = {
      selectOnLineNumbers: true
    }
    return (
      <MonacoEditor
        height="800"
        language="typescript"
        theme="vs-dark"
        value={this.state.code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default CodeEditor
