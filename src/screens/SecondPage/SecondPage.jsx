import React, { useEffect, useState } from "react";
import "./style1.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { ChromePicker } from 'react-color';

export const SecondPage = () => {
  const location = useLocation()
  const { imageData, logoImage } = location.state
  const [cardName, setCardName] = useState("Gap Rewards Mastercard");

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  useEffect(() => {
    console.log(imageData);
  },[])

  const [showPPicker, setShowPPicker] = useState(false);
  const [selectedPColor, setSelectedPColor] = useState('#00aeef');
  const [selectedSColor, setSelectedSColor] = useState('#d0d8de');
  const [showSPicker, setShowSPicker] = useState(false);

  const handlePColorChange = (color) => {
    setSelectedPColor(color.hex);
  };

  const closePColorPicker = () => {
    setShowPPicker(false);
  };

  const handleSColorChange = (color) => {
    setSelectedSColor(color.hex);
  };

  const closeSColorPicker = () => {
    setShowSPicker(false);
  };
  return (
    <div className="second-page">
      <div className="div">
        <footer className="footer">
          <div className="overlap-group">
            <img className="element-barclays-bank" alt="Element barclays bank" src="/img/2023-barclays-bank.png" />
          </div>
        </footer>
        <div className="nav-bar">
          <img className="logo" alt="Logo" src="/img/logo.png" />
        </div>
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
        <div className="text-wrapper-8">Mobile Preview:</div>
        <Link to="/lastpage" state={{
            imageData:imageData,
            logoImage:logoImage,
            selectedPColor: selectedPColor,
            selectedSColor: selectedSColor,
            cardName: cardName
          }}>
            <div className="overlap-20">
              <div className="text-wrapper-9">Next</div>
            </div>
        </Link>
        <Link to="/firstPage">
            <div className="overlap-21">
              <div className="text-wrapper-9">Previous</div>
            </div>
        </Link>

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
              <div className="overlap-14">
                <div className="text-wrapper-41">Log out</div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-42">Website Preview:</div>
        </div>


        <div className="group-4">
        <div className="primary-color" />
          <button style={{ backgroundColor: selectedPColor }} onClick={() => {
              setShowPPicker(true)
            }}  className="primary-color" />
            {showPPicker && (
              <div style={{ position: 'absolute', zIndex: 2 }}>
                <ChromePicker color={selectedPColor} onChange={handlePColorChange} />
                <div>
                  <button onClick={closePColorPicker}>Close Color Picker</button>
                </div>
              </div>
            )}
          <div className="secondary-color">Secondary color</div>
          <div className="primary-color-option">Primary color</div>
          <p className="secondary-color-2">
            <span className="text-wrapper-43">#</span>
            <span className="text-wrapper-44">{selectedSColor.slice(1)}</span>
          </p>
          <img className="primary-color-2" alt="Primary color" src="/img/primarycolorplaceholder.svg" />
          <button style={{ backgroundColor: selectedSColor }} onClick={() => {
              setShowSPicker(true)
            }}  className="secondary-color-3" />
            {showSPicker && (
              <div style={{ position: 'absolute', zIndex: 2 }}>
                <ChromePicker color={selectedSColor} onChange={handleSColorChange} />
                <div>
                  <button onClick={closeSColorPicker}>Close Color Picker</button>
                </div>
              </div>
            )}
          <img className="secondary-color-4" alt="Secondary color" src="/img/secondarycolorplaceholder.svg" />
          <p className="primary-color-value">
            <span className="text-wrapper-43">#</span>
            <span className="text-wrapper-44">{selectedPColor.slice(1)}</span>
          </p>
        </div>
        <div className="card-name-input">
        <input
              type="text"
              className="overlap-15"
              onChange={handleCardNameChange}
              placeholder="Add your card name"
            />
        <div className="text-wrapper-46">Card Name</div>
      </div>

        <div className="step">
          <div className="progresss-bars">
            <div className="text-wrapper-47">Logo & Card Art</div>
            <div className="text-wrapper-48">Theme</div>
            <div className="text-wrapper-49">Visualizer</div>
          </div>
          <div className="overlap-16">
            <div className="circle">
              <div className="element-wrapper">
                <img className="element" alt="Element" src="/img/3.png" />
              </div>
            </div>
            <div className="circle-2">
              <img className="line-8" alt="Line" src="/img/line-2.svg" />
              <div className="div-2">
                <div className="text-wrapper-50">2</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-17">
                <img className="line-9" alt="Line" src="/img/line-1.svg" />
                <div className="div-2" />
                <div className="text-wrapper-51">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
