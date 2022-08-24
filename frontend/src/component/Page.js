import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import "./Page.scss"

const Page = () => {

    return (
        <div className='page'>
            <div className='page__heading'>
                <Link to="/">
                    <IconButton className='link'>
                        <HomeIcon style={{ position: 'relative', left: "500px", fontSize: "40px", color: "red" }} />
                    </IconButton>
                </Link>
            </div>
            <div className='page_flex'>
                <div className='page_flex_top'>
                    <h3 className='page_flex_top_heading'><Link to="/page/top_gainers" className='page_flex_span_link'>TopGainer</Link></h3>
                    <p className='page_flex_span'><center><Link to="/page/top_gainers" className='page_flex_span_link'>Intraday bullish</Link></center></p>
                </div>
                <hr></hr>
                <div className='page_flex_top'>
                    <h3 className='page_flex_top_heading'><Link to="/page/intraday_buying" className='page_flex_span_link'>Intraday buying seen in last 15 days</Link></h3>
                    <p className='page_flex_span'><center><Link to="/page/intraday_buying" className='page_flex_span_link'>Bullish</Link></center></p>
                </div>
                <hr></hr>
                <div className='page_flex_top'>
                    <h3 className='page_flex_top_heading'><Link to="/page/open_high" className='page_flex_span_link'>Open = High</Link></h3>
                    <p className='page_flex_span'><center><Link to="/page/open_high" className='page_flex_span_link'>Bulllish</Link></center></p>
                </div>
                <hr></hr>
                <div className='page_flex_top'>
                    <h3 className='page_flex_top_heading'><Link to="/page/cci_reversal" className='page_flex_span_link'>CCI Reversal</Link></h3>
                    <p className='page_flex_span'><center><Link to="/page/cci_reversal" className='page_flex_span_link'>Bearish</Link></center></p>
                </div>
                <hr></hr>
                <div className='page_flex_top'>
                    <h3 className='page_flex_top_heading'><Link to="/page/rsi_overbought" className='page_flex_span_link'>RSI Overbought</Link></h3>
                    <p className='page_flex_span'><center><Link to="/page/rsi_overbought" className='page_flex_span_link'>Bearish</Link></center></p>
                </div>
            </div>
        </div>
    )
}

export default Page