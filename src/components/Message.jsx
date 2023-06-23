import React from "react";
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
        <div className={classNam}> <div className="message" style={{ fontFamily }}>{body}</div> </div>
    )
}

export default Message