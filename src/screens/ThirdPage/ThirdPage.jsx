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
  const { imageData, logoImage, selectedPColor, selectedSColor,cardName } = location.state
  const [iPhoneScreen, setIPhoneScreen] = useState(0)
  const [desktopScreen, setDesktopScreen] = useState(0)



  useEffect(() => {
    console.log(imageData);
  },[])

  const navigateToIphoneScreen = (index) => {
    setIPhoneScreen(index)
  }

  const navigateToDesktop = (index) => {
    setDesktopScreen(index)
  }

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
        {iPhoneScreen == 0 && <Screen1 
          logoImage={logoImage}
          selectedPColor={selectedPColor}
          cardName={cardName}
          selectedSColor={selectedSColor}
          imageData={imageData}
          onNavLinkClick={navigateToIphoneScreen} 
        />}
        {iPhoneScreen == 1 && <Screen2
          logoImage={logoImage}
          selectedPColor={selectedPColor}
          cardName={cardName}
          selectedSColor={selectedSColor}
          imageData={imageData}
          onNavLinkClick={navigateToIphoneScreen} 
        />}
        {iPhoneScreen == 2 && <Screen3
          logoImage={logoImage}
          selectedPColor={selectedPColor}
          cardName={cardName}
          selectedSColor={selectedSColor}
          imageData={imageData}
          onNavLinkClick={navigateToIphoneScreen}
        />}
        {desktopScreen == 0 && <DesktopScreen1 
          onNavLinkClick={navigateToDesktop}/>}
        {desktopScreen == 1 && <DesktopScreen2 
          logoImage={logoImage}
          selectedPColor={selectedPColor}
          cardName={cardName}
          selectedSColor={selectedSColor}
          imageData={imageData}
          onNavLinkClick={navigateToDesktop}
        />}

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
              <div className="overlap-group-wrapper-2">
                <div className="overlap-3-pb">
                  <div className="ellipse-3" />
                  <div className="text-wrapper-2-pb">3</div>
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
