import React from "react";
import "./FourthGrid.css";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Gwalior from "../../../Image/Gwalior.png";
import Era from "../../../Image/Era.png";

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
              <CardActionArea>
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
              <CardActionArea>
                <CardContent>
                  <h3 className="FourthGrid_Section_Main_First_Card_Heading">
                    All Data
                  </h3>
                </CardContent>
                <Link to="erantablepage">
                  <CardMedia component="img" image={Era} alt="green iguana" />
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
        </div>
      </div>
    </div>
  );
};

export default FourthGrid;
