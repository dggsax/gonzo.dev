import React from "react";
import badge from "./Badge.module.css";
import headshot from "../assets/images/headshot.jpg";

const Badge: React.FC = () => {
  return (
    <div className={badge.microsoftBadge}>
      <div className={badge.top}>
        <div className={badge.holeAtTopOfBadge} />
        <div className={badge.picture}>
          <img alt="Daniel in Shinjuku, Japan near the legendary Piss Alley" src={headshot} className={badge.headshot}></img>
        </div>
      </div>
      <div className={badge.bottom}>
        <h1 className={badge.name}>Daniel</h1>

        <div className={badge.microsoftLogo}>
          <img alt="The Microsoft logo" itemProp="logo" className="c-image" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" role="presentation" aria-hidden="true" ></img>
        </div>
      </div>
    </div>
  );
};

export default Badge;
