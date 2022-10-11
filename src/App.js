import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";

function App() {
  const [url, setUrl] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  const handleClick = () => {
    setWord(url);
  };

  const downloadImage = () => {
    saveAs(qrCode, "qrcode.png");
  };

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 pt-36  px2 h-screen">
      <div className="container mx-auto  bg-white rounded-md shadow p-5 ">
        <div className="md:grid md:grid-cols-2 gap-5 ">
          <div>
            <label className="font-semibold text-md">URL</label>
            <div className="md:grid md:grid-cols-2 ">
              <input
                type="url"
                className="w-full border-2 py-1 px-3 text-gray-700 rounden-sm"
                placeholder="https://www.google.com"
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              ></input>
              <button className="bg-blue-500" onClick={handleClick}>
                Generate
              </button>
            </div>

            <div className="md:grid md:grid-cols-4 mt-20">
              <label className="ml-20">Color</label>
              <input
                type="color"
                onChange={(e) => {
                  setBgColor(e.target.value.substring(1));
                }}
              ></input>

              <label className="ml-20">Size</label>
              <input
                className=" ml-3 rounded bg-cyan-200"
                type="range"
                min="200"
                max="600"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="bg-gray-100 flex  justify-center">
            <div>
              <img src={qrCode} alt="" />
              <button
                className="bg-blue-500  mt-5 w-full rounded-sm "
                download="QRCode"
                onClick={downloadImage}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
