import { CommonPageContainer } from '../../components/CommonPageContainer';
import { X } from 'react-bootstrap-icons';
import React from 'react';

export const Keywords =()=>{
    const deleteKeyword = React.useCallback(()=>{},[]);
    return (
       <CommonPageContainer>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 leftSide">
                        <p className="text1">Create New Keyword</p>
                        <p className="text">Keywords that make it easy to find your company and its products in searches</p>
                        <input className="mb-3" placeholder="Enter Keyword" type="text"/>
                        <div className="d-flex justify-content-center">
                            <button>Save</button>
                        </div>
                    </div>
                    <div className="col-md-7 rightSide" >
                        <p style={{marginTop:'10px'}}>Your Keywords</p>
                        <div className='keyword-list'>
                            <div className='keyword'>
                                <p>Cyrius</p>
                                <button onClick={()=>deleteKeyword()}><X></X></button>
                            </div>
                            <div className='keyword'>
                                <p>Cyriuskdgaskjd</p>
                                <button><X></X></button>
                            </div>
                            <div className='keyword'>
                                <p>Cyriussfasf</p>
                                <button><X></X></button>
                            </div>
                            <div className='keyword'>
                                <p>Cyrius</p>
                                <button><X></X></button>
                            </div>
                            <div className='keyword'>
                                <p>Cyrius</p>
                                <button><X></X></button>
                            </div>
                            <div className='keyword'>
                                <p>Cyriussfafa</p>
                                <button><X></X></button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </main>
          
       </CommonPageContainer>
    )
}