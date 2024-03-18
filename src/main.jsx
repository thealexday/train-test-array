import React from "react";
import { StrictMode } from "react";
import RectDom from 'react-dom/client'
import App from "./App";

const root = document.querySelector('#root');
RectDom.createRoot(root).render(<StrictMode><App/></StrictMode>)