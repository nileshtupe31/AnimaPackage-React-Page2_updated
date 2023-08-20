// Screen1.jsx
import React from 'react';

const Screen1 = ({onNavLinkClick}) => {
  return (
        <div className="iphone-s1">
          <img className="barclays-logo-s1" alt="Barclays logo" src="/img/barclayslogo.png" />
          <div className="password-s1">
            <div className="overlap-group-2-s1">
              <div className="text-wrapper-8-s1">••••••••••••</div>
            </div>
          </div>
          <div className="username-layout-s1">
            <div className="component-s1" />
            <div className="text-wrapper-9-s1">Username</div>
          </div>
          <div className="button-s1">
            <div className="next-wrapper-s1">
            <a onClick={() => {
              onNavLinkClick(1)
            }}  className="next-s1">LOG IN</a>
            </div>
          </div>
          <div className="iphone-x-or-newer-s1">
            <div className="right-side-s1">
              <img className="battery-s1" alt="Battery" src="/img/battery-7.png" />
              <img className="wifi-s1" alt="Wifi" src="/img/wifi.svg" />
              <img className="mobile-signal-s1" alt="Mobile signal" src="/img/mobile-signal.svg" />
            </div>
            <div className="left-side-s1" />
          </div>
          <div className="app-version-s1">
            <div className="overlap-3-s1">
              <div className="rectangle-s1" />
              <p className="app-version-OS-s1">APP VERSION - 1.0.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OS VERSION - 14</p>
            </div>
          </div>
        </div>
  );
};

export default Screen1;

<button style={{borderColor:'red'}} onClick={() => {
  onNavLinkClick(1)
}} className="next-wrapper-s1">
  <div className="next-s1">LOG IN</div>
</button>