import React, { useState, useRef } from 'react'
import AUSMap from '../images/map5.png'

export default function Australia() {
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
                <h1>Australia</h1>
                <p>Australia, the smallest continent and one of the largest countries on Earth, lying between the Pacific and Indian oceans in the Southern Hemisphere. Australia’s capital is Canberra, located in the southeast between the larger and more important economic and cultural centres of Sydney and Melbourne. <br /><br />

                    The Australian mainland extends from west to east for nearly 2,500 miles (4,000 km) and from Cape York Peninsula in the northeast to Wilsons Promontory in the southeast for nearly 2,000 miles (3,200 km). To the south, Australian jurisdiction extends a further 310 miles (500 km) to the southern extremity of the island of Tasmania, and in the north it extends to the southern shores of Papua New Guinea. Australia is separated from Indonesia to the northwest by the Timor and Arafura seas, from Papua New Guinea to the northeast by the Coral Sea and the Torres Strait, from the Coral Sea Islands Territory by the Great Barrier Reef, from New Zealand to the southeast by the Tasman Sea, and from Antarctica in the far south by the Indian Ocean.<br /><br />

                    Australia is a highly developed country, with the world's twelfth-largest economy. It has a high-income economy, with the world's tenth-highest per capita income. Australia is a regional power, and has the world's thirteenth-highest military expenditure. Immigrants account for 30% of the country's population, the highest proportion among major Western nations. Having the eighth-highest Human Development Index, and the ninth-highest ranked democracy globally as of 2020, Australia ranks highly in quality of life, health, education, economic freedom, civil liberties, and political rights, with all its major cities faring exceptionally in global comparative livability surveys. It is a member of international groupings including the United Nations, the G20, the Commonwealth of Nations, ANZUS, AUKUS, Five Eyes, the Quad, the OECD, the WTO, APEC, the Pacific Islands Forum and the Pacific Community. <br /><br />


                </p>
                <div className="aside">
                    Australia's climate is governed mostly by its size and by the hot, sinking air of the subtropical high pressure belt (subtropical ridge). This moves north-west and north-east with the seasons. The climate is variable, with frequent droughts lasting several seasons, thought to be caused in part by the El Niño-Southern Oscillation. Australia has a wide variety of climates due to its large geographical size. The largest part of Australia is desert or semi-arid. Only the south-east and south-west corners have a temperate climate and moderately fertile soil. The northern part of the country has a tropical climate, varying between grasslands and desert. Australia holds many heat-related records: the continent has the hottest extended region year-round, the areas with the hottest summer climate, and the highest sunshine duration. <br /><br />

                    Because Australia is a medium-sized continent, separated from polar regions by the Southern Ocean, it is not subject to movements of frigid polar air during winter, of the type that sweep over the continents in the northern hemisphere during their winter. Consequently, Australia's winter is relatively mild, with less contrast between summer and winter temperatures than in the northern continents–though the transition is more dramatically marked in alpine regions of Australia and places of substantial elevation. Seasonal highs and lows can still be considerable. Temperatures have ranged from above 53 °C (127 °F) to −23.0 °C (−9.4 °F). Minimum temperatures are moderated. <br /><br />

                    <b>
                        Capital: Canberra 35°18'29″S  149°07'28″E <br />
                        Total Area: 7,692,024 km2 (2,969,907 sq mi) (6th) <br />
                        Largest city: Sydney <br /> <br />

                        <a target="blank" href="https://en.wikipedia.org/wiki/Australia">Read More..</a> <br />
                        <a href="#extra-content">
                            <button className="see-more" onClick={seeMore}>{seeMoreBtnText}</button>
                        </a>
                        <div id="extra-content" ref={extraContent}>
                            <h2>Map</h2>
                            <img src={AUSMap} alt="" className="map" />
                        </div>
                    </b>

                </div>
            </div>
        </>
    )
}
