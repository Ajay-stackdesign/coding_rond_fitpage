import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStock, getAllStockRsi } from '../actions/stockActions';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import "./RsiOverBought.scss"



const RsiOverBought = () => {
    const dispatch = useDispatch()
    const { StockList, loading, error } = useSelector(state => state.stockList)
    console.log(StockList)
    useEffect(() => {
        if (error) {
            console.log(error.message)
        }
        dispatch(getAllStockRsi())
    }, [dispatch, error])
    return (
        <div className='rsi__over_bought'>
            <div>
                <Link to="/page" className='top__gainer__iconArrow'>
                    <IconButton className='icon'>
                        <ArrowBackIcon style={{ color: "red", position: 'relative', right: "250px", fontSize: "40px" }} />
                    </IconButton>
                </Link>
                <Link to="/" className='top__gainer__iconArrow'>
                    <IconButton className='icon'>
                        <HomeIcon style={{ color: "white", position: 'relative', left: "250px", fontSize: "40px" }} />
                    </IconButton>
                </Link>
            </div>
            <div className='rsi__overbought'>
                <h2>RSI Reversal</h2>
                <h4>Bearish </h4>
            </div>
            <div className='rsi_overbought_stock'>
                {StockList &&
                    StockList.map((stocks) => (
                        <div>
                            <p>{stocks.max}</p>
                            <p>{stocks.greater}</p>
                            <p>{stocks.volume}</p>
                        </div>
                    ))}
            </div>
            {/* <div>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div>
            <div>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div>
            <div>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div>
            <div>
                <h1>RSI Reversal</h1>
                <h4>Bearish </h4>
            </div> */}
        </div>
    )
}

export default RsiOverBought