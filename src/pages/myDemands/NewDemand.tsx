import React from 'react';
import { CommonPageContainer } from '../../components/CommonPageContainer';
import { ChevronLeft } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../consts';
import { Link } from "react-router-dom";


export const NewDemand : React.FC =()=>{
   


    return (
       <CommonPageContainer>
        <main>
            <div className="demands-header d-flex align-items-center justify-content-between">
                <div className="iconVector">
                <Link to={APP_ROUTES.DEMANDS.PATH}>
                    <ChevronLeft className='pe-1' color='white' size="30px"/>
                </Link>
                </div>
            <div>
                <a href="../mydemands/newDemand.html">
                    <button className="demond-button">Create Request</button>
                </a>
            </div>
            </div>
        

            <div className="createDemand">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <p style={{color:'#999999'}}>Select Industry</p>
                        <div className="dropdown dropdowns">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Textile Products
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <p style={{color:'#999999'}}>Select Country</p>
                        <div className="dropdown dropdowns">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cameroon
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 mt-4">
                        <p style={{color:'#999999'}}>Detail</p>
                        <p className="detailText" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ex voluptates esse cumque saepe quidem. Possimus fugiat, natus eveniet voluptatibus modi dolorem harum consectetur iusto quisquam, dolor, animi voluptatum nobis?</p>
                    </div>

                    <div className="col-lg-12 mb-5">
                        <p style={{color:'#999999'}}>Select Currency</p>
                        <div className="dropdown dropdowns">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            USD
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 ">
                        <p style={{color:'#999999'}}>Select Last Bid Date</p>
                        <input type="date"/>
                    </div>

                    <div className="col-md-3">
                        <p style={{color:'#999999'}}>Select Last Bid Time</p>
                        <div className="dropdown dropdowns">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cameroon
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        </main>
       </CommonPageContainer>
    )
}