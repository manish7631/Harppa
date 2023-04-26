import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div id="ContactTable_Grid">
        <div className="Contact_Grid_Left"></div>
        <div className="Contact_Container">
          <div className="Contact_Main">
            <div className="Contact_Box">
              <div className="icon">
                <PlaceIcon />
              </div>
              <div className="text">
                <h3 className="Contact_Heading">Address</h3>
                <p>
                  Computational Epigraphy Lab, <br />
                  The Institute of Mathematical Sciences(IMSc), <br />
                  4th Cross St, CIT Campus, Tharamani, Chennai, <br />
                  Tamil Nadu 600113
                </p>
              </div>
            </div>
            <div className="Contact_Box">
              <div className="icon">
                <CallIcon />
              </div>
              <div className="text">
                <h3 className="Contact_Heading">Phone</h3>
                <p>+91-44-22543 186</p>
              </div>
            </div>

            <div className="Contact_Box">
              <div className="icon">
                <EmailIcon />
              </div>

              <div className="text">
                <h3 className="Contact_Heading">Email</h3>

                <p>ashraf@imsc.res.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Contact_Grid_Right"></div>
      </div>

      <div className="Contact_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.599237295357!2d80.2470426!3d12.9942358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267891168f22b%3A0xe363efe1ea3c2826!2sThe%20Institute%20of%20Mathematical%20Sciences!5e0!3m2!1sen!2sin!4v1682482285120!5m2!1sen!2sin"
          className="Contact_map_map"
          style={{
            border: "0",
            borderRadius: "4px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
