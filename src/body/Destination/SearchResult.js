import { faDollarSign, faDotCircle,  faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { data } from '../Data/Data';


const SearchResult = (props) => {
    const [item, setitem] = useState({})
    const { place, id = 1 } = props;
    const { pickfrom, pickto } = place;

    useEffect(() => {
        const itemdata = data.filter(item => item.id == id);
        setitem(itemdata[0]);
    }, [])

    const { img, name, seat, price } = item;

    return (
        <div>
            <div style={{ backgroundColor: "tomato", padding: "10px" }} className="mr-auto text-white">
                <h5><FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon> {pickfrom}</h5>

                <h5><FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon> {pickto}</h5>
            </div>
            <div style={{ fontFamily: " 'Poppins', sans-serif" }}>
                <div className="p-1 bg-white d-flex mt-1">
                    <div className="m-1">
                        <h4 className="text-primary">Primary</h4> <img width="50px" src={img} alt="" srcset="" />
                    </div >
                    <div className="m-1 ml-2">
                        <h4>{name + " "}<FontAwesomeIcon size="1x" icon={faUserFriends}></FontAwesomeIcon>{" " + seat + " "}</h4>
                    </div>
                    <div className="m-1 ml-2">
                        <h4><FontAwesomeIcon className="text-warning" icon={faDollarSign}> </FontAwesomeIcon>{price}</h4>
                    </div>
                </div>
                <div className="p-1 bg-white d-flex mt-1">
                    <div className="m-1">
                        <h4 className="text-primary">bussiness</h4> <img width="50px" src={img} alt="" srcset="" />
                    </div >
                    <div className="m-2 ml-2">
                        <h4>{name + " "}<FontAwesomeIcon size="1x" icon={faUserFriends}></FontAwesomeIcon>{" " + (seat + 2) + " "}</h4>
                    </div>
                    <div className="m-2 ml-2">
                        <h4><FontAwesomeIcon className="text-warning" icon={faDollarSign}> </FontAwesomeIcon>{price + 10}</h4>
                    </div>
                </div>
                <div className="p-1 bg-white d-flex mt-1">
                    <div className="m-2">
                        <h4 className="text-primary">Premium</h4> <img width="50px" src={img} alt="" srcset="" />
                    </div >
                    <div className="m-2 ml-2">
                        <h4>{name + " "}<FontAwesomeIcon size="1x" icon={faUserFriends}></FontAwesomeIcon>{" " + (seat + 5) + " "}</h4>
                    </div>
                    <div className="m-2 ml-2">
                        <h4><FontAwesomeIcon className="text-warning" icon={faDollarSign}> </FontAwesomeIcon>{price + 20}</h4>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SearchResult;