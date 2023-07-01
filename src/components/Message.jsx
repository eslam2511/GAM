import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../style/Message.css'


const Message = ({ body, classNam }) => {
    const arabicAlphabet = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];
    const englishAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const countCharacters = (str, alphabet) => {
        const characters = str.split('');
        return characters.filter(char => alphabet.includes(char)).length;
    };

    const arabicCharacterCount = countCharacters(body, arabicAlphabet);
    const englishCharacterCount = countCharacters(body, englishAlphabet);


    let fontFamily;
    if (arabicCharacterCount > englishCharacterCount) {
        fontFamily = 'Noto Sans Arabic, sans-serif';
    } else {
        fontFamily = 'Kanit, sans-serif';
    }


    return (
        <div className={classNam}>
            <div className="message" style={{ fontFamily }}>
                <ReactMarkdown className='markDown-container'
                    components={{
                        code: ({ node, inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={duotoneDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                    className="code-block"
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {body}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Message