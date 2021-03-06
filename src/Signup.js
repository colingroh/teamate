import mainLogo from "./logo.png";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Multiselect } from "multiselect-react-dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      classes: [
        "Advanced Writing",
        "Music Theory",
        "Physics",
        "Software Development",
        "Guitar",
        "Ecomics",
      ],
      interests: [
        "Music",
        "Traveling",
        "Basketball",
        "Comedy",
        "Reading",
        "Hiking",
        "Art",
        "Table Tennis",
      ],
      fullname: "",
      email: "",
      password: "",
      bio: "",
    };
    this.style = {
      chips: {
        background: "#103D3A"
      },
      multiselectContainer: {
        color: "#103D3A"
      }
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    alert("User registration has been saved!");
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
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
        <div className="col-12 d-md-flex">
          <div className="col-12 col-md-4 mt20 contents"></div>
          <div className="examples col-12 col-md-5">
            <div>
              <h1>Sign up for TeaMate today!</h1>
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="fullname">Full Name:</label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email Address:</label>
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder="Enter password"
                    id="password"
                  />
                </div>
                <div class="form-group">
                  <label for="major">Major:</label>
                  <input
                    type="text"
                    name="major"
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder="Enter your major"
                    id="major"
                  />
                </div>
                <div class="form-group" >
                  <label for="minor">Minor:</label>
                  <input
                    type="text"
                    name="minor"
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder="Enter your minor"
                    id="minor"
                    
                  />
                </div>
                
                What classes are you in?
                <Multiselect
                  name="selectedClasses"
                  options={this.state.classes}
                  isObject={false}
                  selectionLimit="4"
                  onChange={this.handleChange}
                  style={this.style}
                />
                Choose up to 5 interests:
                <Multiselect
                  options={this.state.interests}
                  isObject={false}
                  selectionLimit="5"
                  style={this.style}
                  onChange={this.handleChange}
                />
                Create a short bio <small> (140 characters or less) </small>
                <textarea 
                style={{marginBottom: 20}}
                  name="bio"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Tell us about yourself"
                  maxLength="140"
                />
               
                <input  style={{backgroundColor: "#103D3A", borderColor: "#103D3A"}}
                  type="submit"
                  value="Save"
                  class="btn btn-success"
                />&nbsp;&nbsp;
                 <HashRouter><Link to="/upload" className="btn btn-primary" style={{backgroundColor: "#103D3A", borderColor: "#103D3A"}} onClick={console.log("Upload time!")}>Upload Profile Picture</Link></HashRouter>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
