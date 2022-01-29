import React from 'react';
import { Aside, AsideII } from '../components/sideBar';
import '../App.css';


const Layout = props => {
    const { children } = props;
    return (
        <div className='layout'>
            <header className='header'>sdasdas</header>
            <aside className='aside'>
                <AsideII />
            </aside>
            <main className='container'>{children}</main>
            <footer className='footer'></footer>
        </div>
    );
};

export default Layout;