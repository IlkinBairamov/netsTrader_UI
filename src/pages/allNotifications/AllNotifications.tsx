import React from 'react';
import { CommonPageContainer } from '../../components/CommonPageContainer';

export const AllNotifications : React.FC =()=>{
   


    return (
       <CommonPageContainer>
            <main>
                <div className="all-notifications">
                    <ul className="notification-list">
                        <li className="notification-card d-flex flex-row align-items-center">
                        <div className="card-profile">IB</div>
                        <div className="ps-3 notification-info"> 
                            <p className="name">Ilkin Bayramov</p>
                            <p className="work">UI/UX</p>
                            <p className="date">7 hours ago</p>
                        </div>
                        </li>
                        <li className="notification-card d-flex flex-row align-items-center">
                        <div className="card-profile">IB</div>
                        <div className="ps-3 notification-info"> 
                            <p className="name">Ilkin Bayramov</p>
                            <p className="work">UI/UX</p>
                            <p className="date">7 hours ago</p>
                        </div>
                        </li>
                        <li className="notification-card d-flex flex-row align-items-center">
                        <div className="card-profile">IB</div>
                        <div className="ps-3 notification-info"> 
                            <p className="name">Ilkin Bayramov</p>
                            <p className="work">UI/UX</p>
                            <p className="date">7 hours ago</p>
                        </div>
                        </li>
                    </ul>
                </div>
            </main>
       </CommonPageContainer>
    )
}