import React, { useState, useRef } from 'react'
import NAMap from '../images/map4.png'

export default function NorthAmerica() {
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
                <h1>North America</h1>
                <p>North America extends from the tiny Aleutian Islands in the northwest to the Isthmus of Panama in the south.

                    North America and South America are named after Italian navigator Amerigo Vespucci. Vespucci was the first European to suggest that the Americas were not part of the East Indies, but an entirely separate landmass. The portions of the landmass that widened out north of the Isthmus of Panama became known as North America.

                    Today, North America is home to the citizens of Canada, the United States, Greenland, Mexico, Belize, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, Panama, and the island countries and territories of the Caribbean Sea and western North Atlantic Ocean. <br /><br />

                    North America occupies the northern portion of the landmass generally referred to as the New World, the Western Hemisphere, the Americas, or simply America (which, in many countries is considered as a single continent with North America a subcontinent). North America is the third-largest continent by area, following Asia and Africa. North America's only land connection to South America is at the Isthmus of Darian/Isthmus of Panama. The continent is delimited on the southeast by most geographers at the Darién watershed along the Colombia-Panama border, placing almost all of Panama within North America. Alternatively, some geologists physiographically locate its southern limit at the Isthmus of Tehuantepec, Mexico, with Central America extending southeastward to South America from this point. The Caribbean islands, or West Indies, are considered part of North America. The continental coastline is long and irregular. The Gulf of Mexico is the largest body of water indenting the continent, followed by Hudson Bay. Others include the Gulf of Saint Lawrence and the Gulf of California.


                    Sonoran Desert in Arizona
                    Before the Central American isthmus formed, the region had been underwater. The islands of the West Indies delineate a submerged former land bridge, which had connected North and South America via what are now Florida and Venezuela.<br/><br/>


                </p>
                <div className="aside">
                    Geographically, the North American continent has many regions and subregions. These include cultural, economic, and geographic regions. Economic regions included those formed by trade blocs, such as the North American Trade Agreement bloc and Central American Trade Agreement. Linguistically and culturally, the continent could be divided into Anglo-America and Latin America. Anglo-America includes most of Northern America, Belize, and Caribbean islands with English-speaking populations (though sub-national entities, such as Louisiana and Quebec, have large Francophone populations; in Quebec, French is the sole official language).<br/><br/>

                    The southern part of the North American continent is composed of two regions. These are Central America and the Caribbean. The north of the continent maintains recognized regions as well. In contrast to the common definition of "North America", which encompasses the whole continent, the term "North America" is sometimes used to refer only to Mexico, Canada, the United States, and Greenland.<br /><br />

                    <b>
                        Area: 24,709,000 km2 (9,540,000 sq mi) (3rd) <br />
                        Population: 592,296,233 (2021; 4th)<br /><br />

                        <a target="blank" href="https://en.wikipedia.org/wiki/North_America">Read More..</a> <br />
                        <a href="#extra-content">
                            <button className="see-more" onClick={seeMore}>{seeMoreBtnText}</button>
                        </a>
                        <div id="extra-content" ref={extraContent}>
                            <h2>Map</h2>
                            <img src={NAMap} alt="" className="map" />
                        </div>
                    </b>

                </div>
                <br /> <br />
            </div>
        </>
    )
}
