import '@toast-ui/editor/dist/toastui-editor.css';

import ReactDOM from 'react-dom/client';
import React from 'react';

import MarkdownEditor from './MarkdownEditor.jsx.js';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<MarkdownEditor onContentChange={console.log} />);
