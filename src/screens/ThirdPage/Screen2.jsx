// Screen1.jsx
import React from 'react';

const Screen2 = ({onNavLinkClick}) => {
  return (
    <div  className="iphone-s2">
          <div className="iphone-x-or-newer-s2">
            <div className="right-side-s2">
              <img className="battery-s2" alt="Battery" src="/img/battery-7.png" />
              <img className="wifi-s2" alt="Wifi" src="/img/wifi.svg" />
              <img className="mobile-signal-s2" alt="Mobile signal" src="/img/mobile-signal.svg" />
            </div>
            <div className="left-side-s2" />
          </div>
          <div className="overlap-group-wrapper-s2">
            <div className="overlap-group-2-s2">
              <img className="footer-image-s2" alt="Footer image" src="/img/footerimage.png" />
              <div className="footer-rec-s2" />
            </div>
          </div>
          <div className="body-section-s2">
            <div className="overlap-3-s2">
              <div className="progress-dots-s2">
                <div className="blue-dot-s2" />
                <div className="black-dot-s2" />
              </div>
              <div className="text-wrapper-8-s2">Suggested for you</div>
              <a onClick={() => {onNavLinkClick(2)}} className="card-detailsrec-s2">
                <div className="overlap-group-3-s2">
                  <div className="text-wrapper-9-s2">$0.00</div>
                  <div className="element-2-s2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    $2500.00
                  </div>
                </div>
                <div className="text-wrapper-10-s2">...ending in 0942</div>
                <img className="line-2-s2" alt="Line" src="/img/line-1.svg" />
                <div className="text-wrapper-11-s2">Gap Mastercard</div>
                <div className="current-balance-s2">
                  Current balance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Available credit
                </div>
                <img
                  className="img-2-s2"
                  alt="Img"
                  src="/img/da8e653794fe3dfbb87e3ba5b7183df5e5f8c822422fcfb72170788447aec4b8-1.png"
                />
              </a>
              <div className="manage-alerts-s2">
                <div className="overlap-4-s2">
                  <div className="text-wrapper-12-s2">Manage Alerts</div>
                  <p className="p-s2">Set up the messages you need to stay on top of your account.</p>
                  <img className="notification-logo-s2" alt="Notification logo" src="/img/notificationlogo.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bar-2-s2">
            <img className="logo-on-nav-s2" alt="Logo on nav" src="/img/logoonnav.png" />
            <a onClick={() => {onNavLinkClick(0)}}>
              <img className="log-out-s2" alt="Log out" src="/img/logout.png" />
            </a>
            <div className="text-wrapper-13-s2">Your accounts</div>
          </div>
        </div>
  );
};

export default Screen2;
