import React, { useState } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";

function TinderCardPhoto() {
    const [people, setpeople] = useState([
        {
            name: "Elon Musk",
            url: "https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://imageio.forbes.com/specials-images/imageserve/60d46873321b437f2cf2f788/0x0.jpg?format=jpg&width=1200&fit=bounds",
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction)
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {/* Traversing the peoples list below */}
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: 'url(' + person.url + ')' }}
                            className="card"
                        >

                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCardPhoto;
