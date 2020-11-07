import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from "../Provider/StateProvider"
function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                <Avatar className='header_avatar'
                    alt={user?.displayName}
                    src={user?.photoURL}

                    />
                {/* //    alt= {user?.
                displayName} src={user?.photoURL}/> */}
                <AccessTimeIcon />
                {/* Time */}
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder="Search BuddyTalk" />
            </div>
            <div className="header_right">
                {/* helpicon */}
                <HelpOutlineIcon />


            </div>


        </div>



    );
}

export default Header;
