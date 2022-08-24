import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStock } from '../actions/stockActions';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import "./TopGainer.scss"


const TopGainer = () => {
    const dispatch = useDispatch()
    const { Stock, loading, error } = useSelector(state => state.stock)

    useEffect(() => {
        if (error) {
            console.log(error.message)
        }
        dispatch(getAllStock())
    }, [dispatch, error])
    return (
        <div className='top__gainer'>
            <div className='top__Gainer__icon'>
                <Link to="/page" className='top__gainer__iconArrow'>
                    <IconButton className='icon'>
                        <ArrowBackIcon style={{ color: "red", position: 'relative', right: "250px", fontSize: "40px" }} />
                    </IconButton>
                </Link>
                <Link to="/" className='top__gainer__iconArrow'>
                    <IconButton className='icon'>
                        <HomeIcon style={{ color: "red", position: 'relative', left: "250px", fontSize: "40px" }} />
                    </IconButton>
                </Link>
            </div>
            <div className='top__gainer__top'>
                <h2>Top Gainers</h2>
                <p>Intraday Bullish</p>
            </div>
            <div className='top__gainer__stocks'>
                {Stock &&
                    Stock.map((stocks) => (
                        <h3>{stocks.topgainer}</h3>
                    ))}
                {/* <h2>Sort - %price change in descending order</h2> */}
            </div>
        </div>
    )
}

export default TopGainer