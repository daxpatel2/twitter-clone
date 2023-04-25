import './index.css';
import DataFetcher from './DataFetcher';
//find better styling for made with love by @algorithmpirate

function Widget() {
    return (
        <div className="widget">
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
            <p className="copyright-stuff">Made with love by @algorithmpirate</p>
        </div>
    )
}

export default Widget;

