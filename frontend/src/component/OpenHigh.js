import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStock } from '../actions/stockActions';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import "./OpenHigh.scss"

const OpenHigh = () => {
    const dispatch = useDispatch()
    const { Stock, loading, error } = useSelector(state => state.stock)
    useEffect(() => {
        if (error) {
            console.log(error.message)
        }
        dispatch(getAllStock())
    }, [dispatch, error])

    return (
        <div className='openHigh'>
            <div>
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
            <div className='open_high_flex'>
                <h2>Open = High</h2>
                <h6>
                    Bullish
                </h6>
            </div>
            <div className='open_high_stock'>

                {Stock &&
                    Stock.map((stocks) => (
                        <h3>{stocks.openHigh}</h3>
                    ))}
            </div>
        </div>
    )
}

export default OpenHigh