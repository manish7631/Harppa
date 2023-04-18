import React from "react";
import "./About.css";
import { Card, CardMedia } from "@mui/material";

const About = () => {
  return (
    <div id="AboutTable_Grid">
      <div className="About_Grid_Left"></div>
      <div className="About_Container">
        <div className="About_Main">
          <div className="About_img_Card">
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
              src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Paella dish"
            />
          </div>

          <div
            style={{
              backgroundColor: "rgba(101,155,174,0.8)",
            }}
            className="About_img_Text"
          >
            <div className="para">
              The Siddham database is a resource for the study of inscriptions
              from South and Central Asia. It is the key output of the research
              project Beyond Boundaries: Religion, Region, Language and the
              State, a major multidisciplinary research project which aims to
              re-vision the history of Asia in one of its most significant
              periods. The project is based at the British Museum, British
              Library and the School of Oriental and African Studies, and funded
              by an ERC-Synergy grant for 2014-2020. The project focusses on the
              period of the Guptas (circa 320 to 550), a pivotal moment in the
              history of Asia, marked by an astonishing florescence in every
              field of endeavour. The Gupta kingdom and its networks had an
              enduring impact on India and a profound reach across Central and
              Southeast Asia in a host of cultural, religious and
              socio-political spheres. The project comprises an
              interdisciplinary team spanning linguistics, history, religious
              studies, geography, archaeology, numismatics, Indology, Sinology
              and GIS/IS technologies. This team will generate synergies to
              delineate and assess the significance of the Gupta Age and its
              pan-Asian impacts. The team has identified three cross-cutting
              themes that will allow us to offer exciting prospects for new
              insights into Asian civilisation.Sinology and GIS/IS technologies.
              This team will generate synergies to delineate and assess the
              significance of the Gupta Age and its pan-Asian impacts. The team
              has identified three cross-cutting themes that will allow us to
              offer exciting prospects for new insights into Asian civilisation.
            </div>

            <div>
              <button className="ReadMore">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="About_Grid_Right"></div>
    </div>
  );
};

export default About;
