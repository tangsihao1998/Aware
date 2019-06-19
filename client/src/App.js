//import Component
import React from 'react'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Product from './page/product/product'
import Homepage from './page/homepage/homepage'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="">
          <Header />
        </header>
        <body>
          <div>
          {/* <Product /> */}
          <Homepage></Homepage>
          </div>
        </body>
        <footer className="">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
