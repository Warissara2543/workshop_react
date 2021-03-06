import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
    height: 64px;
    background-color: #333;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    h1 {
        margin: 0;
    }
    .logo {
        color: white;
    }
    .menu {
        display: flex;
        align-items: center;
    }
    .menu-item {
        color: white;
        margin-left: 10px;
    }
`

const Topbar = () => {
    return (
        <StyledWrapper>
            <Link to='/'>
                <h1 className='logo'>
                    Keep It!
                </h1>
            </Link>
            <div className='menu'>
                <div className='menu-item'></div>
                <Link to='/'>
                    <div className='menu-item'>HomePages</div>
                </Link>
                <Link to='/AddWord'>
                    <div className='menu-item'>Add word</div>
                </Link>
                <Link to='/Register'>
                    <div className='menu-item'>Register</div>
                </Link>
                <Link to='/LoginPages'>
                    <div className='menu-item'>Logout</div>
                </Link>
            </div>
        </StyledWrapper>
    )
}

export default Topbar