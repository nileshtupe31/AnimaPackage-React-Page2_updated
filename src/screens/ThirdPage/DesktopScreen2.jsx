import React from 'react';

const DesktopScreen2 = ({ logoImage, selectedPColor, cardName, selectedSColor, imageData, onLogOut }) => {
  return (
    <div className="website-preview">
          <div className="overlap-3">
            <div className="rectangle-14" />
            <div className="rectangle-15" />
            <div className="group">
              <div className="overlap-group-2">
                <div
                  style={{ color: selectedSColor }}
                  className="text-wrapper-11">RECENT ACTIVITY</div>
                <div className="text-wrapper-12">View all transactions</div>
                <p className="p">You currently do not have any recent transactions</p>
              </div>
            </div>
            <div className="current-balance-card">
              <div className="text-wrapper-13">$25,000.00</div>
              <div className="text-wrapper-14">$25,000.00</div>
              <div className="text-wrapper-15">Available credit</div>
              <div className="overlap-4">
                <div className="text-wrapper-16">Credit line</div>
                <img className="info" alt="Info" src="/img/info-2.svg" />
              </div>
              <div className="text-wrapper-17">$0.00</div>
              <img className="line-2" alt="Line" src="/img/line-4.png" />
              <img className="line-3" alt="Line" src="/img/line-3.png" />
              <img className="line-4" alt="Line" src="/img/line-4.png" />
              <div
                style={{ color: selectedSColor }}
                className="text-wrapper-18">CURRENT BALANCE</div>
              <div className="text-wrapper-19">View balance details</div>
            </div>
            <div className="payment-status-card">
              <div className="overlap-5">
                <div style={{ background: selectedPColor }}
                  className="overlap-group-3">
                  <div className="text-wrapper-20">Payment Activity</div>
                </div>
                <div className="text-wrapper-21">Statement balance</div>
                <div
                  style={{ color: selectedSColor }}
                  className="text-wrapper-22">PAYMENT STATUS</div>
                <p className="text-wrapper-23">No payment is needed at this time</p>
                <img className="line-5" alt="Line" src="/img/line-8.png" />
                <img className="line-6" alt="Line" src="/img/line-9.png" />
                <img className="line-7" alt="Line" src="/img/line-10.png" />
                <div className="text-wrapper-24">Minimum payment due</div>
                <div className="text-wrapper-25">$0.00</div>
                <div className="text-wrapper-26">$0.00</div>
              </div>
            </div>
            <img className="info-2" alt="Info" src="/img/info-1.svg" />
            <img className="info-3" alt="Info" src="/img/info.svg" />
            <img className="add-circle-outline" alt="Add circle outline" src="/img/add-circle-outline.svg" />
            <img className="screenshot" alt="Screenshot" src="/img/screenshot-2023-08-19-at-9-14-1.png" />
          </div>
          <div className="overlap-6">
            <div className="overlap-7">
              <div className="text-wrapper-27">Lock card</div>
            </div>
            <div className="overlap-8">
              <img className="vector" alt="Vector" src="/img/vector-7.svg" />
              <div className="tab-bar-button">
                <div className="overlap-9">
                  <img className="vector-2" alt="Vector" src="/img/vector.svg" />
                  <div className="text-wrapper-28">View all accounts</div>
                </div>
              </div>
            </div>
            <div className="overlap-10">
              <div className="overlap-11">
                <div className="text-wrapper-29">Good afternoon,</div>
                <div className="gap-good-rewards">{cardName}&nbsp;&nbsp;..0412</div>
              </div>
              <div className="text-wrapper-30">Cookie byte</div>
            </div>
            <img className="header-logo" alt="Header logo"             
              src={logoImage}
            />
            <img
              className="GP-HP-flex-card"
              alt="Gp HP flex card"
              src={imageData}
            />
          </div>
          <div className="group-wrapper">
            <div className="group-2">
              <div className="profile-drop-down">
                <img className="vector-3" alt="Vector" src="/img/vector-6.svg" />
                <div className="text-wrapper-31">Your profile</div>
              </div>
              <div className="offers-drop-down">
                <div className="text-wrapper-32">Offers</div>
                <img className="vector-4" alt="Vector" src="/img/vector-5.svg" />
              </div>
              <div className="payments-drop-down">
                <div className="overlap-group-4">
                  <div className="text-wrapper-33">Payments</div>
                  <img className="vector-5" alt="Vector" src="/img/vector-4.svg" />
                </div>
              </div>
              <div className="services-drop-down">
                <img className="vector-6" alt="Vector" src="/img/vector-3.svg" />
                <div className="text-wrapper-34">Services</div>
              </div>
              <div className="activity-drop-down">
                <div className="activity-statements">Activity &amp; Statements</div>
                <img className="vector-7" alt="Vector" src="/img/vector-2.svg" />
              </div>
              <img className="vector-8" alt="Vector" src="/img/vector-1.svg" />
            </div>
          </div>
          <div style={{ background: selectedPColor }}
            className="overlap-12">
            <p className="text-wrapper-35">Last Login 08/18 at 2:25 PM ET via Web</p>
            <div className="group-3">
              <div className="navbar">
                <div className="text-wrapper-36">Accessibility</div>
                <div className="text-wrapper-37">Contact us</div>
                <div className="text-wrapper-38">New messages</div>
                <img className="search" alt="Search" src="/img/search.svg" />
                <div className="text-wrapper-39">Help</div>
              </div>
              <div className="overlap-13">
                <div className="text-wrapper-40">0</div>
              </div>
              <div className="overlap-14" onClick={onLogOut}>
                <div className="text-wrapper-41">Log out</div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default DesktopScreen2;

