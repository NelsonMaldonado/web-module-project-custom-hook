import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import App from "./components/App"
import Charts from "./components/Charts"
import Navbar from "./components/Navbar"

import "./styles.scss"

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
