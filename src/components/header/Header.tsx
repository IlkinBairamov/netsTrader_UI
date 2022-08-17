import React from 'react';
import "./Header.scss";
import { Globe,ChatLeft,Search,Bell } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { Home } from '../../pages/home/Home';
import { APP_ROUTES } from '../../consts';

export const Header : React.FC =()=>{
    const [isModalOpen,setModalOpen]=React.useState(false);
   let content;

    const openNotification=React.useCallback(()=>{
        setModalOpen((isModalOpen)=>!isModalOpen);
        
    },[isModalOpen])

    return (
        <>
            <nav
                id="sidebarMenu"
                className="collapse d-lg-block collapse bg-white"
                >
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                    <ul className="navbar-nav ms-5  flex-row login-sm">
                        <li className="nav-item">
                            <Link className="nav-link nav-button" aria-current="page" to={APP_ROUTES.REGISTER.PATH}>Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link primary-button" to={APP_ROUTES.REGISTER.PATH}>Sign up</Link>
                        </li>
                    </ul>
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.HOME.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                        >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.48337 0.0267429C8.96282 0.120552 8.36791 0.378523 8 0.667765C7.75734 0.859289 1.47945 6.53466 1.04501 6.96071C0.544031 7.44538 0.277887 7.88315 0.0900196 8.5359L0 8.84077V13.0035C0 16.9395 0.00391389 17.1819 0.074364 17.4398C0.367906 18.546 1.19374 19.4567 2.22309 19.8085C2.39922 19.8671 2.65753 19.9375 2.79843 19.957C2.96673 19.9844 5.37769 20 10.0391 20C16.7123 20 17.0411 19.9961 17.3816 19.9257C18.6145 19.6717 19.5773 18.7101 19.91 17.3968L20 17.049V12.9253V8.80169L19.8904 8.45772C19.6908 7.8167 19.4521 7.44147 18.9393 6.94116C18.7476 6.75746 17.456 5.58095 16.0665 4.32627C14.6771 3.06768 13.2329 1.75828 12.8571 1.41823C12.4814 1.07426 12.0744 0.722485 11.953 0.632586C11.6634 0.421518 11.225 0.206543 10.8611 0.104918C10.5323 0.0111084 9.78865 -0.0318871 9.48337 0.0267429ZM10.5245 2.16087C10.6067 2.19996 12.2192 3.63444 14.1057 5.34252C16.7984 7.78544 17.5577 8.4929 17.6556 8.65707C17.9217 9.10265 17.91 8.8525 17.8982 13.1989L17.8865 17.1271L17.7769 17.3343C17.6321 17.6079 17.3973 17.8346 17.1272 17.9636L16.908 18.0652H9.96086H3.0137L2.75147 17.9362C2.4501 17.7877 2.24266 17.5766 2.09785 17.2678L1.99609 17.049L1.98434 13.1833C1.98043 10.7326 1.98826 9.23946 2.01566 9.10656C2.03522 8.9893 2.08219 8.83296 2.11742 8.75478C2.16047 8.66488 2.61057 8.23102 3.40117 7.51183C8.30528 3.06377 9.13894 2.31722 9.27593 2.24686C9.55773 2.09833 9.73386 2.05925 10.0587 2.07488C10.2622 2.0827 10.4227 2.11397 10.5245 2.16087Z" fill="black"/>
                        </svg>
                        <span>Home Page</span>
                    </Link>
                    
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.DEMANDS.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        >
                            <svg className='demandIcon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33333 14.1969H6.1075C5.77893 14.1979 5.45343 14.1336 5.14987 14.0076C4.84632 13.8816 4.57075 13.6964 4.33917 13.4629L0.0433333 9.15796C0.0191667 9.44356 0 9.73 0 10.0214C0.00365984 12.5328 0.94745 14.9514 2.64478 16.799C4.34212 18.6467 6.66945 19.7889 9.16667 19.9999V15.032C9.16667 14.8105 9.07887 14.5981 8.92259 14.4415C8.76631 14.2849 8.55435 14.1969 8.33333 14.1969Z" fill="black"/>
                            <path d="M17.03 2.90491L15.5383 4.39972C15.1469 4.78978 14.6178 5.00943 14.0658 5.011H12.9167C12.8062 5.011 12.7002 5.055 12.622 5.1333C12.5439 5.21161 12.5 5.31781 12.5 5.42855V6.26364C12.5 6.81734 12.2805 7.34836 11.8898 7.73989C11.4991 8.13141 10.9692 8.35137 10.4167 8.35137C10.3062 8.35137 10.2002 8.39536 10.122 8.47366C10.0439 8.55197 10 8.65817 10 8.76891V9.18646C10 9.40794 10.0878 9.62034 10.2441 9.77695C10.4004 9.93356 10.6123 10.0215 10.8333 10.0215H13.3333C13.9964 10.0215 14.6323 10.2855 15.1011 10.7553C15.5699 11.2252 15.8333 11.8624 15.8333 12.5268V13.3302C15.8334 13.4407 15.8771 13.5467 15.955 13.625L18.1425 15.8179C19.5215 13.8852 20.1671 11.5229 19.9632 9.15576C19.7592 6.78866 18.7192 4.57214 17.03 2.90491Z" fill="black"/>
                            <path d="M14.167 13.3301V12.5268C14.167 12.3053 14.0792 12.0929 13.9229 11.9363C13.7666 11.7797 13.5547 11.6917 13.3337 11.6917H10.8337C10.1706 11.6917 9.53473 11.4277 9.06589 10.9579C8.59705 10.4881 8.33366 9.85086 8.33366 9.18642V8.76887C8.33366 8.21517 8.55315 7.68415 8.94385 7.29263C9.33455 6.9011 9.86446 6.68115 10.417 6.68115C10.5275 6.68115 10.6335 6.63715 10.7116 6.55885C10.7898 6.48054 10.8337 6.37434 10.8337 6.2636V5.42851C10.8337 4.87481 11.0532 4.34379 11.4439 3.95227C11.8346 3.56074 12.3645 3.34078 12.917 3.34078H14.0662C14.1763 3.34013 14.2819 3.29638 14.3603 3.21886L15.7445 1.83178C14.4486 0.914572 12.9531 0.320242 11.3822 0.0980945C9.81122 -0.124053 8.21004 0.0323851 6.71148 0.554431C5.21292 1.07648 3.86018 1.94908 2.76549 3.09985C1.67079 4.25062 0.865695 5.64638 0.416992 7.17134L5.51699 12.2821C5.59455 12.3598 5.68667 12.4215 5.78806 12.4635C5.88945 12.5055 5.99812 12.527 6.10783 12.5268H8.33366C8.9967 12.5268 9.63259 12.7907 10.1014 13.2606C10.5703 13.7304 10.8337 14.3676 10.8337 15.032V20C13.1893 19.8057 15.3993 18.779 17.0695 17.1031L14.777 14.8057C14.3878 14.4135 14.1686 13.8833 14.167 13.3301Z" fill="black"/>
                            </svg>

                        <span>My Demands</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 20H4.275C4.64795 19.9965 5.00916 19.8692 5.30192 19.6381C5.59468 19.407 5.80241 19.0853 5.8925 18.7233C5.98898 18.371 6.19856 18.0601 6.48901 17.8385C6.77945 17.6168 7.13467 17.4968 7.5 17.4968C7.86533 17.4968 8.22055 17.6168 8.51099 17.8385C8.80144 18.0601 9.01102 18.371 9.1075 18.7233C9.19759 19.0853 9.40532 19.407 9.69808 19.6381C9.99084 19.8692 10.3521 19.9965 10.725 20H12.5C13.163 20 13.7989 19.7366 14.2678 19.2678C14.7366 18.7989 15 18.163 15 17.5V14.1667H11.6667C11.4457 14.1667 11.2337 14.0789 11.0774 13.9226C10.9211 13.7663 10.8333 13.5543 10.8333 13.3333C10.8333 13.1123 10.9211 12.9004 11.0774 12.7441C11.2337 12.5878 11.4457 12.5 11.6667 12.5H15V4.16667C14.9987 3.062 14.5593 2.00296 13.7782 1.22185C12.997 0.440735 11.938 0.00132321 10.8333 0L10.725 0C10.3521 0.00354318 9.99084 0.130844 9.69808 0.361916C9.40532 0.592988 9.19759 0.914744 9.1075 1.27667C9.01102 1.62903 8.80144 1.93994 8.51099 2.16155C8.22055 2.38316 7.86533 2.5032 7.5 2.5032C7.13467 2.5032 6.77945 2.38316 6.48901 2.16155C6.19856 1.93994 5.98898 1.62903 5.8925 1.27667C5.80241 0.914744 5.59468 0.592988 5.30192 0.361916C5.00916 0.130844 4.64795 0.00354318 4.275 0L4.16667 0C3.062 0.00132321 2.00296 0.440735 1.22185 1.22185C0.440735 2.00296 0.00132321 3.062 0 4.16667V12.5H3.33333C3.55435 12.5 3.76631 12.5878 3.92259 12.7441C4.07887 12.9004 4.16667 13.1123 4.16667 13.3333C4.16667 13.5543 4.07887 13.7663 3.92259 13.9226C3.76631 14.0789 3.55435 14.1667 3.33333 14.1667H0V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20ZM6.66667 12.5H8.33333C8.55435 12.5 8.76631 12.5878 8.92259 12.7441C9.07887 12.9004 9.16667 13.1123 9.16667 13.3333C9.16667 13.5543 9.07887 13.7663 8.92259 13.9226C8.76631 14.0789 8.55435 14.1667 8.33333 14.1667H6.66667C6.44565 14.1667 6.23369 14.0789 6.07741 13.9226C5.92113 13.7663 5.83333 13.5543 5.83333 13.3333C5.83333 13.1123 5.92113 12.9004 6.07741 12.7441C6.23369 12.5878 6.44565 12.5 6.66667 12.5Z" fill="black"/>
                        </svg><span>My Offers</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.ADS.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V20H20V0H0ZM16.6667 16.6667H3.33333V15.5556H16.6667V16.6667ZM16.6667 14.4444H3.33333V13.3333H16.6667V14.4444ZM16.6667 10H3.33333V3.33333H16.6667V10Z" fill="black"/>
                        </svg>
                        <span>My Ads</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 3.33333H12.5V2.5C12.5 1.83696 12.2366 1.20107 11.7678 0.732233C11.2989 0.263392 10.663 0 10 0C9.33696 0 8.70107 0.263392 8.23223 0.732233C7.76339 1.20107 7.5 1.83696 7.5 2.5V3.33333H4.16667C3.062 3.33466 2.00296 3.77407 1.22185 4.55518C0.440735 5.3363 0.00132321 6.39534 0 7.5L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V7.5C19.9987 6.39534 19.5593 5.3363 18.7782 4.55518C17.997 3.77407 16.938 3.33466 15.8333 3.33333ZM8.33333 15C8.33333 15.221 8.24554 15.433 8.08926 15.5893C7.93297 15.7455 7.72101 15.8333 7.5 15.8333H3.33333C3.11232 15.8333 2.90036 15.7455 2.74408 15.5893C2.5878 15.433 2.5 15.221 2.5 15V8.33333C2.5 8.11232 2.5878 7.90036 2.74408 7.74408C2.90036 7.5878 3.11232 7.5 3.33333 7.5H7.5C7.72101 7.5 7.93297 7.5878 8.08926 7.74408C8.24554 7.90036 8.33333 8.11232 8.33333 8.33333V15ZM10 5C9.77899 5 9.56702 4.9122 9.41074 4.75592C9.25446 4.59964 9.16667 4.38768 9.16667 4.16667V2.5C9.16667 2.27899 9.25446 2.06702 9.41074 1.91074C9.56702 1.75446 9.77899 1.66667 10 1.66667C10.221 1.66667 10.433 1.75446 10.5893 1.91074C10.7455 2.06702 10.8333 2.27899 10.8333 2.5V4.16667C10.8333 4.38768 10.7455 4.59964 10.5893 4.75592C10.433 4.9122 10.221 5 10 5ZM15 15.8333H11.6667C11.4457 15.8333 11.2337 15.7455 11.0774 15.5893C10.9211 15.433 10.8333 15.221 10.8333 15C10.8333 14.779 10.9211 14.567 11.0774 14.4107C11.2337 14.2545 11.4457 14.1667 11.6667 14.1667H15C15.221 14.1667 15.433 14.2545 15.5893 14.4107C15.7455 14.567 15.8333 14.779 15.8333 15C15.8333 15.221 15.7455 15.433 15.5893 15.5893C15.433 15.7455 15.221 15.8333 15 15.8333ZM16.6667 12.5H11.6667C11.4457 12.5 11.2337 12.4122 11.0774 12.2559C10.9211 12.0996 10.8333 11.8877 10.8333 11.6667C10.8333 11.4457 10.9211 11.2337 11.0774 11.0774C11.2337 10.9211 11.4457 10.8333 11.6667 10.8333H16.6667C16.8877 10.8333 17.0996 10.9211 17.2559 11.0774C17.4122 11.2337 17.5 11.4457 17.5 11.6667C17.5 11.8877 17.4122 12.0996 17.2559 12.2559C17.0996 12.4122 16.8877 12.5 16.6667 12.5ZM16.6667 9.16667H11.6667C11.4457 9.16667 11.2337 9.07887 11.0774 8.92259C10.9211 8.76631 10.8333 8.55435 10.8333 8.33333C10.8333 8.11232 10.9211 7.90036 11.0774 7.74408C11.2337 7.5878 11.4457 7.5 11.6667 7.5H16.6667C16.8877 7.5 17.0996 7.5878 17.2559 7.74408C17.4122 7.90036 17.5 8.11232 17.5 8.33333C17.5 8.55435 17.4122 8.76631 17.2559 8.92259C17.0996 9.07887 16.8877 9.16667 16.6667 9.16667ZM4.16667 9.16667H6.66667V14.1667H4.16667V9.16667Z" fill="black"/>
                        </svg><span>Management</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.62109 0.0320778C7.4414 0.102446 7.29297 0.239273 7.22266 0.395645C7.15234 0.552019 7.14844 0.872585 7.14844 9.99699C7.14844 19.1878 7.15234 19.442 7.22266 19.6022C7.26953 19.7039 7.35937 19.8055 7.46484 19.8759L7.63281 19.9854H9.99998H12.3672L12.5273 19.8798C12.6211 19.8172 12.7187 19.7078 12.7695 19.6061L12.8515 19.4341V9.99308C12.8515 0.806128 12.8476 0.552019 12.7773 0.391737C12.7304 0.290094 12.6406 0.18845 12.5351 0.118082L12.3672 0.00862122L10.043 0.000802994C8.6328 -0.00310707 7.67968 0.00862122 7.62109 0.0320778Z" fill="black"/>
                        <path d="M14.8203 5.73585C14.6367 5.77885 14.4609 5.91959 14.375 6.08769C14.2969 6.24016 14.2969 6.3418 14.2969 12.8509C14.2969 19.3521 14.2969 19.4615 14.375 19.6101C14.4648 19.7938 14.6094 19.9111 14.8008 19.9698C14.8945 19.9971 15.7109 20.0049 17.2305 19.9971L19.5156 19.9854L19.6758 19.8798C19.7695 19.8173 19.8672 19.7078 19.9179 19.6062L20 19.4342V12.8587C20 7.42078 19.9922 6.2597 19.9453 6.15415C19.8789 5.98605 19.6484 5.79058 19.4648 5.73976C19.2929 5.68894 15.0156 5.68503 14.8203 5.73585Z" fill="black"/>
                        <path d="M0.488279 7.8899C0.339842 7.9329 0.121093 8.1401 0.0546872 8.30429C0.00781246 8.40984 0 9.3989 0 13.9337V19.4342L0.0820308 19.6062C0.132812 19.7078 0.230467 19.8173 0.324217 19.8798L0.484372 19.9854L2.76952 19.9971C4.28904 20.0049 5.10544 19.9971 5.19919 19.9698C5.39059 19.9111 5.53513 19.7938 5.62497 19.6101C5.70309 19.4655 5.70309 19.356 5.70309 13.9259C5.70309 8.57012 5.69919 8.38638 5.62888 8.24565C5.53903 8.06582 5.44919 7.98372 5.26169 7.90554C5.1406 7.85471 4.81247 7.8469 2.86327 7.85081C1.62108 7.85081 0.550778 7.87035 0.488279 7.8899Z" fill="black"/>
                        </svg>
                        <span>Statistics</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.FAVOURITES.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18L8.55 16.7052C3.4 12.1243 0 9.09319 0 5.3951C0 2.36403 2.42 0 5.5 0C7.24 0 8.91 0.79455 10 2.04033C11.09 0.79455 12.76 0 14.5 0C17.58 0 20 2.36403 20 5.3951C20 9.09319 16.6 12.1243 11.45 16.7052L10 18Z" fill="black"/>
                        </svg>
                        <span>Favourites</span>
                    </Link>
                    <Link
                        id="sidebar-item"
                        to={APP_ROUTES.KEYWORDS.PATH}
                        className="list-group-item list-group-item-action py-2 ripple"
                        ><svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.45455 7.33333C4.45455 7.33333 3.63636 6.50833 3.63636 5.5C3.63636 4.49167 4.45455 3.66667 5.45455 3.66667C6.45455 3.66667 7.27273 4.49167 7.27273 5.5C7.27273 6.50833 6.45455 7.33333 5.45455 7.33333ZM10.5455 3.66667C9.81818 1.55833 7.81818 0 5.45455 0C2.45455 0 0 2.475 0 5.5C0 8.525 2.45455 11 5.45455 11C7.81818 11 9.81818 9.44167 10.5455 7.33333H13.6364V11H17.2727V7.33333H20V3.66667H10.5455Z" fill="black"/>
                        </svg>
                        <span>Keywords</span>
                    </Link>
                    </div>
                </div>
            </nav>

            <nav
                id="main-navbar"
                className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
                >
                <div className="container-fluid">
                <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                    <i className="fas fa-bars"></i>
                </button>

                <Link className="navbar-brand" to="#">
                    <svg className='mb-3 mx-2' width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.3291 36.1416L16.0997 45.0872L25.0452 25.8577L44.2747 16.9122M30.1872 7.52051C27.1038 7.52051 24.0507 8.12781 21.2021 9.30775C18.3535 10.4877 15.7651 12.2172 13.5849 14.3974C9.1817 18.8006 6.70801 24.7726 6.70801 30.9997C6.70801 37.2267 9.1817 43.1988 13.5849 47.602C15.7651 49.7822 18.3535 51.5117 21.2021 52.6916C24.0507 53.8715 27.1038 54.4788 30.1872 54.4788C36.4142 54.4788 42.3863 52.0052 46.7895 47.602C51.1927 43.1988 53.6663 37.2267 53.6663 30.9997C53.6663 27.9163 53.059 24.8632 51.8791 22.0146C50.6992 19.166 48.9697 16.5776 46.7895 14.3974C44.6092 12.2172 42.0209 10.4877 39.1723 9.30775C36.3236 8.12781 33.2705 7.52051 30.1872 7.52051ZM30.1872 28.417C29.5022 28.417 28.8453 28.6891 28.3609 29.1734C27.8766 29.6578 27.6045 30.3147 27.6045 30.9997C27.6045 31.6847 27.8766 32.3416 28.3609 32.8259C28.8453 33.3103 29.5022 33.5824 30.1872 33.5824C30.8722 33.5824 31.5291 33.3103 32.0134 32.8259C32.4978 32.3416 32.7699 31.6847 32.7699 30.9997C32.7699 30.3147 32.4978 29.6578 32.0134 29.1734C31.5291 28.6891 30.8722 28.417 30.1872 28.417Z" fill="#D85A54"/>
                    </svg>
                    <svg className='mb-3' style={{marginRight:'15px'}}  width="4" height="29" viewBox="0 0 4 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.14062 28.7969H0.859375V0.46875H3.14062V28.7969Z" fill="#D85A54"/>
                    </svg>
                    <span className='mb-3 Net'>Net <span className='Trade'>Trade</span></span>
               </Link>
                    <ul className="navbar-nav ms-5 flex-row login-lg">
                        <li className="nav-item">
                            <Link className="nav-link nav-button" aria-current="page" to={APP_ROUTES.REGISTER.PATH}>Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link primary-button" to={APP_ROUTES.REGISTER.PATH}>Sign up</Link>
                        </li>
                    </ul>
                        <ul className="navbar-nav nav-right ms-auto d-flex flex-row">
                        <li className="nav-item">
                            <Link className="nav-link membership nav-link-lg" aria-current="page" to="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6 9.6H2.4V2.4H21.6M21.6 15.6H2.4V13.2H21.6M21.6 0H2.4C1.068 0 0 1.068 0 2.4V15.6C0 16.932 1.068 18 2.4 18H7.2V24L12 21.6L16.8 24V18H21.6C22.932 18 24 16.932 24 15.6V2.4C24 1.068 22.932 0 21.6 0Z" fill="#D85A54"/>
                            </svg> Membership</Link>
                            <Link className="nav-link membership nav-link-sm nav-icon-sm" aria-current="page" to="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6 9.6H2.4V2.4H21.6M21.6 15.6H2.4V13.2H21.6M21.6 0H2.4C1.068 0 0 1.068 0 2.4V15.6C0 16.932 1.068 18 2.4 18H7.2V24L12 21.6L16.8 24V18H21.6C22.932 18 24 16.932 24 15.6V2.4C24 1.068 22.932 0 21.6 0Z" fill="#D85A54"/>
                            </svg></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-icon" to="#"><ChatLeft size={20} fontWeight={800}/></Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-icon" to="#"><Search size={20} fontWeight={800}/>
                           </Link>
                        </li>
                        <li className="nav-item">
                            {!!isModalOpen ? <button className="nav-link nav-icon notification-btn active" onClick={()=>openNotification()} ><Bell size={22}/></button> :<button className="nav-link nav-icon notification-btn" onClick={()=>openNotification()} ><Bell size={22}/></button>}
                            
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle nav-link-lg" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Globe color='#D85A54' className='me-2' size={24}/>
                                English
                           </Link>
                            <Link className="nav-link dropdown-toggle nav-link-sm" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            
                            <Globe/>
                           </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        </ul>
                </div>
                {!!isModalOpen ? <div className="modalOpen">
                    <div className="notification">
                        Latest notifications
                    </div>
                    <ul className="notification-cards d-flex align-items-center flex-column">
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
                    <Link className="nav-link primary-button " to={APP_ROUTES.NOTIFICATIONS.PATH}>All Notifications</Link>
                </div>: <></>}

            </nav>
        </>
    )
}