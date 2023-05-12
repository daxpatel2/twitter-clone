import './searchbar.css';
import Search from './search.js'

//this will be the nester that holds the bar( probably no functionaluty )

function Searchbar() {
    return (
        <div className='search-box'>
            <Search />
        </div>
    )
}

export default Searchbar;