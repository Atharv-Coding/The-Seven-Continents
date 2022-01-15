import React, { useState, useRef } from 'react'
import ATMap from '../images/map7.png'

export default function Antarctica() {
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
                <h1>Antarctica</h1>
                <p>Antarctica, the world’s southernmost and fifth largest continent. Its landmass is almost wholly covered by a vast ice sheet.Often described as a continent of superlatives, Antarctica is not only the world’s southernmost continent. It is also the world’s highest, driest, windiest, coldest, and iciest continent. Antarctica is about 5.5 million square miles (14.2 million square km) in size, and thick ice covers about 98 percent of the land. The continent is divided into East Antarctica (which is largely composed of a high ice-covered plateau) and West Antarctica (which is largely an ice sheet covering an archipelago of mountainous islands).<br /><br />

                    Lying almost concentrically around the South Pole, Antarctica’s name means “opposite to the Arctic.” It would be essentially circular except for the outflaring Antarctic Peninsula, which reaches toward the southern tip of South America (some 600 miles [970 km] away), and for two principal embayments, the Ross Sea and the Weddell Sea. These deep embayments of the Southern Ocean make the continent somewhat pear-shaped, dividing it into two unequal-sized parts. East Antarctica lies mostly in the east longitudes and is larger than West Antarctica, which lies wholly in the west longitudes. East and West Antarctica are separated by the approximately 2,100-mile- (about 3,400-km-) long Transantarctic Mountains.<br /><br />

                    The continent is a cold dry desert where access to water determines the abundance of life. While the terrestrial ecosystem contains more than a thousand known species of organisms, most of these are microorganisms. Maritime Antarctica—the islands and coasts—supports more life than inland Antarctica, and the surrounding ocean is as rich in life as the land is barren.<br /><br />

                    Several governments maintain permanent, staffed research stations on the continent. The number of people conducting and supporting scientific research and other work on the continent and its nearby islands varies from about 1,000 in winter to about 5,000 in the summer, giving it a population density between 70 and 350 inhabitants per million square kilometres (180 and 900 per million square miles) at these times. Many of the stations are staffed year-round, the winter-over personnel typically arriving from their home countries for a one-year assignment. An Orthodox church—Trinity Church, opened in 2004 at the Russian Bellingshausen Station—is manned year-round by one or two priests, who are similarly rotated every year.<br /><br />


                </p>
                    <div className="aside">

                        About 1,150 species of fungi have been recorded from Antarctica, of which about 750 are non-lichen-forming and 400 are lichen-forming. Some of these species are cryptoendoliths as a result of evolution under extreme conditions, and have significantly contributed to shaping the impressive rock formations of the McMurdo Dry Valleys and surrounding mountain ridges. The apparently simple morphology, scarcely differentiated structures, metabolic systems and enzymes still active at very low temperatures, and reduced life cycles shown by such fungi make them particularly suited to harsh environments such as the McMurdo Dry Valleys. In particular, their thick-walled and strongly melanised cells make them resistant to UV light. Those features can also be observed in algae and cyanobacteria, suggesting that these are adaptations to the conditions prevailing in Antarctica. This has led to speculation that, if life ever occurred on Mars, it might have looked similar to Antarctic fungi such as Cryomyces antarcticus, and Cryomyces minteri. Some of these fungi are also apparently endemic to Antarctica. Endemic Antarctic fungi also include certain dung-inhabiting species which have had to evolve in response to the double challenge of extreme cold while growing on dung, and the need to survive passage through the gut of warm-blooded animals.<br /><br />

                        About 300 million years ago Permian forests started to cover the continent, and tundra vegetation survived as late as 15 million years ago, but the climate of present-day Antarctica does not allow extensive vegetation to form. A combination of freezing temperatures, poor soil quality, lack of moisture, and lack of sunlight inhibit plant growth. As a result, the diversity of plant life is very low and limited in distribution. The flora of the continent largely consists of bryophytes. There are about 100 species of mosses and 25 species of liverworts, but only three species of flowering plants, all of which are found in the Antarctic Peninsula: Deschampsia antarctica (Antarctic hair grass), Colobanthus quitensis (Antarctic pearlwort) and the non-native Poa annua (annual bluegrass). Growth is restricted to a few weeks in the summer.<br /><br />

                        <b>
                            Area: 14,200,000 km 25,500,000 sq mi[1] <br />
                            Population: 1,000 to 5,000 (seasonal) <br /> <br />

                            <a target="blank" href="https://en.wikipedia.org/wiki/Antarctica">Read More..</a> <br />
                            <a href="#extra-content">
                                <button className="see-more" onClick={seeMore}>{seeMoreBtnText}</button>
                            </a>
                            <div id="extra-content" ref={extraContent}>
                                <h2>Map</h2>
                            <img src={ATMap} alt="" style={{
                                width: "300px",
                                height: "300px"
                            }} className="map"/>
                            </div>
                        </b>

                    </div>
            </div>
        </>
    )
}
