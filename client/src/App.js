//import Component
import React from 'react'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Product from './page/product/product'
import Homepage from './page/homepage/homepage'
import ProductInfo from './page/product-info/product-info'
import { BrowserRouter as Router,Route,Switch }  from 'react-router-dom'
import { withRouter } from 'react-router'


// Scroll To Top Component
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
const Scroll = withRouter(ScrollToTop);

// App Router
class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
            <Scroll>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/product' component={Product} />
                <Route exact path='/product/:product_id' component={ProductInfo} />
              </Switch>
            </Scroll>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
