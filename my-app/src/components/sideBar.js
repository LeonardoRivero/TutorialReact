// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// import React from "react";
// import { FaCalendarAlt, FaHeart } from 'react-icons/fa';


// export class SideBar extends React.Component {
//     render() {
//         return (
//             <ProSidebar>
//                 <Menu iconShape="square">
//                     <MenuItem >Dashboard</MenuItem>
//                     <SubMenu title="Components" >
//                         <MenuItem icon={<FaCalendarAlt />}>Component 1</MenuItem>
//                         <MenuItem icon={<FaHeart />}>Component 2</MenuItem>
//                     </SubMenu>
//                 </Menu>
//             </ProSidebar>
//         )
//     }
// }
import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../images/bg2.jpg';
// import '../css/sidebars.css';

export const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    return (
        <ProSidebar image={sidebarBg} >
            <SidebarHeader>
                <div style={{
                    padding: '24px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 14, letterSpacing: '1px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                    Soy Marrano
                </div>
            </SidebarHeader>

            <SidebarContent >
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt />} suffix={<span className="badge red">Entre</span>}></MenuItem>
                    <MenuItem icon={<FaGem />}>Othe fuck</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu suffix={<span className="badge yellow">Profile</span>} icon={<FaRegLaughWink />}>
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                    </SubMenu>
                    <SubMenu prefix={<span className="badge red">Languages</span>} icon={<FaHeart />}>
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FaList />}>
                        <MenuItem>1 </MenuItem>
                        <MenuItem>2 </MenuItem>
                        <SubMenu >
                            <MenuItem>3.1 </MenuItem>
                            <MenuItem>3.2 </MenuItem>
                            <SubMenu >
                                <MenuItem>3.3.1 </MenuItem>
                                <MenuItem>3.3.2 </MenuItem>
                                <MenuItem>3.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div className="sidebar-btn-wrapper" style={{ padding: '20px 24px', }}>
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};


export class AsideII extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="flex-shrink-0 p-3 bg-white" style={{ height: '100%' }}>
                <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <span className="fs-5 fw-semibold">{this.props.title}</span>
                </a>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Home
                        </button>
                        <div className="collapse show" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/" className="link-dark rounded">Overview</a></li>
                                <li><a href="/" className="link-dark rounded">Updates</a></li>
                                <li><a href="/" className="link-dark rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/" className="link-dark rounded">Overview</a></li>
                                <li><a href="/" className="link-dark rounded">Weekly</a></li>
                                <li><a href="/" className="link-dark rounded">Monthly</a></li>
                                <li><a href="/" className="link-dark rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Orders
                        </button>
                        <div className="collapse" id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/" className="link-dark rounded">New</a></li>
                                <li><a href="/" className="link-dark rounded">Processed</a></li>
                                <li><a href="/" className="link-dark rounded">Shipped</a></li>
                                <li><a href="/" className="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                        </button>
                        <div className="collapse" id="account-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="/" className="link-dark rounded">New...</a></li>
                                <li><a href="/" className="link-dark rounded">Profile</a></li>
                                <li><a href="/" className="link-dark rounded">Settings</a></li>
                                <li><a href="/" className="link-dark rounded">Sign out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}

AsideII.defaultProps = { title: "Hola" }