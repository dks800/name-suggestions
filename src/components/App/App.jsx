import React, { useState } from 'react'
import Header from '../Header/Header'
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'

function App() {
    const getNames = require("@rstacruz/startup-name-generator");
    let [headerExpanded, setHeaderExpanded] = useState(true);
    let [resultSet, setResultSet] = useState([]);
    const handleNameChange = input => {
        let expandVal;
        if(input.length > 0) {
            expandVal = false;
            setResultSet(getNames(input))
        } else {
            expandVal = true;
            setResultSet([]);
        }
        setHeaderExpanded(expandVal);
    }
    return (
        <div className="App">
            <Header headerExpanded={headerExpanded}/>
            <SearchBox handleNameChange={handleNameChange} />
            <ResultsContainer resultSet={resultSet} />
        </div>
    )
}

export default App
