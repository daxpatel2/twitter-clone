import React from 'react';
import DataFetcher from './DataFetcher';

function WidgetNews() {
  return (
    <div>
      <DataFetcher category={"Business"} />
      <DataFetcher category={"Technology"} />
      <DataFetcher category={"Politics"} />
      <DataFetcher category={"Science"} />
    </div>
  );
}
export default WidgetNews;