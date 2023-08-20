// Screen1.jsx
import React from 'react';

const Screen3 = ({ logoImage, selectedPColor, cardName, selectedSColor, imageData, onNavLinkClick }) => {
  return (
    <div className="iphone">
          <div className="iphone-x-or-newer">
            <div className="right-side">
              <img className="battery" alt="Battery" src="/img/battery-7.png" />
              <img className="wifi" alt="Wifi" src="/img/wifi.svg" />
              <img className="mobile-signal" alt="Mobile signal" src="/img/mobile-signal.svg" />
            </div>
            <div className="left-side" />
          </div>
          <img
            className="img"
            alt="Img"
            src={logoImage}
          />
           <a onClick={() => {onNavLinkClick(0)}}>
              <img className="log-out-s3" alt="Log out" src="/img/logout.png" />
            </a>
            <a onClick={() => {onNavLinkClick(1)}}>
              <img className="log-out-s4" />
            </a>
          <div className="rectangle menu-bar" />
          <div className="overlap">
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-32.png" />
          </div>
          <div className="rectangle-3 menu-bar" />
          <div className="rectangle-4 menu-bar" />
          <div className="rectangle-5 menu-bar" />
          <div className="overlap-2">
            <div
              style={{ background: selectedPColor }}
              className="rectangle-6" />
            <p className="text-wrapper">{cardName}...ending in 0942</p>
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="available-credit">
              Available
              credit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              $25,000.00
            </div>
            <div className="rectangle-9" />
            <p className="PAYMENT-STATUS-no">
              <span
                style={{ color: selectedSColor }}
                className="span">
                PAYMENT STATUS
              </span>
              <br />
              <span className="text-wrapper-2">No payment is needed at this time</span>
            </p>
            <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-26.svg" />
            <div className="text-wrapper-3">See all</div>
            <div
              style={{ color: selectedSColor }}
              className="text-wrapper-4">TRANSACTION ACTIVITY</div>
            <img
              className="img-2"
              alt="Img"
              src={imageData}
            />
            <p className="CURRENT-BALANCE">
              <span
                style={{ color: selectedSColor }}
                className="span">
                CURRENT BALANCE <br />
                <br />
              </span>
              <span className="text-wrapper-5">$0.00</span>
            </p>
            <div className="rectangle-11" />
            <img className="line" alt="Line" src="/img/line-3-1.svg" />
            <div className="rectangle-12" />
            <p className="minimum-amount">
              <span className="text-wrapper-6">
                <br />
              </span>
              <span className="text-wrapper-7">
                Minimum
                amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$0.00
              </span>
            </p>
            <div className="rectangle-13" />
          </div>
        </div>
  );
};

export default Screen3;
