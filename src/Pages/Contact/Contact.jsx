import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact_Container">
      <div className="Contact_Main">
        <div className="Contact_Box">
          <div className="icon">
            <PlaceIcon />
          </div>
          <div className="text">
            <h3 className="Contact_Heading">Address</h3>
            <p>
              MGD-1310, Eden Park Township. <br /> Siruseri, Chennai-603103
            </p>
          </div>
        </div>
        <div className="Contact_Box">
          <div className="icon">
            <CallIcon />
          </div>
          <div className="text">
            <h3 className="Contact_Heading">Phone</h3>
            <p>+91-8695-847-935</p>
          </div>
        </div>

        <div className="Contact_Box">
          <div className="icon">
            <EmailIcon />
          </div>

          <div className="text">
            <h3 className="Contact_Heading">Email</h3>

            <p>nextgenanalytics01@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
