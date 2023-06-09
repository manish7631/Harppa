import React from "react";
import "./FourthGrid.css";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Gwalior from "../../../Image/Gwalior.png";
import Era from "../../../Image/Era.png";
import Risthal from "../../../Image/Risthal.png";
import Bihar from "../../../Image/Bihar.png";
import Budha from "../../../Image/Budha.png";
import Allabhad from "../../../Image/Allabhad.png";
import ImageSlider from "./ImageSlider";

const FourthGrid = () => {
  return (
    <div className="FourthGrid_Container">
      <h1 className="FourthGrid_Heading">Featured Objects</h1>
      <div className="FourthGrid_Section">
        <div className="FourthGrid_Main">
          <div>
            <Card
              sx={{
                backgroundColor: "transparent",
              }}
              className="FourthGrid_Section_Main_First_Card"
            >
              <CardActionArea
                sx={{
                  cursor: "auto",
                }}
              >
                <CardContent>
                  <h3 className="FourthGrid_Section_Main_First_Card_Heading">
                    {" "}
                    Signary
                  </h3>
                </CardContent>
                <Link to={`/gawaliortablepage`}>
                  {" "}
                  <CardMedia
                    component="img"
                    image={Gwalior}
                    alt="green iguana"
                    className="FourthGrid_Section_Main_First_Card_Image"
                  />
                </Link>
                <CardContent>
                  <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                    A stone slab with the left edge damaged. Part of its bottom
                    side has also been cut away and lost after it was found but
                    before it was delivered to the Calcutta museum, possibly…
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{
                backgroundColor: "transparent",
              }}
              className="FourthGrid_Section_Main_First_Card"
            >
              <CardActionArea
                sx={{
                  cursor: "auto",
                }}
              >
                <CardContent>
                  <h3 className="FourthGrid_Section_Main_First_Card_Heading">
                    All Data
                  </h3>
                </CardContent>
                <Link to="erantablepage">
                  <CardMedia
                    component="img"
                    image={Era}
                    alt="green iguana"
                    className="FourthGrid_Section_Main_First_Card_Image"
                  />
                </Link>

                <CardContent>
                  <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                    A colossal image of Varāha, facing east, in the portico of a
                    ruined temple at the south end of the group of temples about
                    800 m to the west of the village.
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          {/* ------------------Search By ------------------- */}
          <div>
            <h3 className="FourthGrid_Section_Main_Second_Card_Heading">
              Search By Site
            </h3>
            {/* <div className="FourthGrid_Section_Main_Second_Card">
              <Card
                sx={{
                  backgroundColor: "transparent",
                }}
                className="FourthGrid_Section_Main_Second_Card_Card"
              >
                <CardActionArea
                  sx={{
                    cursor: "auto",
                  }}
                >
                  <CardContent>
                    <h3 className="FourthGrid_Section_Main_First_Card_Card_Heading">
                      Banawali
                    </h3>
                  </CardContent>
                  <Link to="/bnawalitablepage">
                    <CardMedia
                      component="img"
                      image={Risthal}
                      alt="green iguana"
                      className="FourthGrid_Section_Main_Second_Card_Image"
                    />
                  </Link>

                  <CardContent>
                    <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                      In good condition except for a bit broken off the top edge
                      to the right of the centre and some scattered chipping.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                sx={{
                  backgroundColor: "transparent",
                }}
                className="FourthGrid_Section_Main_Second_Card_Card"
              >
                <CardActionArea
                  sx={{
                    cursor: "auto",
                  }}
                >
                  <CardContent>
                    <h3 className="FourthGrid_Section_Main_First_Card_Card_Heading">
                      Bhirrana
                    </h3>
                  </CardContent>
                  <Link to="/bhirranatablepage">
                    <CardMedia
                      component="img"
                      image={Bihar}
                      alt="green iguana"
                      className="FourthGrid_Section_Main_Second_Card_Image"
                    />
                  </Link>
                  <CardContent>
                    <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                      No detailed description of the column is available; the
                      information here has been gleaned from Plate XVII in
                      #Cunningham_1871a. The bottom of the pillar is broken off.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                sx={{
                  backgroundColor: "transparent",
                }}
                className="FourthGrid_Section_Main_Second_Card_Card"
              >
                <CardActionArea
                  sx={{
                    cursor: "auto",
                  }}
                >
                  <CardContent>
                    <h3 className="FourthGrid_Section_Main_First_Card_Card_Heading">
                      Chanhujo-daro
                    </h3>
                  </CardContent>
                  <Link to="/chanhujotablepage">
                    <CardMedia
                      component="img"
                      image={Budha}
                      alt="green iguana"
                      className="FourthGrid_Section_Main_Second_Card_Image"
                    />
                  </Link>
                  <CardContent>
                    <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                      An image of a seated Buddha, "very perfect … with a
                      headdress like that now worn by the Abbots in Bhutân. It
                      is a plain cap, fitting close to the head, with long
                      lappets on…
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card> */}

            {/* <Card
                sx={{
                  backgroundColor: "transparent",
                }}
                className="FourthGrid_Section_Main_Second_Card_Card"
              >
                <CardActionArea>
                  <CardContent>
                    <h3 className="FourthGrid_Section_Main_First_Card_Card_Heading">
                      Allahabad Pillar
                    </h3>
                  </CardContent>
                  <CardMedia
                    component="img"
                    className="FourthGrid_Section_Main_Second_Card_Image"
                    image={Allabhad}
                    alt="green iguana"
                  />
                  <CardContent>
                    <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                      A round, monolithic sandstone column. Beside
                      Samudragupta's praśasti, it also bears two inscriptions by
                      Aśoka as well as a number of mediaeval inscriptions, some
                      of which are…
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card> */}
            {/* </div> */}
            <ImageSlider slides={siteSlides} />
          </div>

          {/* ------------------Search By Artifac Type------------------- */}
          <div>
            <h3 className="FourthGrid_Section_Main_Second_Card_Heading">
              Search By Artifact Type
            </h3>
            {/* <div className="FourthGrid_Section_Main_Second_Card">
              <Card
                sx={{
                  backgroundColor: "transparent",
                }}
                className="FourthGrid_Section_Main_Second_Card_Card"
              >
                <CardActionArea
                  sx={{
                    cursor: "auto",
                  }}
                >
                  <CardContent>
                    <h3 className="FourthGrid_Section_Main_First_Card_Card_Heading">
                      BNGL
                    </h3>
                  </CardContent>
                  <Link to="/bngltablepage">
                    <CardMedia
                      component="img"
                      className="FourthGrid_Section_Main_Second_Card_Image"
                      image={Risthal}
                      alt="green iguana"
                    />
                  </Link>
                  <CardContent>
                    <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                      In good condition except for a bit broken off the top edge
                      to the right of the centre and some scattered chipping.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                sx={{
                  backgroundColor: "transparent",
                }}
                className="FourthGrid_Section_Main_Second_Card_Card"
              >
                <CardActionArea
                  sx={{
                    cursor: "auto",
                  }}
                >
                  <CardContent>
                    <h3 className="FourthGrid_Section_Main_First_Card_Card_Heading">
                      IMPL
                    </h3>
                  </CardContent>
                 <Link to="/bhirranatablepage">  
                  <CardMedia
                    component="img"
                    className="FourthGrid_Section_Main_Second_Card_Image"
                    image={Bihar}
                    alt="green iguana"
                  />
                   </Link> 
                  <CardContent>
                    <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                      No detailed description of the column is available; the
                      information here has been gleaned from Plate XVII in
                      #Cunningham_1871a. The bottom of the pillar is broken off.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                sx={{
                  backgroundColor: "transparent",
                }}
                className="FourthGrid_Section_Main_Second_Card_Card"
              >
                <CardActionArea
                  sx={{
                    cursor: "auto",
                  }}
                >
                  <CardContent>
                    <h3 className="FourthGrid_Section_Main_First_Card_Card_Heading">
                      MISC
                    </h3>
                  </CardContent>
                <Link to="/chanhujotablepage"> 
                  <CardMedia
                    component="img"
                    className="FourthGrid_Section_Main_Second_Card_Image"
                    image={Budha}
                    alt="green iguana"
                  />
                 </Link>  
                  <CardContent>
                    <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                      An image of a seated Buddha, "very perfect … with a
                      headdress like that now worn by the Abbots in Bhutân. It
                      is a plain cap, fitting close to the head, with long
                      lappets on…
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div> */}
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthGrid;

const slides = [
  {
    title: "BANGLE",
    url: Risthal,
    link: "/bngltablepage",
    content:
      "In good condition except for a bit broken off the top edge to the right of the centre and some scattered chipping.",
  },
  {
    title: "IMPL",
    url: Bihar,
    link: "/impltablepage",
    content:
      " No detailed description of the column is available; theinformation here has been gleaned from Plate XVII in #Cunningham_1871a. The bottom of the pillar is broken off.",
  },
  {
    title: "MISCELLANEOUS",
    url: Budha,
    link: "/misctablepage",
    content:
      "An image of a seated Buddha, very perfect … with a headdress like that now worn by the Abbots in Bhutân. It is a plain cap, fitting close to the head, with long lappets on…",
  },
  {
    title: "POTTERY",
    url: Risthal,
    link: "/potterytablepage",
    content:
      "In good condition except for a bit broken off the top edge to the right of the centre and some scattered chipping.",
  },
  {
    title: "ROD",
    url: Bihar,
    link: "/rodtablepage",
    content:
      " No detailed description of the column is available; theinformation here has been gleaned from Plate XVII in #Cunningham_1871a. The bottom of the pillar is broken off.",
  },
  {
    title: "SEAL",
    url: Budha,
    link: "/sealtablepage",
    content:
      "An image of a seated Buddha, very perfect … with a headdress like that now worn by the Abbots in Bhutân. It is a plain cap, fitting close to the head, with long lappets on…",
  },
  {
    title: "TABLET",
    url: Risthal,
    link: "/tablettablepage",
    content:
      "In good condition except for a bit broken off the top edge to the right of the centre and some scattered chipping.",
  },
  {
    title: "TAG",
    url: Bihar,
    link: "/tagtablepage",
    content:
      " No detailed description of the column is available; theinformation here has been gleaned from Plate XVII in #Cunningham_1871a. The bottom of the pillar is broken off.",
  },
];

const siteSlides = [
  {
    title: "Banawali",
    url: Risthal,
    link: "/bnawalitablepage",
    content:
      "In good condition except for a bit broken off the top edge to the right of the centre and some scattered chipping.",
  },
  {
    title: "Bhirrana",
    url: Bihar,
    link: "/bhirranatablepage",
    content:
      " No detailed description of the column is available; theinformation here has been gleaned from Plate XVII in #Cunningham_1871a. The bottom of the pillar is broken off.",
  },
  {
    title: "Chanhujo-daro",
    url: Budha,
    link: "/chanhujotablepage",
    content:
      "An image of a seated Buddha, very perfect … with a headdress like that now worn by the Abbots in Bhutân. It is a plain cap, fitting close to the head, with long lappets on…",
  },
  {
    title: "Dholavira",
    url: Risthal,
    link: "/dholaviratablepage",
    content:
      "In good condition except for a bit broken off the top edge to the right of the centre and some scattered chipping.",
  },
  {
    title: "Farmana",
    url: Bihar,
    link: "/farmanatablepage",
    content:
      " No detailed description of the column is available; theinformation here has been gleaned from Plate XVII in #Cunningham_1871a. The bottom of the pillar is broken off.",
  },
  {
    title: "Harappa",
    url: Budha,
    link: "/harappatablepage",
    content:
      "An image of a seated Buddha, very perfect … with a headdress like that now worn by the Abbots in Bhutân. It is a plain cap, fitting close to the head, with long lappets on…",
  },
  {
    title: "Kalibangan",
    url: Risthal,
    link: "/kalibangantablepage",
    content:
      "In good condition except for a bit broken off the top edge to the right of the centre and some scattered chipping.",
  },
  {
    title: "Kanmer",
    url: Bihar,
    link: "/kanmertablepage",
    content:
      " No detailed description of the column is available; theinformation here has been gleaned from Plate XVII in #Cunningham_1871a. The bottom of the pillar is broken off.",
  },
  {
    title: "Khirsara",
    url: Budha,
    link: "/khirsaratablepage",
    content:
      "An image of a seated Buddha, very perfect … with a headdress like that now worn by the Abbots in Bhutân. It is a plain cap, fitting close to the head, with long lappets on…",
  },
  {
    title: "Lothal",
    url: Risthal,
    link: "/lothaltablepage",
    content:
      "In good condition except for a bit broken off the top edge to the right of the centre and some scattered chipping.",
  },
  {
    title: "Mohenho-daro",
    url: Bihar,
    link: "/mohenjodarotablepage",
    content:
      " No detailed description of the column is available; theinformation here has been gleaned from Plate XVII in #Cunningham_1871a. The bottom of the pillar is broken off.",
  },
  {
    title: "Rakhigarhi",
    url: Budha,
    link: "/rakhigarhitablepage",
    content:
      "An image of a seated Buddha, very perfect … with a headdress like that now worn by the Abbots in Bhutân. It is a plain cap, fitting close to the head, with long lappets on…",
  },
];
