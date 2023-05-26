import PropTypes, {element} from 'prop-types';
import {useState} from "react";
import '../main.css';


export const Listing = (props) => {
    const {items} = props;
    const result = [];
    let leftLevel;



    items.forEach((elememt) => {
        var test  = "";
        if (elememt.MainImage != undefined){
            test = elememt.MainImage.url_570xN;
        }
        console.log(test);

        if(elememt.quantity > 20){
            leftLevel = "level-high";
        }else if (elememt.quantity < 21 && elememt.quantity > 10){
            leftLevel = "level-medium";
        }else {leftLevel = "level-low";}

        result.push(
            <div className="item-list">
                <div className="item">
                    <div className="item-image">
                        <a href={elememt.url}>
                            <img src={test}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{elememt.title}</p>
                        <p className="item-price">{elememt.currency_code + elememt.price}</p>
                        <p className={"item-quantity " + leftLevel}>{elememt.quantity} left</p>
                    </div>
                </div>
            </div>

        )
    });

    return(result)
}

Listing.prototype = {

}