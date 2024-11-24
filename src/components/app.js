import React, { useState } from "react";
import "../styles/app.scss";
import CallingScreen from "./callingscreen"; // Đảm bảo import đúng
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faStar,
  faClock,
  faUser,
  faListDots,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isCalling, setIsCalling] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null); // State để lưu chỉ số đã chọn

  const numbers = [
    { number: 1 },
    { number: 2, text: "ABC" },
    { number: 3, text: "DEF" },
    { number: 4, text: "GHI" },
    { number: 5, text: "JKL" },
    { number: 6, text: "MNO" },
    { number: 7, text: "PQRS" },
    { number: 8, text: "TUV" },
    { number: 9, text: "WXYZ" },
    { number: "*", text: "" },
    { number: 0, text: "+" },
    { number: "#" },
  ];

  const handleButtonClick = (number) => {
    setInputValue(inputValue + number);
    // setSelectedIndex(null); // Reset selected index khi nhấn
  };

  const handleEndCall = () => {
    setIsCalling(false);
    setInputValue(""); // Xóa số khi kết thúc cuộc gọi
  };

  const handleCall = () => {
    setIsCalling(true);
  };

  if (isCalling) {
    return <CallingScreen phoneNumber={inputValue} onEndCall={handleEndCall} />;
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="cm">
            <input
              className="input"
              placeholder=""
              value={inputValue}
              readOnly
            />
          </div>
        </div>
        <div className="main">
          <div className="numbers">
            <ul>
              {numbers.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleButtonClick(item.number)}
                  // style={{
                  //   backgroundColor:
                  //     selectedIndex === i ? "lightgray" : "transparent", // Đổi màu khi được nhấn
                  //   cursor: "pointer", // Thay đổi con trỏ chuột
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   border: "1px solid #d1d1d130",
                  //   borderRadius: "50%",
                  //   width: "80px",
                  //   height: "80px",
                  //   margin: "6px 12px",
                  //   transition: "background-color 0.3s",
                  // }}
                >
                  <div className="number">{item.number}</div>
                  <div className="text">{item.text}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="ll">
            <div className="icon-call" onClick={handleCall}>
              <div className="call">
                <FontAwesomeIcon icon={faPhone} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="icon-footer">
            <FontAwesomeIcon className="icon" icon={faStar} />
            <h3 className="vv">Favourites</h3>
          </div>
          <div className="icon-footer">
            <FontAwesomeIcon className="icon" icon={faClock} />
            <h3 className="vv">Recent</h3>
          </div>
          <div className="icon-footer">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <h3 className="vv">Contacts</h3>
          </div>
          <div className="icon-footer bb">
            <FontAwesomeIcon className="icon" icon={faListDots} />
            <h3 className="vv">Keypad</h3>
          </div>
          <div className="icon-footer">
            <FontAwesomeIcon className="icon" icon={faVoicemail} />
            <h3 className="vv">Voicemail</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;