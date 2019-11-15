import React from "react";
import styled from "styled-components"; 
import Navigation from "./Navigation";


function What() {
  return (
    <Wrapper>
     <Navigation />
      <section>
        <p>
        Helsingin kaupunkistrategiassa 2017–2021 tavoitteena on hiilineutraali Helsinki vuoteen 2035 mennessä. 
        Tällöin Helsingissä tapahtuva toiminta ei enää lämmitä ilmastoa. 
        Hiilineutraali Helsinki 2035 -toimenpideohjelma kertoo, kuinka Helsinki pääsee päästövähennyksissä oikealle uralle.
        </p>
        <p>
        Pyrimme järjestämään asiat niin, että ilmastoystävällinen elämä olisi helsinkiläisille ja Helsingissä vieraileville mahdollisimman helppoa. 
        Kaupunki pystyy tekemään paljon, mutta helsinkiläisten valinnat ratkaisevat. 
        Millaisessa kaupungissa sinä haluat elää? Hiilineutraali Helsinki syntyy yhteistyöllä ja sinua tarvitaan. 
        Tervetuloa mukaan!
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
min-height: 100vh;
background-color: #2A2A2A;
color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;

div {
  padding: 70px;
  font-family: Neon;
  font-size: 50px;  
  color: #5a5a5a;
}
`;

export default What;
