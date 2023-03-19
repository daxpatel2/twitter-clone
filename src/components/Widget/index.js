import './index.css';
import WidgetNews from './widget_news';

function Widget() {
    return (
        <div className="widget">
            <div className="blocks">
                <div className="items">
                    <h2 className="whats-happeneing">What's happening</h2>
                    <WidgetNews />
                </div>
            </div>
            <p className="copyright-stuff">Made with love by @algorithmpirate</p>
        </div>
    )
}

export default Widget;

//<WidgetNews text="Technology" category="technology"/> <WidgetNews text="Sports" category="sports"/> <WidgetNews text="Trending" category="trending"/>