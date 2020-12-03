import mainLogo from "./logo.png";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageUploader from "react-images-upload";
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

        <ImageUploader style={{padding:0 }}
        
          withPreview={true}
          withIcon={false}
          buttonText="Upload Image"
          withLabel={false}
          singleImage={true}
          onChange={this.onDrop}
      
          imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
          maxFileSize={5242880}
        />
        <HashRouter><Link to="/Dashboard">All done? Go to Dashboard and start matching!</Link></HashRouter>
        <br></br>
        <HashRouter><Link to="/Signup">  Need to make changes? Head back to the registration form</Link></HashRouter>
        <br></br>
        <br></br>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UploadImage />, rootElement);
