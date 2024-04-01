import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../pages/Header';
import Services from '../pages/Services';
import BeATasker from '../pages/Be-a-Tasker';
import CreateATask from '../pages/Create-a-Task';

const Routes = () => {
  return (
    <Router>
      
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Be-a-Tasker" element={<BeATasker />} />
        <Route path="/Create-a-Task" element={<CreateATask />} />
     
    </Router>
  );
};

export default Routes;


