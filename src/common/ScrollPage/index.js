
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import './ScrollStyle.scss'

const ScrollIndicator = () => {
    //eslint-disable-next-line
    const { x, y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        setScrolled((y / height) * 100);
    }, [y]);

    return (
        <div className="scroll-container">
            <div className="indicator" style={{ width: `${scrolled}%` }}></div>
        </div>
    );
};

export default ScrollIndicator;


//y la chieu cuon xuong
//document.documentElement.scrollHeight la chieu cao cua toan page