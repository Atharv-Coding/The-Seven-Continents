import React, { useState, useRef } from 'react'
import EuropeMap from '../images/map2.png'

export default function Europe() {
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
                <h1>Europe</h1>
                <p>Europe, second smallest of the world’s continents, composed of the westward-projecting peninsulas of Eurasia (the great landmass that it shares with Asia) and occupying nearly one-fifteenth of the world’s total land area. It is bordered on the north by the Arctic Ocean, on the west by the Atlantic Ocean, and on the south (west to east) by the Mediterranean Sea, the Black Sea, the Kuma-Manych Depression, and the Caspian Sea. <br /><br />

                Europe’s largest islands and archipelagoes include Novaya Zemlya, Franz Josef Land, Svalbard, Iceland, the Faroe Islands, the British Isles, the Balearic Islands, Corsica, Sardinia, Sicily, Malta, Crete, and Cyprus. Its major peninsulas include Jutland and the Scandinavian, Iberian, Italian, and Balkan peninsulas.<br /><br />

                Europe lies mainly in the temperate climate zones, being subjected to prevailing westerlies. The climate is milder in comparison to other areas of the same latitude around the globe due to the influence of the Gulf Stream. The Gulf Stream is nicknamed "Europe's central heating", because it makes Europe's climate warmer and wetter than it would otherwise be. The Gulf Stream not only carries warm water to Europe's coast but also warms up the prevailing westerly winds that blow across the continent from the Atlantic Ocean. <br/><br/>

                The Mediterranean region was the cradle of the ancient Greek and Roman civilizations. The collapse of the Western Roman Empire and the Barbarian invasions brought chaos to much of Europe. <br /> <br />

                There are 47 countries in Europe including Turkey and Russia which lie in both Europe and Asia. <br /> <br />

                Albania, Andorra, Austria, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Macedonia, Malta, Moldova, Monaco, Montenegro, Netherlands, Norway, Poland, Portugal, Romania, Russia, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, Ukraine, United Kingdom, Vatican City.


                </p>

                <div className="aside">
                    All in all, Europe enjoys a considerable and long-exploited resource base of soil, forest, sea, and minerals (notably coal), but its people are increasingly its principal resource. The continent, excluding Russia, contains less than one-tenth of the total population of the world, but in general its people are well educated and highly skilled. Europe also supports high densities of population, concentrated in urban-industrial regions. A growing percentage of people in urban areas are employed in a wide range of service activities, which have come to dominate the economies of most countries.  <br /><br />

                    The creation of the European Economic Community in 1957 and the EU in 1993 greatly enhanced economic cooperation between many of the continent’s countries. Europe’s continuing economic achievements are evidenced by its high standard of living and its successes in science, technology, and the arts.

                    <br /><br />

                    <b>
                        Area:  10,180,000 km2 (3,930,000 sq mi) <br />
                        Population:  746,419,440 (2018; 3rd) <br /><br />

                        <a target="blank" href="https://en.wikipedia.org/wiki/Europe">Read More..</a>
                        <br />
                        <a href="#extra-content">
                            <button className="see-more" onClick={seeMore}>{seeMoreBtnText}</button>
                        </a>
                        <div id="extra-content" ref={extraContent}>
                            <h2>Map</h2>
                            <img src={EuropeMap} alt="" className="map"/>
                        </div>
                    </b>

                </div>
                
            </div>
        </>
    )
}
