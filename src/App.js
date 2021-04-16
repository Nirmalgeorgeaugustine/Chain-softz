//importing Components
import GlobalStyle from './globalstyle';
//importing packages from react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Services from './pages/ServicesPage/Services';
import Blogs from './pages/BlogsPage/Blogs';
import ContactUs from './pages/ContactUsPage/ContactUs';
import React from 'react';
import ScrollToTop from './components/General/ScrollToTop';
import BlogOne from './pages/BlogsPage/BlogOne';
import BlogTwo from './pages/BlogsPage/BlogTwo';
import BlogThree from './pages/BlogsPage/BlogThree';
import Error from './pages/Error404Page/Error';


//function App
function App() {
  return (
    <Router  onUpdate={() => window.scrollTo(0, 0)} >
      <GlobalStyle />
      <ScrollToTop/>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/blogs' component={Blogs}/>
        <Route path='/contactus' component={ContactUs} />
        <Route path='/blogOne' component={BlogOne} />
        <Route path='/blogTwo' component={BlogTwo} />
        <Route path='/blogThree' component={BlogThree} />
        <Route path='*' component={Error}/>
     </Switch>
    </Router>
  );
}

export default App;
