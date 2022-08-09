import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const valuesArr = props.dataPoints.map(dataPoint => dataPoint.value)

  const totMax = Math.max(...valuesArr)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
