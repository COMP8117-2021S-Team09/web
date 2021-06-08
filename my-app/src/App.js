
import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import {Route, Switch,Link, BrowserRouter} from "react-router-dom";
import Buyer from './Components/BuyerInfo'

function App() {
  return (

     <React.Fragment>
       <BrowserRouter>
        <div> 
          <Header/>
            <hr/>
              <Switch>
                   <Route exact path="/" component={Content}/>
                   <Route path="/buyerinfo" component={Buyer}/>
              </Switch>
          <Footer/>
        </div>
       </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
