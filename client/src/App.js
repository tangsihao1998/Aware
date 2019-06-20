//import Component
import React from 'react'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Product from './page/product/product'
import Homepage from './page/homepage/homepage'
import { BrowserRouter as Router,Route,Switch }  from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/product' component={Product} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
