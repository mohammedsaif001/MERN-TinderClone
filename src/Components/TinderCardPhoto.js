import React, { useState,useEffect } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import axios from '../axios'

function TinderCardPhoto() {
    const [people, setpeople] = useState([]);

    useEffect(() => {
      async function fetchData(){
          const req = await axios.get('/tinder/card')

          setpeople(req.data)
      }

      fetchData()
    
    }, [])
    

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
