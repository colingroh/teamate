import mainLogo from "./logo.png";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageUploader from "react-images-upload";
import { Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, HashRouter
} from "react-router-dom";


export default class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }


  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>
            <img src={mainLogo} alt="" height={123} width={219} />
          </h1>
        </div>
        <h1>Last step! Choose your profile picture:</h1>
        <ImageUploader
          withPreview={true}
          withIcon={false}
          buttonText="Upload Image"
          withLabel={false}
          singleImage={true}
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
          maxFileSize={5242880}
        />
        <HashRouter><Link to="/Dashboard">Go to Dashboard</Link></HashRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UploadImage />, rootElement);
