import  { useState, type JSX } from "react";
import "./accordion.scss";
import AccordionItem from "../accordionItem/AccordionItem";


type ItemsType = {
    items: {header: string, content: string}[]
}

const Accordion = function ({items}: ItemsType) {

    const [active, setActive] = useState<number | null>(null)

    const handleToggle = function (index: number) {
        setActive(active === index ? null: index)
    }

    return (
        <div className="accordion">
            <div className="accordionContainer">
                <h2 className="accordionTitle">foire aux questions</h2>
                {items.map(function(item: {header: string, content: string}, index: number){
                    return (
                       <AccordionItem 
                            key={index}
                            index={index}
                            active={active}
                            item={item}
                            handleToggle={handleToggle}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Accordion