import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Users from './components/Users'
import { Home } from './pages/Home'

// App.js or any component that wraps your routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div style={{ height: '100vh', backgroundImage: `url("https://www.shutterstock.com/image-photo/handyman-tools-260nw-264151898.jpg")`, backgroundSize: 'cover', }}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Add more routes here if needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
