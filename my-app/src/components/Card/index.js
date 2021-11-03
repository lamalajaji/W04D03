import "./style.css";
import React from 'react'
import { useParams } from "react-router";



export default function Card() {
    const cities = [
      {
        id: 1,
        name: "Riyadh",
        img: (
          <img
            src="https://www.arabianbusiness.com/public/styles/600px_600px_square/public/images/2020/01/26/18-Riyadh.jpg?itok=xOD5lWQk"
            ult="riyadh city"
          />
        ),
      },
      {
        id: 2,
        name: "Paris",
        img: (
          <img
            src="https://lp-cms-production.imgix.net/2021-03/shutterstock_304631102.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850"
            ult="paris city"
          />
        ),
      },
      {
        id: 3,
        name: "Santorini",
        img: (
          <img
            src="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/JTR/jtr-santorini-port-1.jpg"
            ult="santorini city"
          />
        ),
      },
    ];
    const {id}= useParams();
   
    return (
      <div className="cardCont">
        <h1>{id.name}</h1>
        {id.img}
      </div>
    );
}
