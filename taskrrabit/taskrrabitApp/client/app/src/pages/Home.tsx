import React, { useEffect, useRef, useState } from 'react';
import "./Home.scss";
import { Link, useNavigate } from 'react-router-dom';
import { getActions, getCategories } from '../api/actionApi';





const Home = () => {

 
    const [query, setQuery] = useState('');

    const [showDropdown, setShowDropdown] = useState(false);
    
    const [searchResults , setSearchResults] = useState<string[] | never[]>([]);

    const [actions , setActions] = useState<string[]>([]);
    
    const searchFieldRef = useRef<HTMLInputElement>(null); 

    const navigate = useNavigate();

    useEffect(() => {
      fetchActions()
    })

    const fetchActions = async () => {
      try {
        const actions = await getActions();
        setActions(actions);
      } catch (error) {
        console.error("Error fetching actions: " , error)
      }
    }

    useEffect(() => {
      const handleResize = () => {
        if (searchFieldRef.current) {
          const searchFieldWidth = searchFieldRef.current.offsetWidth;
          const dropdownElement = document.querySelector('.dropdown') as HTMLElement
          dropdownElement.style.width = `${searchFieldWidth}px`;
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize' ,handleResize )
    })

    const handleChange = (event: { target: { value: any; }; }) => {
      const {value} = event.target;
      setQuery(event.target.value);
      const filteredResults = actions.filter(action => 
        action.toLowerCase().includes(value.toLowerCase()));
      setSearchResults(filteredResults) ;
      setShowDropdown(filteredResults.length > 0); 
      console.log(query)
    };
    
    const handleActionSelect = (action: string) => {
      localStorage.setItem('selectedAction', action);
      navigate('/Create-a-Task', { state: { action}});
    }

    const handleSearch = () => {
      console.log('Search query:', query);
      // onSearch(query);
    };

  return (
    <div className="home-container">
      <div className="top-area">
        <h1 id="site-header">
            taskrabbit
            </h1>
         <div className="buttons">
            <Link to="/Services" className="button" >
                Services
            </Link>
            <Link to="/Header"  
            className="button" 
            >
            Sign up / Log in
            </Link>

            <button id="be-a-tasker">
            <Link to="/Be-a-Tasker" >
            Become a Tasker
            </Link>  
            </button>
            </div> 
      </div>
      <div className='slogan'>
                Book trusted help <br />
                for home tasks
      </div> 
      <div className='searchField'>
      <input
        id="field"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="What do you need help with?"
        ref={searchFieldRef}
      />
              {showDropdown && (
                <div className="dropdown">
                    {searchResults.map((action, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => handleActionSelect(action)}
                    >
                       {action}
                  </div>
               ))}
          </div>
       )}
             <button id="search" onClick={handleSearch}>
      < i className="material-icons">search</i> 
        </button>
      </div>
      
      <div className="categoryBar">
          <div className="category">
            <div id="categoryIcon">
            <i className="material-icons">handyman</i> 
            </div >
            <div id="categoryName">
              Assembly
            </div>
          </div>
          <div className="category">
            <div id="categoryIcon">
            < i className="material-icons">forklift</i> 
            </div >
            <div id="categoryName">
              Mounting
            </div>
          </div>
          <div className="category">
            <div id="categoryIcon"> 
           < i className="material-icons">local_shipping</i> 
            </div >
            <div id="categoryName">
              Moving
            </div>
          </div>
          <div className="category">
            <div id="categoryIcon">
            <i className="material-icons">cleaning_services</i> 
            </div >
            <div id="categoryName">
              Cleaning
            </div>
          </div>
          <div className="category">
            <div id="categoryIcon">
            <i className="material-icons">park</i> 
            </div >
            <div id="categoryName">
              Outdoor Help
            </div>
          </div>
          <div className="category">
            <div id="categoryIcon">
            <i className="material-icons">construction</i> 
            </div >
            <div id="categoryName">
              Home Repairs
            </div>
          </div>
          <div className="category">
            <div id="categoryIcon">
            <i className="material-icons">imagesearch_roller</i> 
            </div >
            <div id="categoryName">
              Painting
            </div>
          </div>
          <div className="category">
            <div id="categoryIcon">
            <i className="material-icons">workspace_premium</i> 
            </div >
            <div id="categoryName">
              Trending
            </div>
          </div>
      </div>


      <button id="help">
                 <p style={{
                    border: '2px solid white',
                    borderRadius: '50%',
                    color: 'white',
                    marginTop: '2px',
                    width: '20px',
                 }}>?</p> 
                 <p style={{
                    color: 'white',
                    marginTop: '-40px',
                    marginLeft: '30px',
                 }}>Help</p>
            </button>
    </div>
  )
}

export default Home

