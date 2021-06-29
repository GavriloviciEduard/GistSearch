import React, { useState, useEffect } from 'react';
import classes from './CodeSnippet.css';
import axios from 'axios';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = (props) => {
    const [code, setCode] = useState('');
    useEffect(() => {
        axios.get(props.codeUrl).then((response) => {
            setCode(response.data);
        });
    }, [props.codeUrl]);

    return (
        <div className={classes.CodeSnippet}>
            <p>{props.filename}</p>
            <SyntaxHighlighter
                showLineNumbers={true}
                language={
                    props.language != null ? props.language.toLowerCase() : ''
                }
                style={darcula}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeSnippet;
