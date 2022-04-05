import React, { useCallback, useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

import { ChartWrapper, Bar } from "./styledComponents";

type VerticalBarChartProps = { data: number[] } | undefined;

export const VerticalBarChart: React.FC<VerticalBarChartProps> = ({ data }) => {
  const countBarHeight = useCallback(
    (chartHeight: number, barValue: number, maxBarValue: number): number => {
      if (maxBarValue > chartHeight) {
        return (chartHeight * barValue) / maxBarValue;
      }
      return barValue;
    },
    []
  );

  return useMemo(() => {
    if (
      !data.length ||
      data.reduce((partialSum, a) => partialSum + a, 0) === 0
    ) {
      return <p>There is no data to show chart</p>;
    }

    if (!data.every((elem) => typeof elem === "number")) {
      return <p>Only numbers in data</p>;
    }

    const minValue = Math.min.apply(null, data);

    if (minValue < 0) {
      return <p>Please only positive values</p>;
    }

    const maxBarValue = Math.max.apply(null, data);
    const chartHeight = 300;

    return (
      <ChartWrapper chartHeight={chartHeight}>
        {data.map((bar) => (
          <Bar
            key={uuidv4()}
            barHeight={countBarHeight(chartHeight, bar, maxBarValue)}
          />
        ))}
      </ChartWrapper>
    );
  }, [data, countBarHeight]);
};
