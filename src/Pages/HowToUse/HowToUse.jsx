import React from "react";
import "./HowToUse.css";

const HowToUse = () => {
  return (
    <div className="HowToUse_Container">
      <div className="HowToUse_Heading_Below">
        <p>
          Siddham is an epigraphic database. In the database, every text (the
          Inscription) is part of a physical item (the Object). Searching the
          database searches all of the informations on Objects and the
          Inscriptions that they contain.
        </p>
      </div>

      <div className="HowToUse_Accordion">
        <h2 className="HowToUseAccordion_Heading">Search bar</h2>

        <h3 className="HowToUseAccordion_SubHeading">
          Typing a term in the search bar and clicking the SEARCH button or
          pressing return searches the entire corpus of objects and
          inscriptions. Alternatively, clicking SHOW ALL allows all the
          inscriptions and objects in the database to be browsed.
        </h3>
      </div>
      <div className="HowToUse_Accordion">
        <h2 className="HowToUseAccordion_Heading">Search results</h2>

        <h4 className="HowToUseAccordion_SubHeading">
          Summaries of all the inscriptions and objects that match a search are
          displayed on the left side of the results page. Objects are displayed
          first with inscriptions below. Each summary provides a preview of the
          information stored about the object or inscription with further
          information accessed by clicking on the title. Filters on the right
          side of the results page refine the search results further. The filter
          name is displayed in capitals with the filter options displayed in
          lowercase below. Available options are determined by the search
          results. The filter options selected appear above the results and can
          be removed again with a click.
        </h4>
      </div>
      <div className="HowToUse_Accordion">
        <h2 className="HowToUseAccordion_Heading">Object page</h2>

        <h4 className="HowToUseAccordion_SubHeading">
          Clicking on an object’s title in the search results provides access to
          an object page that displays all the relevant stored information.
          Inscriptions on the object are summarised at the foot of the page,
          further information about the inscription can be accessed by clicking
          on the title. Images can be viewed in a larger format by clicking on
          them.
        </h4>
      </div>
      <div className="HowToUse_Accordion">
        <h2 className="HowToUseAccordion_Heading">Inscription page</h2>

        <h4 className="HowToUseAccordion_SubHeading">
          Clicking on an inscription’s title in the search results provides
          access to an inscription page that displays all information about the
          inscription. Images can be viewed in a larger format by clicking on
          them. The complete text of the inscription is displayed here in two
          forms: a diplomatic and a critical edition.
        </h4>
      </div>
    </div>
  );
};

export default HowToUse;
