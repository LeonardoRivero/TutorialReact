import React from 'react';
import { Aside, AsideII } from '../components/sideBar';
import { Header } from '../components/header'
// import '../App.css';
// import '../css/App.scss';
import '../css/layout.css'


function Layout(props) {
    return (
        <div className='layout'>
            <header className='header'>
                {/* <Header /> */}
            </header>
            <aside className='aside'>
                {/* <AsideII title="HelloWorld" /> */}
                {/* <Aside /> */}
            </aside>
            <main className='main'>{props.children}</main>
            <footer className='footer'></footer>
        </div>
    );
};

export default Layout;