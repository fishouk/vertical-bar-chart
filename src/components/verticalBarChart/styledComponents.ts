import styled from "@emotion/styled";

export const ChartWrapper = styled("div")<{ chartHeight: number }>(
  ({ chartHeight }) => ({
    width: "100%",
    height: `${chartHeight}px`,
    overflowX: "auto",
    display: "flex",
    alignItems: "flex-end",
    gap: "10px",
  })
);

export const Bar = styled("div")<{ barHeight: number }>(
  ({ theme, barHeight }) => ({
    width: "50px",
    height: `${barHeight}px`,
    flexShrink: "0",
    backgroundColor: theme.colors.blue,
  })
);
