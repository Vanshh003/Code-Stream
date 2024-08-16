import React from 'react';
import { Editor } from '@monaco-editor/react';

const EditorComponent = () => {
    return (
        <div className='monaco-editor-container'>
            <Editor
                height="90vh" // Adjust as needed
                defaultLanguage="javascript" // Set default language
                defaultValue="// Start coding..."
                theme="vs-dark" // Set default theme, you can use other themes
            />
        </div>
    );
}

export default EditorComponent;
