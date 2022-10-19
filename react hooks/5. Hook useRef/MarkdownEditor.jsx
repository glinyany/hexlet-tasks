import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const markdownEl = useRef(null);

  useEffect(() => {
    // Состояние доступно внутри за счет обычной области видимости
    const editor = new Editor({
      el: markdownEl.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      // код который будет вызван при изменении содержимого редактора
      onContentChange(content);
    });

  });

  return (
    <div id="editor" ref={markdownEl}>
    </div>
  )
  // END
};

export default MarkdownEditor;

 /* BEGIN
 const editorRef = useRef(null);
 const rootElement = useRef(null);

 const onChange = (editor) => onContentChange(editor.getMarkdown());

 useEffect(() => {
   const editor = new Editor({
     el: rootElement.current,
     hideModeSwitch: true,
   });
   editor.addHook('change', () => onChange(editor));

   editorRef.current = editor;
 }, [onContentChange]);

 return <div ref={rootElement} />;
END */
