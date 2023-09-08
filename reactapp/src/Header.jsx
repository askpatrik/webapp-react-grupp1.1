import React, { useState } from 'react';
import SelectsComponent from './Pages/Articles/components/select';
import { selectedUsername } from './Pages/Articles/redux/userSlice';
import { useSelector } from 'react-redux';

function Header() {
    const loggedInUsername = useSelector(selectedUsername)
    const isLoggedIn = loggedInUsername !== '';
    return (
        <>
            {isLoggedIn &&
                <>
                    <header className="header">
                        <SelectsComponent />
                    </header>
                </>}
        </>
    );
}

export default Header;
