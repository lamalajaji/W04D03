import React from 'react'
import "./style.css";
import {useHistory } from 'react-router';
import { Link } from 'react-router-dom';
export default function Cards() {
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

    //// display items
    // let cardPage = useHistory();
    // const showCard=(id)=>{
    //     console.log(id);
    //     cardPage.push(`./card/${id}`)

    // }



    return (
        <div className="cardsCompo">
            {cities.map((item)=>{ 
                return (
                  <div className="card" 
                //  onClick={showCard()}
                 key={item.id} > 
                   <Link to={`/card/${item.id}`}>
                    {item.img}
                    {item.name}
                    
                    </Link>
                  </div>
                ); 
    
})}
</div>

    )    }           