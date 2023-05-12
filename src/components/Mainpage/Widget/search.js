import './search.css';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    //just the search bar and its functionality
    return (
        <div className='search-wrapper'>
            <SearchIcon fontSize='medium' className='mui-search'/>
            <input className='text-input' placeholder='Search Twitter'></input>
        </div>
    )
}

export default Search;