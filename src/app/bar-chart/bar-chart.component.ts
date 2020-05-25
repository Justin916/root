import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartDataSets, ChartType } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";

@Component({
    selector: "app-bar-chart",
    templateUrl: "./bar-chart.component.html",
    styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent implements OnInit {
    widgets = {
        widget2: {
            conversion: {
                value: 492,
                ofTarget: 13,
            },
            chartType: "bar",
            datasets: [
                {
                    label: "Conversion",
                    data: [221, 428, 492, 471, 413, 344, 294],
                },
            ],
            labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            colors: [
                {
                    borderColor: "#42a5f5",
                    backgroundColor: "#42a5f5",
                },
            ],
            options: {
                spanGaps: false,
                legend: {
                    display: false,
                },
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 24,
                        left: 16,
                        right: 16,
                        bottom: 16,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks: {
                                min: 100,
                                max: 500,
                            },
                        },
                    ],
                },
            },
        },
    };

    constructor() {}

    ngOnInit() {}
}
