import React from 'react';
import { CommonPageContainer } from '../../components/CommonPageContainer';

export const Favourites : React.FC =()=>{
   
    return (
       <CommonPageContainer>
        <main>
            <div className="container">
                <div className="row">
                    <div className="d-flex favAds">
                    <div className="FavCompanies">Favourite Companies</div>
                    <div className="FavAds">Favourite Ads</div>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <div className="companies"></div>
                    </div>
                </div>
            </div>
        </main>
          
       </CommonPageContainer>
    )
}