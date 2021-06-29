import React, { useState, useEffect } from 'react';
import classes from './CodeBlock.css';
import axios from 'axios';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = (props) => {
    const [code, setCode] = useState('');
    useEffect(() => {
      axios
        .get(props.codeUrl)
        .then((response) => {
          if (response) {
            setCode(response.data);
          }
        })
        .catch((error) => {});
    }, [props.codeUrl]);

    return (
      <div className={classes.CodeBlock}>
        <p>{props.filename}</p>
        <SyntaxHighlighter
          showLineNumbers={true}
          language={props.language !== null ? props.language.toLowerCase() : ""}
          style={darcula}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
};

export default CodeBlock;
