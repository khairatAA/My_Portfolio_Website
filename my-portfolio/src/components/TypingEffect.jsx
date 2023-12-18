import React, { useState, useEffect } from 'react';


{/* Javascript implementation to acheive typing effect */}
const TypingEffect = ({ text, typingSpeed }) => {
    const [displayText, setDisplayText] = useState('');
    const initialLetter = text.charAt(0);

    useEffect(() => {
        let index = 0;
        let timer = null;

        const type = () => {
            timer = setInterval(() => {
                if (index <= text.length) {
                    setDisplayText(pervText => pervText + text.charAt(index));
                    index++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        setDisplayText(initialLetter);
                        index = 0;
                        type();
                    }, 1000);
                }
            }, typingSpeed);
        };

        type();

        return () => clearInterval(timer);
    }, [text, typingSpeed, initialLetter]);
    
    return <span>{displayText}</span>;
};

export default TypingEffect;
