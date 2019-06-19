//import Component
import React from 'react'
import AppHeader from './component/header/header'
import Footer from './component/footer/footer'
import Product from './page/product/product'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="">
          <AppHeader />
        </header>
        <body>
          <div>
          <Product />
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
