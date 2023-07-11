import "./App.css";
import { useRef, useState, useEffect } from "react";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer";
import Features from "./components/Features";
import { MdCloudUpload } from "react-icons/md";
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState('')
  const [res, setRes] = useState('')
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData()
        data.append("name", file.name)
        data.append("file", file);

        let res = await uploadFile(data)
        setRes(res.path)
      }
    }
    getImage();
  }, [file])
  // console.log(file)
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <div className="box">
          <div>
            <h1>Simple FileShare App</h1>
            <p>Upload and Share the Download Link.</p>
          </div>
          <button className="learn">
            <a href="#features">Learn More</a>
          </button>
          <a href={res} className="file">{res}</a>
          <button onClick={() => onUploadClick()} className="upload-btn">
            <MdCloudUpload style={{ fontSize: "1.3rem" }} />
            Upload File
          </button>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
        </div>
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact" >
        <Footer />
      </div>
    </div>
  );
}

export default App;
