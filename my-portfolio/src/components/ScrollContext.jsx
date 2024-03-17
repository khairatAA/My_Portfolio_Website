/* eslint-disable react/prop-types */
// Defined the scroll content to achieve the scrolling to a particular point

import { createContext, useState } from "react";

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

export { ScrollContext, ScrollProvider };
