import React, { useState, useRef } from 'react'
import AfMap from '../images/map6.png'
import '../App.css';


export default function Africa() {
    let extraContentOpen = false;
    const [seeMoreBtnText, setseeMoreBtnText] = useState("Show More");
    const extraContent = useRef(null);
    function seeMore() {
        if (!extraContentOpen) {
            extraContent.current.classList.add("open")
            setseeMoreBtnText("Hide More")
            extraContentOpen = true
        } else {
            extraContent.current.classList.remove("open")
            setseeMoreBtnText("Show More")
            extraContentOpen = false
        }
    }
    return (
        <>
            <div id="continent">
                <h1>Africa</h1>
                <p>Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area With 1.3 billion peopl as of 2018, it accounts for about 16% of the world's human population. Africa's population is the youngest amongst all the continents the median age in 2012 was 19.7, when the worldwide median age was 30.4. Despite a wide range of natural resources, Africa is the least wealthy continent per capita, in part due to geographic impediments, legacies of European colonization in Africa and the Cold War, predatory/neo-colonialistic activities by Western nations and China, and undemocratic rule and deleterious policies. Despite this low concentration of wealth, recent economic expansion and the large and young population make Africa an important economic market in the broader global context.<br /><br />

                    The continent is surrounded by the Mediterranean Sea to the north, the Isthmus of Suez and the Red Sea to the northeast, the Indian Ocean to the southeast and the Atlantic Ocean to the west. The continent includes Madagascar and various archipelagos. It contains 54 fully recognised sovereign states (countries), eight territories and two de facto independent states with limited or no recognition. Algeria is Africa's largest country by area, and Nigeria is its largest by population. African nations cooperate through the establishment of the African Union, which is headquartered in Addis Ababa.<br /><br />

                    Climatic and other factors have exerted considerable influence on the patterns of human settlement in Africa. While some areas appear to have been inhabited more or less continuously since the dawn of humanity, enormous regions—notably the desert areas of northern and southwestern Africa—have been largely unoccupied for prolonged periods of time. Thus, although Africa is the second largest continent, it contains only about 10 percent of the world's population and can be said to be underpopulated. The greater part of the continent has long been inhabited by Black peoples, but in historic times there also have occurred major immigrations from both Asia and Europe. Of all foreign settlements in Africa, that of the Arabs has made the greatest impact. The Islamic religion, which the Arabs carried with them, spread from North Africa into many areas south of the Sahara, so that many western African peoples are now largely Islamized.<br /><br />

                    More than 85% of individuals in Africa use traditional medicine as an alternative to often expensive allopathic medical health care and costly pharmaceutical products. The Organization of African Unity (OAU) Heads of State and Government declared the 2000s decade as the African Decade on African traditional medicine in an effort to promote The WHO African Region's adopted resolution for institutionalizing traditional medicine in health care systems across the continent. Public policy makers in the region are challenged with consideration of the importance of traditional/indigenous health systems and whether their coexistence with the modern medical and health sub-sector would improve the equitability and accessibility of health care distribution, the health status of populations, and the social-economic development of nations within sub-Saharan Africa.<br /><br />


                </p>
                <div className="aside">

                    Fifty-four African countries have football teams in the Confederation of African Football. Egypt has won the African Cup seven times, and a record-making three times in a row. Cameroon, Nigeria, Senegal, Ghana, and Algeria have advanced to the knockout stage of recent FIFA World Cups. South Africa hosted the 2010 World Cup tournament, becoming the first African country to do so.

                    In recent years, the continent has made major progress in terms of state-of-the-art basketball facilities which have been built in cites as diverse as Cairo, Dakar, Johannesburg, Kigali, Luanda and Rade21] The number of African basketball players who drafted into the NBA has experienced major growth in the 2010s.

                    Cricket is popular in some African nations. South Africa and Zimbabwe have Test status, while Kenya is the leading non-test team and previously had One-Day International cricket (ODI) status (from 10 October 1997, until 30 January 2014). The three countries jointly hosted the 2003 Cricket World Cup. Namibia is the other African country to have played in a World Cup. Morocco in northern Africa has also hosted the 2002 Morocco Cup, but the national team has never qualified for a major tournament.

                    Rugby is popular in several southern African nations. Namibia and Zimbabwe both have appeared on multiple occasions at the Rugby World Cup, while South Africa is the joint-most successful national team (alongside New Zealand) at the Rugby World Cup, having won the tournament on 3 occasions, in 1995, 2007, and 2019.<br /><br />

                    The climate of Africa ranges from tropical to subarctic on its highest peaks. Its northern half is primarily desert, or arid, while its central and southern areas contain both savanna plains and dense jungle (rainforest) regions. In between, there is a convergence, where vegetation patterns such as sahel and steppe dominate. Africa is the hottest continent on Earth and 60% of the entire land surface consists of drylands and deserts. The record for the highest-ever recorded temperature, in Libya in 1922 (58 °C (136 °F)), was discredited in 2013. <br /><br />

                    <b>
                        Area: 30,370,000 km2 (11,730,000 sq mi)  (2nd) <br />
                        Population: 1,275,920,972 (2018; 2nd) <br /> <br />

                        <a target="blank" href="https://en.wikipedia.org/wiki/Africa">Read More..</a> <br />
                        <a href="#extra-content">
                            <button className="see-more" onClick={seeMore}>{seeMoreBtnText}</button>
                        </a>
                        <div id="extra-content" ref={extraContent}>
                            <h2>Map</h2>
                            <img src={AfMap} alt="" className="map"/>
                        </div>
                    </b>

                </div>
            </div>
        </>
    )
}
