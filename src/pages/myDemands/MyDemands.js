import React from 'react';
import { CommonPageContainer } from '../../components/CommonPageContainer';
import {Link} from 'react-router-dom';
import { APP_ROUTES } from '../../consts';
import message from './messages.png'
import vector from './iconca.png'
import ztag from './ztag.png'
import { DemandContext   } from '../../App';
import { User } from '../../models';

export const MyDemands =()=>{
    const [isEditModalOpen,setEditModalOpen] = React.useState(false);
    const editDemand = React.useCallback(()=>{
        setEditModalOpen((isEditModalOpen)=>!isEditModalOpen);      
    },[isEditModalOpen])
    const demands = React.useContext(DemandContext);
    demands.map((demand)=>{
        
    })
    
    return (
       <CommonPageContainer>
        <main>
            <div className="demands-header d-flex align-items-center justify-content-between row">
                    <div className="inputs col-md-6 col-sm-12 text-center">
                        <input placeholder="Search by Date" type="date"/>
                        <input placeholder="Search results" type="search"/>
                    </div>
                    <div className='col-md-6 col-sm-12 d-flex justify-content-end newDemand'>
                        <Link to={APP_ROUTES.DEMANDS.CREATE_PATH}>
                            <button className="demond-button">New Demond</button>
                        </Link>
                    </div>
            </div>

            {demands.map((demand)=>(
                <div className="secondDiv">
                <div className="">
                    <div className="d-flex justify-content-between row" style={{padding:'25px'}}>
                            <div className='col-md-5 col-sm-12 d-flex'>
                                <div style={{marginRight:'10px',marginLeft:'-20px'}}><img src={ztag} alt="" /></div>
                               <div> 
                                <p style={{fontWeight:'bold'}}>Food purchase demand</p>
                                <p>{demand.countryName}</p></div>
                            </div>
                            <div className='col-md-6 col-sm-12 d-flex justify-content-between'>
                                <span style={{marginLeft:'30px'}}>Last bid date : <span style={{fontWeight:'bold'}}>{new Date(demand.lastBidDate.seconds * 1000).toLocaleDateString()}</span></span>
                                <span>Last bid time : <span style={{fontWeight:'bold'}}> {new Date(demand.lastBidDate.seconds * 1000).toLocaleTimeString()}</span></span>
                               
                            </div>
                            <div className='col-md-1 d-flex justify-content-end position-relative'>
                                <div style={{marginLeft:10}}>
                                        <button onClick={()=>editDemand()} style={{color:'#d85a54',fontSize:'24px',textDecoration: 'none', border: 'none', background:'transparent'}} >...</button>
                                </div>
                            {!!isEditModalOpen ? 
                            <div className='edit-modal position-absolute'>
                                <div className='edit-modal-header'><span>Edit Demands</span></div>
                                <div className='edit-modal-body'>
                                    <button className='edit-modal-btn'>Update Request</button>
                                    <button className='edit-modal-btn'>Remove Request</button>
                                </div>
                            </div>
                            :<></>}
                            </div>
                    </div>
                </div>
                
                <div className='col-lg-12' style={{padding:'25px'}} >
                    <p style={{fontWeight:'bold'}}>Detail</p>
                    <p>{demand.description}</p>
                </div>

                <div style={{padding:'25px'}} >
                            <div className=" d-flex justify-content-between">
                                <p style={{fontWeight:'bold'}}>Incoming Offers</p>
                                <p ><a style={{color:'#d85a54',fontSize:'12px',textDecoration: 'none'}} href="#">Show All</a></p>
                            </div>
                        
                        <ul className="offers">
                                <li className="d-flex justify-content-between align-items-center row"> 
                                    <div className='col-md-6 col-sm-12 d-flex' style={{marginLeft:'-43px'}}>
                                        <p style={{height:'40px',width:'40px',backgroundColor:'#f5b15f',textAlign:'center',marginRight:'10px'}}>
                                        <img style={{marginTop:'8px'}} src={vector} alt=""/>
                                        </p>
                                        <p> Date: <span style={{fontWeight:'500'}}>01.01.2022/18:00</span> </p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end col-md-6 col-sm-12">
                                            <div className="icon-div">
                                        <img src={message} style={{width:'44px',height:'44px'}} alt="" />
                                            </div>
                                            <p className="money d-flex justify-content-center align-items-center">15.000 USD</p>
                                    </div>
                                </li>
                        </ul>
                        <ul className="offers">
                                <li className="d-flex justify-content-between align-items-center row"> 
                                    <div className='col-md-6 col-sm-12 d-flex' style={{marginLeft:'-43px'}}>
                                        <p style={{height:'40px',width:'40px',backgroundColor:'#f5b15f',textAlign:'center',marginRight:'10px'}}>
                                        <img style={{marginTop:'8px'}} src={vector} alt=""/>
                                        </p>
                                        <p> Date: <span style={{fontWeight:'500'}}>01.01.2022/18:00</span> </p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end col-md-6 col-sm-12">
                                            <div className="icon-div">
                                        <img src={message} style={{width:'44px',height:'44px'}} alt="" />
                                            </div>
                                            <p className="money d-flex justify-content-center align-items-center">15.000 USD</p>
                                    </div>
                                </li>
                        </ul>
                </div>
                
            </div>
            ))}
        </main>
          
       </CommonPageContainer>
    )
}