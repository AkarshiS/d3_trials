import './App.css';
import createChart from '//src/chart.js';
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {useEffect, useRef, useState} from "react";


export default function App() {
  
    const faithful = d3.tsv("//assets/faithful.tsv", d3.autoType);
    const bandwidth = 20;
    const plot = Plot.plot({
      color: {scheme:"Turbo"},
      inset: 20,
      marks: [
        Plot.density(faithful, {x:"waiting", y:"eruptions", bandwidth}),
        Plot.dot(faithful, {x:"waiting", y:"eruptions"})
      ]})
      
  // faithful = FileAttachment("faithful.tsv").tsv({typed: true});
  // createChart(faithful);
  // Plot.density(faithful, {x: "waiting", y: "eruptions"}).plot({inset: 20});
}


