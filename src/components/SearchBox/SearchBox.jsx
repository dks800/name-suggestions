import './SearchBox.css'

const SearchBox = ({handleNameChange}) => {
    return <div className="search-box-container">
        <input type='text' 
            className='search-input'
            placeholder="Type keywords" onChange={e => handleNameChange(e.target.value)}/>
    </div>
}

export default SearchBox;