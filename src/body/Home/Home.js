import React from 'react';
import './css/home.css'
import {data} from '../Data/Data'
import { Link } from 'react-router-dom';

const Home = () => {
    
  
    return (
        <div className="home-container">
            <div className="">
                <div className="col-md-10 offset-md-1">
                    <div className="row home-body text-center ">
                        {data.map(item => {
                            const { id, name, img } = item;
                            return <div className="gx-3 col-md-6 col-lg-3 mt-3">
                                 <Link to={`/destination/${id}`}>
                                <div className="card bg-white p-5 go-card">
                                    <img className="card-img w-75" src={img} alt="" srcset="" />
                                    <h4>{name}</h4>
                                </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;