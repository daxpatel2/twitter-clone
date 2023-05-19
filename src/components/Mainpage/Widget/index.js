import './index.css';
import DataFetcher from './DataFetcher';
import Search from './search';
//find better styling for made with love by @algorithmpirate

function Widget() {
    return (
        <div className="widget">
            <Search className='search-bar'/>
            <div className="blocks">
                <div className="items">
                    <h2 className="whats-happeneing">What's happening</h2>
                    <DataFetcher category={"Business"} />
                    <DataFetcher category={"Technology"} />
                    <DataFetcher category={"Politics"} />
                    <DataFetcher category={"Science"} />
                    <p className='see-more'>See More</p>
                </div>
            </div>
            <p className="copyright-stuff">Made with love by @algorithmpirate <br/>
            Not Affiliated with <a href='twitter.com'>Twitter Inc</a><br/>
            Project is for fun only.</p>
        </div>
    )
}

export default Widget;

