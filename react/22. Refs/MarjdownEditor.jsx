// @ts-nocheck

import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.state = { element: null, editor: null };
  }

  componentDidMount() {
    console.log(': COMPONENT DID MOUNT:', this.editorRef.current);
    const editor = new Editor({
      el: this.editorRef.current,
      hideModeSwitch: true,
    });
    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      const { onContentChange } = this.props;
        onContentChange(content);
      // код который будет вызван при изменении содержимого редактора
    });
  }

  render() {
    return (
      <div id="editor" ref={this.editorRef}>
      </div>
    )
  }
}
// END
