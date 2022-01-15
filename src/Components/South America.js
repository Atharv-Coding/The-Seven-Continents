import React, { useState, useRef } from 'react'
import SAMap from '../images/map3.png'

export default function SouthAmerica() {
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
                <h1>South America</h1>
                <p>South America is a continent entirely in the Western Hemisphere and mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It can also be described as the southern subregion of a single continent called America. The reference to South America instead of other cultural or geographical regions has increased in recent decades due to changing geopolitical dynamics. South America is bordered on the west by the Pacific Ocean and on the north and east by the Atlantic Ocean, North America and the Caribbean Sea lie to the northwest. The continent generally includes twelve sovereign states: Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela; two dependent territories: the Falkland Islands and South Georgia and the South Sandwich Islands; and one internal territory: French Guiana. <br /><br />

                    Brazil is the largest country in South America, containing 8,515,799 square kilometres. Brazil has a coastline of 7,491 squared kilometers. Brazil borders nearly every country in South America, excluding only Ecuador and Chile. The land area of Brazil represents 47.3% of South America's total land area. Suriname is the smallest country in South America. The country covers a total of 163,820 square kilometres. South America has a total of 12 countries and three dependencies:<br /><br />

                    The topography of South America has been described to resemble a bowl - it has large mountains around its periphery and an interior that is relatively flat. The continent is mostly made up of lowlands, highlands, and the Andes mountain range, which is the longest mountain range in the world. <br /><br />

                    The historic cultures of South America developed in connection with distinct regional landscapes. The three principal regions of early development were the Pacific coast, suited to fishing and trading societies; the major rivers of the Amazon basin, with abundant water, plant, and animal resources; and the Andes, where mountains provided security. <br /> <br />


                </p>
                <div className="aside">
                    The original inhabitants of South America are believed to have descended from the same Asiatic peoples who migrated to North America from Siberia during the most recent (Wisconsin) ice age. Few of these peoples, however, survived the arrival of Europeans after 1500, most succumbing to disease or mixing with people of European and (especially in Brazil) African origin. Some parts of the continent are now industrialized, with modern cities, but the people in rural areas still follow an agricultural way of life. The wealth of mineral products and renewable resources is considerable, yet economic development in most of the continent lags behind the more industrially advanced regions of the world. Nonetheless, concern has arisen about the rapidly increasing and often destructive exploitation of these resources.<br /><br />

                    South America has two major mountain systems of contrasting nature. Bordering the Pacific Ocean to the west, the geologically young cordilleras of the Andes extend along the entire continent from north to south. Stretching along the continent’s northern and eastern sides are the ancient Guiana and Brazilian highlands, which are much lower in elevation and slope gently to the west;The ranges of the Andes Mountains, about 5,500 miles (8,900 km) long and second only to the Himalayas in average elevation, constitute a formidable and continuous barrier, with many summits exceeding 20,000 feet (6,100 metres).

                    <br /><br />

                    <b>
                        Area	17,840,000 km2 (6,890,000 sq mi) (4th)<br />
                        Population	423,581,078 (2018; 5th) <br /><br />

                        <a target="blank" href="https://en.wikipedia.org/wiki/South_America">Read More..</a>
                        <br />
                        <a href="#extra-content">
                            <button className="see-more" onClick={seeMore}>{seeMoreBtnText}</button>
                        </a>
                        <div id="extra-content" ref={extraContent}>
                            <h2>Map</h2>
                            <img src={SAMap} alt="" className="map"/>
                        </div>    
                    </b>

                </div>
            </div>
        </>
    )
}
