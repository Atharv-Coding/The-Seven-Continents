import React, {useState, useRef} from 'react'
import asiaMap from '../images/map1.jpg'

export default function Asia(props) {
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
                <h1>Asia</h1>
                <p>Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It
                shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia
                with both Europe and Africa. <br/><br/>

                Asia is bounded on the east by the Pacific Ocean, on the south by the Indian Ocean, and on the north by the ArcticOcean. The border of Asia with Europe is a historical and cultural construct, as there is no clear physical and geographical separation between them. China and India alternated in being the largest economies in the world from 1 to 1800 CE. China was a major economic power and attracted many to the east, and for many the legendary wealth and prosperity of the ancient culture of India personified Asia, attracting European commerce, exploration and colonialism. There are total 48 countries in Asia.<br/><br/>
                
                Asia is the largest continent on Earth. It covers 9% of the Earth's total surface area (or 30% of its land area), and has the longest coastline, at 62,800 kilometres (39,022 mi). Asia is generally defined as comprising the eastern four-fifths of Eurasia.Asia has extremely diverse climate features. Climates range from arctic and subarctic in Siberia to tropical in southern India and Southeast Asia. It is moist across southeast sections, and dry across much of the interior. Some of the largest daily temperature ranges on Earth occur in western sections of Asia. The monsoon circulation dominates across southern and eastern sections, due to the presence of the Himalayas forcing the formation of a thermal low which draws in moisture during the summer. <br/><br/>
                

                </p>
                <div className="aside">
                    Asia is home to several language families and many language isolates. Most Asian countries have more than one language
                    that is natively spoken. For instance, according to Ethnologue, more than 600 languages are spoken in Indonesia, more
                    than 800 languages spoken in India, and more than 100 are spoken in the Philippines. <br/><br/>
                    
                    With growing Regional Tourism with domination of Chinese visitors, MasterCard has released Global Destination Cities
                    Index 2013 with 10 of 20 are dominated by Asia and Pacific Region Cities and also for the first time a city of a country
                    from Asia (Bangkok) set in the top-ranked with 15.98 international visitors.
                    
                    <br/><br/>
                    
                    <b>
                    Area: 44.58 million km² <br/>
                    Population: 456.07 crores (2018) <br/><br/>

                    <a target="blank" href="https://en.wikipedia.org/wiki/Asia">Read More..</a> <br />
                    <a href="#extra-content">
                        <button className="see-more" onClick={seeMore}>{seeMoreBtnText}</button>
                    </a>
                    <div id="extra-content" ref={extraContent}>
                        <h2>Map</h2>
                        <img src={asiaMap} alt="" className="asia-map"/>
                    </div>    
                    </b>
        
                </div>
            </div>
        </>
    )
}
