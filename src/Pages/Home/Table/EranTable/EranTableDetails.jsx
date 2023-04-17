import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";

import "./EranTableHeader.css";
import CEL001 from "../../../../static/ivcgraphemes/CEL001.png";
import CEL002 from "../../../../static/ivcgraphemes/CEL002.png";
import CEL003 from "../../../../static/ivcgraphemes/CEL003.png";
import CEL004 from "../../../../static/ivcgraphemes/CEL004.png";
import { useDispatch, useSelector } from "react-redux";
import { EranImageDetailsGetFunction } from "../../../../redux/Application/action";
import { useParams } from "react-router-dom";
import Loader from "../../../Loader/Loader";

const EranTableDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { isLoading, EranImageDataDetails } = useSelector(
    (state) => state.ApplicationReducer
  );

  useEffect(() => {
    dispatch(EranImageDetailsGetFunction(params.EranId));
  }, []);

  let b;
  let len;
  let str1;
  let newArr;

  if (EranImageDataDetails.hasOwnProperty("links")) {
    b = EranImageDataDetails.links;

    len = b.length - 2;

    str1 = b.substring(2, len);

    newArr = str1.split("', '");
  }

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box className="EranTableDetails_Container">
          <Box className="EranTableDetails_Main">
            <h2 className="EranTableDetails_Heading">
              UID: {EranImageDataDetails ? EranImageDataDetails.id : null}
            </h2>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Sequence:</h3>
              <h3 className="EranTableDetails_Data_Image_Box">
                {newArr
                  ? newArr.length > 0
                    ? newArr.map((e, index) => {
                        try {
                          let n = e.split("/").pop();

                          let data1 = require(`../../../../static/ivcgraphemes/${n}`);
                          return <img className="DetailsImage" src={data1} />;
                        } catch (err) {
                          console.log("err", err);
                        }
                      })
                    : null
                  : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Sequence in number:</h3>

              <h3 className="Eran_Details_Right">
                {EranImageDataDetails ? EranImageDataDetails.seq_in_num : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Site:</h3>
              <h3 className="Eran_Details_Right">
                {EranImageDataDetails ? EranImageDataDetails.site : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">CISI-ID:</h3>
              <h3 className="Eran_Details_Right">
                {EranImageDataDetails ? EranImageDataDetails.cisi_id : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Wells ID:</h3>
              <h3 className="Eran_Details_Right">
                {EranImageDataDetails ? EranImageDataDetails.wells_id : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Artefact Type:</h3>
              <h3 className="Eran_Details_Right">
                {EranImageDataDetails
                  ? EranImageDataDetails.artefact_type
                  : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Material Type:</h3>
              <h3 className="Eran_Details_Right">
                {EranImageDataDetails
                  ? EranImageDataDetails.material_type
                  : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Field Symbol:</h3>
              <h3 className="Eran_Details_Right">
                {EranImageDataDetails
                  ? EranImageDataDetails.field_symbol
                  : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Excavation Number:</h3>
              <h3 className="Eran_Details_Right">
                {EranImageDataDetails
                  ? EranImageDataDetails.excavation_number
                  : null}
              </h3>
            </Box>
            <Box className="EranTableDetails_Data">
              <h3 className="Eran_Details_Left">Area:</h3>
              <h3 className="Eran_Details_Right">
                {EranImageDataDetails ? EranImageDataDetails.area : null}
              </h3>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default EranTableDetails;
