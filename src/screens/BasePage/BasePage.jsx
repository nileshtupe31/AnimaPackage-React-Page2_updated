import React, { createRef, useEffect, useState } from "react";
import { useRef } from "react";
import { ChromePicker } from 'react-color';import { StyleRadio } from "../../components/StyleRadio";
import { useScreenshot } from 'use-react-screenshot'

import "./style.css";
import { Link } from "react-router-dom";
import { CreditCard } from "../../components/CreditCardComponent/CreditCard";


export const BasePage = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isPlastic, setIsPlastic] = useState(true);
  const [imageData, setImageData] = useState("")

  const [selectedColor, setSelectedColor] = useState('#00aeef');
  const [secondaryColor, setSecondaryColor] = useState('#d0d8de');
  const [showSecondaryPicker, setShowSecondaryPicker] = useState(false);

  const [logoImage, setLogoImage] = useState("img/partnerlogo.png");
  const [cardBackgroundImage, setCardBackgroundImage] = useState(null);
  const fileInputRef = useRef(null);
  const bgFileInputRef = useRef(null);

  const handleSecondaryColorChange = (color) => {
    setSecondaryColor(color.hex);
  };

  const toggleSecondaryPicker = () => {
    setShowSecondaryPicker(!showSecondaryPicker);
  };

  const closeSecondaryPicker = () => {
    setShowSecondaryPicker(false);
  };

  const handleImageUpload = (event) => {
    const uploadedLogo = URL.createObjectURL(event.target.files[0]);
    setLogoImage(uploadedLogo);
  };

  const handleBgImageUpload = (event) => {
    const uploadedImage = URL.createObjectURL(event.target.files[0]);
    setCardBackgroundImage(uploadedImage);
  };

  const gradientStyle = `linear-gradient(to bottom, ${selectedColor}, ${secondaryColor})`;
  const solidStyle = ``

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    setCardBackgroundImage(null); // Clear background image
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const closePicker = () => {
    setShowPicker(false);
  };
  return (
    <div className="base-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="skeleton" />
          <div className="steps-circle-things">
            <div className="overlap-2">
              <div className="circle">
                <div className="overlap-group-2">
                  <img className="line" alt="Line" src="/img/line-1.svg" />
                  <div className="ellipse-2" />
                  <div className="text-wrapper">1</div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <img className="img" alt="Line" src="/img/line-2.svg" />
                  <div className="ellipse-3" />
                  <div className="text-wrapper-2">2</div>
                </div>
              </div>
              <div className="circle-2">
                <div className="element-wrapper">
                  <img className="element" alt="Element" src="/img/3.png" />
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="element-barclays-bank-wrapper">
              <img className="element-barclays-bank" alt="Element barclays bank" src="/img/2023-barclays-bank.png" />
            </div>
          </footer>
          <div className="nav-bar">
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
          </div>
          <div className="cardart-design">
            <div className="primary-logo-header">Primary Logo</div>
            <div className="overlap-4" onClick={() => fileInputRef.current.click()}>
            <span className="upload-text">Upload Logo</span>
            <div className="upload-placeholder">
              <img className="image-upload" alt="Image upload" src="/img/imageupload.png" /> 
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none'}}/>
            </div>
            </div>
            { !isSolid && <div className="secondary-color">Secondary color</div>}
            <div className="overall-branding">Overall Branding</div>
            <div className="color-text">Background Color and Styles</div>
            <div className="primary-color-option">Primary color</div>
            <p className="primary-color-value">
              <span className="span">#</span>
              <span className="text-wrapper-3">{selectedColor.slice(1)}</span>
            </p>
            { !isSolid &&
              <p className="p">
                <span className="span">#</span>
                <span className="text-wrapper-3">{secondaryColor.slice(1)}</span>
              </p>
            }

            <div className="solid-option">Solid</div>
            <div className="gradient-option">Gradient</div>
            <div className="style-header">Style</div>
            <div className="primary-color" />
            <button style={{backgroundColor: selectedColor}} onClick={() => {
              setShowPicker(true)

            }}  className="primary-color" />
            {showPicker && (
              <div style={{ position: 'absolute', zIndex: 2 }}>
                <ChromePicker color={selectedColor} onChange={handleColorChange} />
                <div>
                  <button onClick={closePicker}>Close Color Picker</button>
                </div>
              </div>
            )}
            <img className="primary-color-2" alt="Primary color" src="/img/secondarycolorplaceholder.svg" />
            { !isSolid && 
            <>
              <div className="secondary-color-2" />
              <button
                style={{ backgroundColor: secondaryColor }}
                onClick={toggleSecondaryPicker}
                className="secondary-color-2"
              />
            </>
            }
            {showSecondaryPicker && (
              <div style={{ position: 'absolute', zIndex: 2 }}>
                <ChromePicker color={secondaryColor} onChange={handleSecondaryColorChange} />
                <div>
                  <button onClick={closeSecondaryPicker}>Close Color Picker</button>
                </div>
              </div>
            )}
            { !isSolid && <img className="secondary-color-3" alt="Secondary color" src="/img/secondarycolorplaceholder.svg" />}
            <div className="theme-text">Background Image</div>
            <div className="theme-upload-text">Upload Custom Image</div>
            <div className="theme-upload-button" onClick={() => bgFileInputRef.current.click()}>
              <img className="image-upload" alt="Image upload" src="/img/imageupload.png" />
              <span className="upload-text">Browse</span>
              <input ref={bgFileInputRef} type="file" accept="image/*" onChange={handleBgImageUpload} style={{ display: 'none' }} />
            </div>

            <div className="card-material-header">Card Material</div>
            <StyleRadio onClick={() => {
                setIsSolid(true)
              }} isSelected={isSolid} 
              className="set-solid-radio" 
            />
            <StyleRadio onClick={() => {
              setIsSolid(false)
            }} isSelected={!isSolid} className="set-gradient-radio" />
            <div className="plastic-option">Plastic</div>
            <div className="metal-option">Metal</div>
            <StyleRadio onClick={() => {
              setIsPlastic(true)
            }}
            isSelected={isPlastic}
            className="set-plastic-radio" />
            <StyleRadio onClick={() => {
              setIsPlastic(false)
            }}
            isSelected={!isPlastic} className="set-metal-radio" />
          </div>
          <div>
            <CreditCard 
              logoImage={logoImage}
              isSolid={isSolid}
              isPlastic={isPlastic}
              selectedColor={selectedColor}
              gradientStyle={gradientStyle}
              divClassName="div-wrapper"
              backgroundImage={cardBackgroundImage}
              capturedImage={(image) => {
                setImageData(image)
              }}
            />
          </div>
          <div className="text-wrapper-6">Step1</div>
          <div className="text-wrapper-7">Step2</div>
          <div className="text-wrapper-8">Step3</div>
          <div className="next-button">
          <Link to="/nextpage" state={{
            imageData:imageData
          }}>
            <div className="overlap-6">
              <div className="text-wrapper-9">Next</div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
