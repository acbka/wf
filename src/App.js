import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Service } from './components/service';
import { About } from './components/about';
import { Sale } from './components/sale';
import { Advantages } from './components/advantages';
import { Bouquets } from './components/bouquets';
import { Testimonials } from './components/testimonials';
import { Footer } from './components/footer';

class App extends React.Component{

	render() {
		return (
         <div>   
            <Header></Header>
            <Service></Service>
            <Bouquets></Bouquets>
            <About></About>
            <Sale></Sale>
            <Advantages></Advantages>
            <Testimonials></Testimonials>
            <Footer></Footer>  
         </div>
      );
	}
}

export default App;
