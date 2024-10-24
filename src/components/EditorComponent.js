import React, { useEffect, useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import ACTIONS from "../Actions"

const EditorComponent = ({ socketRef, roomId, onCodeChange }) => {
    const editorRef = useRef(null);

    // Function to handle code changes in the Monaco editor
    const handleEditorChange = (value) => {
        const code = value;
        onCodeChange(code);
        if (socketRef.current) {
            socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code });
        }
    };

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
                if (code !== null && editorRef.current) {
                    const editor = editorRef.current.getModel();
                    const currentCode = editor.getValue();
                    if (currentCode !== code) {
                        editorRef.current.setValue(code);
                    }
                }
            });
        }

        return () => {
            if (socketRef.current) {
                socketRef.current.off(ACTIONS.CODE_CHANGE);
            }
        };
    }, [socketRef]);

    return (
        <div className="monaco-editor-container">
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                theme="vs-dark"
                defaultValue="// Start coding..."
                onChange={handleEditorChange}
                onMount={(editor) => {
                    editorRef.current = editor;
                }}
            />
        </div>
    );
};

export default EditorComponent;
