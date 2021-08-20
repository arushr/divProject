import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

import CSVFile from '../assets/final.csv';

const GraphContainer = styled.div`
  background-color: white;
  height: 60vh;
  width: 100vh;
`;

const Graph = () => {
  // const width = '400';
  // const height = '100';

  const [csvData, setCsvData] = useState(null);

  const d3Chart = useRef();

  useEffect(() => {
    d3.csv(CSVFile, d3.autoType).then((data) => {
      // First 10 entries are received from the CSV File.
      setCsvData(data.slice(0, 10));
    });
  }, []);

  if (csvData != null) {
    csvData.forEach((d) => {
      d.DateTime = new Date(d.DateTime);
    });
  } else {
    return <pre>Loading!!</pre>;
  }

  return (
    <GraphContainer>
      <svg ref={d3Chart} />
      {console.log(csvData, 'csvData')}
    </GraphContainer>
  );
};

export default Graph;
