import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./Navbar"
import TweetFeed from "./TweetFeed"
import RuleList from "./RuleList"

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="introduction"></div>

        <h1 className="ui header">
          <div className="content">
            Real Time Tweet Streamer
            <div className="sub header">Powered by Twitter data</div>
          </div>
        </h1>

        <div className="ui container">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<RuleList />} />
              <Route path="/rules" element={<RuleList />} />
              <Route path="/tweets" element={<TweetFeed />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App
