//SERVICE SECTION RELATED
import React from "react";

//SERVICE
export default function Service() {
  //----vars:

  return (
    <div className="Service-Section" id="AboutUs">
      <div className="WRAPPER">
        <div className="content row">
          <div className="item col">
            <div className="line"></div>
            <div className="header">
              <div className="icon ic1"></div>
              <h3 className="title">Residential Painting</h3>
            </div>
            <p className="desc">
              Clean, vibrant finishes with durable quality. Interior walls,
              ceilings, cabinets, and exteriors—your home will feel refreshed
              and beautiful.
            </p>
          </div>
          {/*------*/}
          <div className="item col Colored">
            <div className="line Colored"></div>
            <div className="header Colored">
              <div className="icon ic2"></div>
              <h3 className="title">Commercial Painting</h3>
            </div>
            <p className="desc Colored">
              A fresh look means a better first impression. We provide
              professional painting for offices, storefronts, and
              facilities—done efficiently.
            </p>
          </div>
          {/*------*/}
          <div className="item col ">
            <div className="line "></div>
            <div className="header ">
              <div className="icon ic3"></div>
              <h3 className="title">Remodeling & Construction</h3>
            </div>
            <p className="desc ">
              More than paint—we handle remodeling, light construction, and
              exterior upgrades like decks, patios, and siding to transform your
              space inside and out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
