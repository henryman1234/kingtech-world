import React from "react";
import "./accordionItem.scss";
import { useRef } from "react";
import {ArrowDownCircleIcon } from "lucide-react";


interface AccordionItemType {
    index: number,
    item: {header: string, content: string},
    active: number | null,
    handleToggle : (arg: number) => void
}



const AccordionItem = function ({active, index, item, handleToggle}: AccordionItemType) {

    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <li className="accordionItem">
            <h2 className={active === index ? "active": ""} onClick={function(){
                handleToggle(index)
            }}>{item?.header}
                <ArrowDownCircleIcon className="icon"/>
            </h2>

            <div ref={ref}  className="accordionContent" style={active === index ? {height: ref?.current?.scrollHeight}: {height: 0}}>
                <p>
                    {item?.content}
                </p>
            </div>
        </li>
    )
}

export default AccordionItem