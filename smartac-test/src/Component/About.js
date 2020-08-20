import React, { Component } from "react";
import "./About.css";
class About extends Component {


  render() {
    return (
      <div className="About">
        <div className="texasSeal">
          <img
            id="texas-seal"
            src="/assets/tx-seal.png"
            alt="texas seal"
          ></img>
          <h2>About Texas</h2>
        </div>
        <div className="flagDiv">
        <div className="imageDiv">
        <img
            id="texas-flag"
            src="/assets/tx-flag.png"
            alt="texas flag"
          ></img>
        </div>
          <p>
            Texas is a state in the South Central Region of the United States.
            It is the second largest U.S. state by both area (after Alaska) and
            population (after California). Texas shares borders with the states
            of Louisiana to the east, Arkansas to the northeast, Oklahoma to the
            north, New Mexico to the west, and the Mexican states of Chihuahua,
            Coahuila, Nuevo León, and Tamaulipas to the southwest, and has a
            coastline with the Gulf of Mexico to the southeast.<br></br>
            <br></br>
            Houston is the most populous city in Texas and the fourth largest in
            the U.S., while San Antonio is the second-most populous in the state
            and seventh largest in the U.S. Dallas–Fort Worth and Greater
            Houston are the fourth and fifth largest metropolitan statistical
            areas in the country, respectively. Other major cities include
            Austin, the second-most populous state capital in the U.S., and El
            Paso. Texas is nicknamed the "Lone Star State" for its former status
            as an independent republic, and as a reminder of the state's
            struggle for independence from Mexico. The "Lone Star" can be found
            on the Texas state flag and on the Texas state seal.[11] The origin
            of Texas's name is from the word táyshaʼ, which means "friends" in
            the Caddo language.[12]
          </p>
        </div>
        <div className="mapDiv">
          <p>
            Due to its size and geologic features such as the Balcones Fault,
            Texas contains diverse landscapes common to both the U.S. Southern
            and the Southwestern regions.[13] Although Texas is popularly
            associated with the U.S. southwestern deserts, less than ten percent
            of Texas's land area is desert.[14] Most of the population centers
            are in areas of former prairies, grasslands, forests, and the
            coastline. Traveling from east to west, one can observe terrain that
            ranges from coastal swamps and piney woods, to rolling plains and
            rugged hills, and finally the desert and mountains of the Big Bend.
            <br></br>
            <br></br>
            The term "six flags over Texas"[note 1] refers to several nations
            that have ruled over the territory. Spain was the first European
            country to claim and control the area of Texas. France held a
            short-lived colony. Mexico controlled the territory until 1836 when
            Texas won its independence, becoming an independent republic. In
            1845,[15] Texas joined the union as the 28th state. The state's
            annexation set off a chain of events that led to the
            Mexican–American War in 1846. A slave state before the American
            Civil War, Texas declared its secession from the U.S. in early 1861,
            and officially joined the Confederate States of America on March 2
            of the same year. After the Civil War and the restoration of its
            representation in the federal government, Texas entered a long
            period of economic stagnation.
          </p>
          <div className="imageDiv">
          <img
            id="texas-map"
            src="/assets/tx-map.jpg"
            alt="texas map"
          ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
