import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { APP_ROUTES } from './consts';
import './App.css';
import { Home } from './pages/home/Home';
import { MyDemands } from './pages/myDemands/MyDemands';
import {MyAds} from './pages/myAds/MyAds';
import {NewDemand} from './pages/myDemands/NewDemand'
import { NewAds } from './pages/myAds/NewAds';
import { Keywords } from './pages/keywords/Keywords';
import { Favourites } from './pages/favourites/Favourites';
import { AllNotifications } from './pages/allNotifications/AllNotifications';
import { Register } from './pages/register/Register';
import { RegisterLastPage } from './pages/register/RegisterLastPage';
import {collection, getDocs} from "firebase/firestore"
import {db} from "./firebase-config"
import { User } from './models';
export const UserContext = React.createContext<Array<object>>([]);
export const DemandContext = React.createContext<Array<object>>([]);
function App() {
  const [users,setUsers] = React.useState<object[]>([]);
  const usersCollectionRef = collection(db,"Users");
  const [demands,setDemands] = React.useState<object[]>([]);
  const demandsCollectionRef = collection(db,"Demands");
  
  React.useEffect(()=>{
    const getUsers =async ()=>{
      const data = await getDocs(usersCollectionRef);
      
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id })));
    }
    const getDemands = async ()=>{
      const data = await getDocs(demandsCollectionRef);
      
      setDemands(data.docs.map((doc)=>({...doc.data(), id: doc.id })));
    }
    
    getUsers()
    getDemands()
  },[])
  return (
    <>
    <UserContext.Provider value={users}>
    <DemandContext.Provider value={demands}>
    <Routes>
        <Route path={APP_ROUTES.REGISTER.PATH} element={<Register/>}>
        </Route>
        <Route path={APP_ROUTES.HOME.PATH} element={<Home/>}>
        </Route>
        <Route path={APP_ROUTES.DEMANDS.PATH} element={<MyDemands/>}>
        </Route>
        <Route path={APP_ROUTES.DEMANDS.CREATE_PATH} element={<NewDemand/>}>
        </Route>
        <Route path={APP_ROUTES.ADS.PATH} element={<MyAds/>}>
        </Route>
        <Route path={APP_ROUTES.ADS.CREATE_PATH} element={<NewAds/>}>
        </Route>
        <Route path={APP_ROUTES.KEYWORDS.PATH} element={<Keywords/>}>
        </Route>
        <Route path={APP_ROUTES.FAVOURITES.PATH} element={<Favourites/>}>
        </Route>
        <Route path={APP_ROUTES.NOTIFICATIONS.PATH} element={<AllNotifications/>}>
        </Route>
        
      </Routes>
      </DemandContext.Provider>
    </UserContext.Provider>
      
    </>
  );
}

export default App;
