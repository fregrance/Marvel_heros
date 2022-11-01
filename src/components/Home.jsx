import React from "react";
import "./css/style.css";
import Button from "@mui/material/Button";
const Home = () => {
  return (
    <>
      <section>
        <div className="backgroundimage">
          <div className="bgcover"></div>
          <div className="btnperfect">
            <Button href="/QA" variant="contained" size="large" color="warning">
              Get Start
            </Button>
            <h1>Find My Hero! Casting Workbook</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
