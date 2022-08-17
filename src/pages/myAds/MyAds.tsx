import React from 'react';
import { CommonPageContainer } from '../../components/CommonPageContainer';
import {Link} from 'react-router-dom';
import { APP_ROUTES } from '../../consts';
import ztag from './ztag.png'

export const MyAds : React.FC =()=>{
   
    return (
       <CommonPageContainer>
        <main>
            <div className="container">
                <div className="row demands-header d-flex align-items-center">
                    <div className="col-md-6">
                            <div className="inputs">
                                <input placeholder="Search by Date" type="date"/>
                                <input placeholder="Search results" type="search"/>
                            </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <div>
                            <Link to={APP_ROUTES.ADS.CREATE_PATH}>
                            <button className="demond-button">New Ads</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="secondDiv">
                        <div className="d-flex justify-content-between">
                            <div className='d-flex'>
                                <img style={{marginRight:'10px'}} src={ztag}  alt="" />
                                <div>
                                <p style={{fontWeight:'bold'}}>Food purchase demand</p>
                                <span style={{marginRight:'10px'}}>Last bid date : <span style={{fontWeight:'bold'}}>05.01.2022</span></span>
                                <span>Last bid time : <span style={{fontWeight:'bold'}}> 18:00</span></span>
                                </div>
                            </div>
                            <div>
                                <span style={{marginLeft:'70px'}}>
                                    <a style={{color:'#d85a54',textDecoration:'none',fontSize:'24px'}} href="#">...</a>
                                </span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p style={{fontWeight:'bold'}}>Detail</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim? Id distinctio quidem ea? Tempore quidem temporibus optio impedit fugiat similique culpa tenetur necessitatibus itaque! Minima omnis pariatur alias hic?</p>
                        </div>
                        <div >
                            <a href="">
                                <button className="incomingMessage">Incoming Message</button>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </main>
          
       </CommonPageContainer>
    )
}