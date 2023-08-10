import React from 'react';
import Link from 'next/link';
import {
    Navbar,
    BottomNavbar, Icon,
} from '../styles/globalStyles';
import {faHeart, faHome} from "@fortawesome/free-solid-svg-icons";
import {LikeIcon} from "../styles/HomeStyles";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar>
                <Link href="/"><b>Home</b></Link>
                <Link href="/favorites"><b>Favourite</b></Link>
            </Navbar>
            {children}
            <BottomNavbar>
                <Link href="/"><Icon icon={faHome} /></Link>
                <Link href="/favorites"><Icon icon={faHeart} /></Link>
            </BottomNavbar>
        </div>
    );
};

export default Layout;
