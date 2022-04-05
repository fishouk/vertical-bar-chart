import React from "react";

import { css } from "@emotion/css";

import { VerticalBarChart } from "components/verticalBarChart";
import {
  chartData1,
  chartData2,
  chartData3,
  chartData4,
  chartData5,
} from "data/chart";

export const PageHome: React.FC = () => {
  return (
    <div
      className={`container ${css`
        margin-top: 50px;
        margin-bottom: 50px;
      `}`}
    >
      <h1>Vertical bar chart examples</h1>
      <p
        className={css`
          margin: 25px 0;
        `}
      >
        Hello, here you can see some examples of usage for vertical bar charts.
      </p>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          gap: 35px;
        `}
      >
        <div>
          <p>Example - chart with data</p>
          <VerticalBarChart data={chartData1} />
        </div>
        <div>
          <p>Example - chart with lot of data</p>
          <VerticalBarChart data={chartData2} />
        </div>
        <div>
          <p>Example - chart with empty data</p>
          <VerticalBarChart data={chartData3} />
        </div>
        <div>
          <p>Example - chart with zero data</p>
          <VerticalBarChart data={chartData4} />
        </div>
        <div>
          <p>Example - chart with negative data</p>
          <VerticalBarChart data={chartData5} />
        </div>
      </div>
    </div>
  );
};
