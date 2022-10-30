import { Component } from "react";

import News from "./components/News";

import Navbar from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />

            <Routes>
              <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} key="general" country="in" category="general" />} />
              <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} key="business" country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} key="entertainment" country="in" category="entertainment" />} />
              <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} key="health" country="in" category="health" />} />
              <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} key="science" country="in" category="science" />} />
              <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} key="sports" country="in" category="sports" />} />
              <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={9} key="technology" country="in" category="technology" />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
