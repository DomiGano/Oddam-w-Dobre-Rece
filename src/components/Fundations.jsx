import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { DescriptionPrinter } from "./DescriptionPrinter";
import { Button } from "./Button ";

export const Fundations = () => {
    
    const myData = [{
        category: "Fundacjom",
        category2: "Fundacja",
        description: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        list: [{
            name: "Dla dzieci",
            target: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            get: ["ubrania", "jedzenie", "sprzęt AGD", "meble", "zabawki"]
        },
        {
            name: "Dbam o Zdrowie",
            target: "Pomoc dzieciom z ubogich rodzin.",
            get: ["ubrania", "meble", "zabawki"]
        },
        {
            name: "Bez domu",
            target: "Pomoc dzieciom z ubogich rodzin.",
            get: ["ubrania", "jedzenie", "ciepłe koce"]
        },
        {
            name: "Dla IT",
            target: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            get: ["ubrania", "jedzenie", "sprzęt AGD", "meble", "zabawki"]
        },
        {
            name: "Nasz dom",
            target: "Pomoc dzieciom z ubogich rodzin.",
            get: ["ubrania", "meble", "zabawki"]
        },
        {
            name: "Lepsze życie",
            target: "Pomoc dzieciom z ubogich rodzin.",
            get: ["ubrania", "jedzenie", "ciepłe koce"]
        }]
    },
    {
        category: "Organizacją pozarządowym",
        category2: "Organizacja",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        list: [{
            name: "Lorem Ipsum 1",
            target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            get: ["Egestas", "sed", "tempus"]
        },
        {
            name: "Lorem Ipsum 2",
            target: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            get: ["Ut", "aliquam", "purus", "sit", "amet"]
        },
        {
            name: "Lorem Ipsum 3",
            target: "Scelerisque in dictum non consectetur a erat nam.",
            get: ["Mi", "quis", "hendrerit", "dolor"]
        },
        {
            name: "Lorem Ipsum 4",
            target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            get: ["Egestas", "sed", "tempus"]
        },
        {
            name: "Lorem Ipsum 5",
            target: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            get: ["Ut", "aliquam", "purus", "sit", "amet"]
        },
        {
            name: "Lorem Ipsum 6",
            target: "Scelerisque in dictum non consectetur a erat nam.",
            get: ["Mi", "quis", "hendrerit", "dolor"]
        },
        {
            name: "Lorem Ipsum 7",
            target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            get: ["Egestas", "sed", "tempus"]
        },
        {
            name: "Lorem Ipsum 8",
            target: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            get: ["Ut", "aliquam", "purus", "sit", "amet"]
        },
        {
            name: "Lorem Ipsum 9",
            target: "Scelerisque in dictum non consectetur a erat nam.",
            get: ["Mi", "quis", "hendrerit", "dolor"]
        },
        {
            name: "Lorem Ipsum 10",
            target: "Scelerisque in dictum non consectetur a erat nam.",
            get: ["Mi", "quis", "hendrerit", "dolor"]
        },]
    },
    {
        category: "Lokalnym zbiórkom",
        category2: "Zbiórka",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        list: [{
            name: "Lorem Ipsum 1",
            target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            get: ["Egestas", "sed", "tempus"]
        },
        {
            name: "Lorem Ipsum 2",
            target: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            get: ["Ut", "aliquam", "purus", "sit", "amet"]
        },
        {
            name: "Lorem Ipsum 3",
            target: "Scelerisque in dictum non consectetur a erat nam.",
            get: ["Mi", "quis", "hendrerit", "dolor"]
        },]
    },]

    const[active, setActive] = useState(myData[0])
    const[selectPage, setSelectPage] = useState(1)

    const numberOfPages = (list) => {
        const pages = [];
    
        if (list.length % 3 <= 0) {
            for (let i = 1; i <= list.length / 3; i++) {
                pages.push(i);
            }
        } else {
            for (let i = 1; i <= Math.floor(list.length / 3) + 1; i++) {
                pages.push(i);
            }
        }
    
        return pages;
    }

    const pageViewer = (page, list, category) => {
        let period = page * 3;

        return (
        list.slice(period - 3,period).map((element, index) => {
            const getList = element.get.join(', ')

            return (

            <li key={index} className="fundations__list__element"><div className="list__element__left">
                 {category} "{element.name}"
                <span className="list__element__targets">Cel i misja: {element.target}</span>
                </div>
                <div className="list__element__right">{getList}</div>
                </li>
            )
        })
        )
        
    }

    const handleCategoryClick = (category) => {
        setActive(category);
        setSelectPage(1);
    }
    
    return (
        <section className="fundations" id="fundations">
            <Title text={"Komu pomagamy?"}/>
            <div className="container">
                <div className="fundations__switches">
                <button className="basic__button" onClick={() => handleCategoryClick(myData[0])}>{myData[0].category}</button>
                <button className="basic__button" onClick={() => handleCategoryClick(myData[1])}>{myData[1].category}</button>
                <button className="basic__button" onClick={() => handleCategoryClick(myData[2])}>{myData[2].category}</button>
                </div>
                    <DescriptionPrinter description={active.description} />
                
                <ul className="fundations__list">
                    {pageViewer(selectPage, active.list, active.category2)}
                </ul>
                <div className="pages">
                    {numberOfPages(active.list).length > 1 ? numberOfPages(active.list).map((element, index) => <p key={index} className="page__number" style={selectPage == element ? {border: '1px solid #3C3C3C'} : {border: 'none'}} onClick={() => setSelectPage(element)}
                        >{element}</p>) : null}
                    </div>
            </div>
        </section>

        
    )

}