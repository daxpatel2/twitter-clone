import './search.css';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    //just the search bar and its functionality
    return (
        <div className='search-wrapper'>
            <SearchIcon className='mui-search'/>
            <div className='input-wrapper'>
                <input className='text-input' placeholder='Search Twitter'></input>
            </div>
        </div>
    )
}

export default Search;