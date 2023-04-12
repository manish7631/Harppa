import React from "react";
import "./SecondImage.css";

const SecondImage = () => {
  return (
    <div className="SecondImage_Container">
      <div className="SecondImage_Section">
        <div className="SecondImage_Section_Left">
          <p>
            The Siddham database is a resource for the study of inscriptions
            from South and Central Asia.
          </p>
        </div>
        <div className="SecondImage_Section_Right">
          <p>
            The project focuses on the period of the Guptas (circa 320 to 550),
            a pivotal moment in the history of Asia, marked by an astonishing
            florescence in every field of endeavour. The Gupta kingdom and its
            networks had an enduring impact on India and a profound reach across
            Central and Southeast Asia in a host of cultural, religious and
            socio-political spheres. The project is based at the British Museum,
            British Library and the School of Oriental and African Studies, and
            funded by an ERC-Synergy grant for 2014-2020.
          </p>
          <button className="SecondImage_Section_Right_Button">
            Read more about the project
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondImage;
