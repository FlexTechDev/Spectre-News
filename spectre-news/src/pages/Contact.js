import React from "react";
import Bar from "../bar/Bar";
import './Contact.css'

function Contact()
{
    return(
        <div className="container">
            <Bar search={false}></Bar>
            
            <div className="panel-teschner">
                <h2>Michael Teschner</h2>
                <p>A developer based out of St. Louis, MO. One of the Co-founders of SpectreNews.</p>
                <p>reach me at: mteschner@spectrenews.com</p>
            </div>

            <div className="panel-safar">
                <h2>Michael Safar</h2>
                <p>A developer based out of St. Louis, MO. One of the Co-founders of SpectreNews. </p>
                <p>reach me at: michaelsafar@spectrenews.com</p>       
            </div>
            
        </div>
    );
}

export default Contact