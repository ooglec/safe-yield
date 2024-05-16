import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect, useRef } from "react";

// Sample data
const data = [
  { month: "Jan", performance: 75 },
  { month: "Feb", performance: 80 },
  { month: "Mar", performance: 85 },
  { month: "Apr", performance: 90 },
  { month: "May", performance: 92 },
  { month: "Jun", performance: 88 },
  { month: "Jul", performance: 85 },
  { month: "Aug", performance: 80 },
  { month: "Sep", performance: 78 },
  { month: "Oct", performance: 82 },
  { month: "Nov", performance: 90 },
  { month: "Dec", performance: 95 },
];

const Chart = () => {
  const chartRef = useRef<am5xy.XYChart | null>(null);

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    // Create axes
    let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "month",
            renderer: am5xy.AxisRendererX.new(root, {
              minorGridEnabled: true,
              minGridDistance: 100,
            }),
            tooltip: am5.Tooltip.new(root, {}),
          })
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {
                  pan: "zoom",
                })
              })
          );
  

        // Create series
    let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Performance",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "performance",
          categoryXField: "month",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{categoryX}: {valueY}%",
          }),
        })
      );
  
      series.strokes.template.setAll({
        strokeWidth: 3,
        strokeOpacity: 1,
        stroke: am5.color(0xffffff),
      });
  
      series.fills.template.setAll({
        fillOpacity: 0.2,
        fill: am5.color(0xffffff),
        visible: true,
      });
  
    //   // Create cursor
    //   chart.set(
    //     "cursor",
    //     am5xy.XYCursor.new(root, {
    //       behavior: "zoomXY",
    //       xAxis: xAxis,
    //     })
    //   );

    //////////////////////////////////////////////////////////////
    const cursor = chart.set(
        "cursor",
        am5xy.XYCursor.new(root, {
            yAxis: yAxis,
        })
    )
    cursor.lineX.set("visible", false)

    cursor.lineY.setAll({
        stroke: am5.color(0xffffff),
        strokeWidth: 1,
        // strokeDasharray: [5],
        strokeOpacity: 0.3,
    })

    cursor.lineX.setAll({
        fill: am5.color(0xffffff),
        visible: true,
    })

    
                /////// chart gridlines ////////////
                const xRenderer = xAxis.get("renderer")
                xRenderer.grid.template.setAll({
                    stroke: am5.color(0xffffff),
                    strokeWidth: 1,
                    strokeOpacity: 0.45,
                    // strokeDasharray: [5, 5],
                })

                const yRenderer = yAxis.get("renderer")
                yRenderer.grid.template.setAll({
                    stroke: am5.color(0xffffff),
                    strokeWidth: 1,
                    strokeOpacity: 0.42,
                    // strokeDasharray: [5],
                })

                 /////// label color ////////
                 xRenderer.labels.template.setAll({
                    fill: am5.color(0xffffff),
                    fontSize: "0.5em",
                })
                yRenderer.labels.template.setAll({
                    fill: am5.color(0xffffff),
                    fontSize: "1em",
                })

                yRenderer.ticks.template.setAll({
                    // minPosition: 0.1,
                    // maxPosition: 0.9,
                    visible: true,
                })
                yRenderer.labels.template.setAll({
                    // minPosition: 0.1,
                    // maxPosition: 0.9,
                })
/////////////////////////////////////////////////////////////////
   

    // Load data
    series.data.setAll(data);

    // Set chart ref
    chartRef.current = chart;

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>;
};

export default Chart;