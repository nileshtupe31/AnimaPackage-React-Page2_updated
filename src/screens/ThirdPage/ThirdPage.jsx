import React, { useEffect, useState } from "react";
import "./style2.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Screen3 from "./Screen3";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import DesktopScreen1 from "./desktopScreen1";
import DesktopScreen2 from "./DesktopScreen2";
export const ThirdPage = () => {
  const location = useLocation()
  const { imageData, logoImage } = location.state
  const [selectedPColor, setSelectedPColor] = useState('#00aeef');
  const [cardName, setCardName] = useState("Gap Rewards Mastercard");
  const [selectedSColor, setSelectedSColor] = useState('#d0d8de');


  useEffect(() => {
    console.log(imageData);
  },[])
  return (
    <div className="third-page">
      <div className="div">
        <footer className="footer">
          <div className="overlap-group">
            <img className="element-barclays-bank" alt="Element barclays bank" src="/img/2023-barclays-bank.png" />
          </div>
        </footer>
        <div className="nav-bar">
          <img className="logo" alt="Logo" src="/img/logo.png" />
        </div>
        {/* <Screen3
          logoImage={logoImage}
          selectedPColor={selectedPColor}
          cardName={cardName}
          selectedSColor={selectedSColor}
          imageData={imageData}
        /> */}
        {/* <Screen1/> */}
        <Screen2/>
        <DesktopScreen2
          logoImage={logoImage}
          selectedPColor={selectedPColor}
          cardName={cardName}
          selectedSColor={selectedSColor}
          imageData={imageData}
        />
        {/* <DesktopScreen1/> */}
        <Link to="/nextpage" state={{
            imageData:imageData,
            logoImage:logoImage
          }}>
            <div className="overlap-21">
              <div className="text-wrapper-9">Previous</div>
            </div>
        </Link>

        <div className="step">
          <div className="progresss-bars">
            <div className="text-wrapper-47">Step1</div>
            <div className="text-wrapper-48">Step2</div>
            <div className="text-wrapper-49">Step3</div>
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
