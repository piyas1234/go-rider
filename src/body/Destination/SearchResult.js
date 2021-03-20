import { faDotCircle, faLayerGroup, faUserFriends } from '@fortawesome/free-solid-svg-icons';
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
    const { img, name } = item;
    return (
        <div>
            <div style={{ backgroundColor: "tomato", padding: "10px" }} className="mr-auto text-white">
                <h5><FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon> {pickfrom}</h5>

                <h5><FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon> {pickto}</h5>
            </div>
            <div className="">
                <div className="p-1 bg-white d-flex mt-1">
                    <div className="m-2">
                        <img width="50px" src={img} alt="" srcset="" />
                    </div >
                    <div className="m-2 ml-4">
                        <h4>{name + " "}<FontAwesomeIcon size="1x" icon={faUserFriends}></FontAwesomeIcon></h4>
                    </div>
                    <div className="m-2 ml-5">
                        <h4>79$</h4>
                    </div>
                </div>
                <div className="p-1 bg-white d-flex mt-1">
                    <div className="m-2">
                        <img width="50px" src={img} alt="" srcset="" />
                    </div >
                    <div className="m-2 ml-4">
                        <h4>{name + " "}<FontAwesomeIcon size="1x" icon={faUserFriends}></FontAwesomeIcon></h4>
                    </div>
                    <div className="m-2 ml-5">
                        <h4>79$</h4>
                    </div>
                </div>
                <div className="p-1 bg-white d-flex mt-1">
                    <div className="m-2">
                        <img width="50px" src={img} alt="" srcset="" />
                    </div >
                    <div className="m-2 ml-4">
                        <h4>{name + " "}<FontAwesomeIcon size="1x" icon={faUserFriends}></FontAwesomeIcon></h4>
                    </div>
                    <div className="m-2 ml-5">
                        <h4>79$</h4>
                    </div>
                </div>
                <div className="p-1 bg-white d-flex mt-1">
                    <div className="m-2">
                        <img width="50px" src={img} alt="" srcset="" />
                    </div >
                    <div className="m-2 ml-4">
                        <h4>{name + " "}<FontAwesomeIcon size="1x" icon={faUserFriends}></FontAwesomeIcon></h4>
                    </div>
                    <div className="m-2 ml-5">
                        <h4>79$</h4>
                    </div>
                </div>

 
            </div>
        </div>
    );
};

export default SearchResult;