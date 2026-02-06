//PROCESS SECTION RELATED
import React from "react";

//PROCESS
export default function Process() {
  //----vars:

  return (
    <div className="Process-Section">
      <div className="WRAPPER">
        <div className="content">
          <div className="Header">
            <h1 className="header-title">
              Our <span className="Colored">Process</span>
            </h1>
            <p className="header-sub">How We Bring Your Vision to Life</p>
          </div>
          <div className="process row">
            <div className="item col">
              <div className="img img1"></div>
              <p className="desc">
                We start with a free consultation to understand your goals,
                answer questions, and provide a clear, written estimate.
              </p>
            </div>
            {/*------*/}
            <div className="item pad-top col">
              <div className="img img2"></div>
              <p className="desc">
                Our team prepares every surface and safeguards your home or
                business to keep the workspace clean and protected.
              </p>
            </div>
            {/*------*/}
            <div className="item pad-top  col">
              <div className="img img3"></div>
              <p className="desc">
                From painting to remodeling, we complete each step with
                precision, skill, and attention to detail. We keep you informed
                every step of the way.
              </p>
            </div>
            {/*------*/}
            <div className="item col">
              <div className="img img4"></div>
              <p className="desc">
                We review everything with you, make adjustments if needed, and
                ensure the results meet your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
