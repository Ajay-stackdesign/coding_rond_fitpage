import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/Home.js"
import Page from "./component/Page.js"
import TopGainer from "./component/TopGainer.js"
import IntradayBuying from "./component/IntradayBuying.js"
import OpenHigh from "./component/OpenHigh.js"
import CciReversal from "./component/CciReversal.js"
import RsiOverBought from "./component/RsiOverBought.js"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/page' element={<Page />} />
        <Route exact path='/page/top_gainers' element={<TopGainer />} />
        <Route exact path='/page/intraday_buying' element={<IntradayBuying />} />
        <Route exact path='/page/open_high' element={<OpenHigh />} />
        <Route exact path='/page/cci_reversal' element={<CciReversal />} />
        <Route exact path='/page/rsi_overbought' element={<RsiOverBought />} />
      </Routes>
    </Router>
  );
}

export default App;
