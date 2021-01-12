<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import {
	linewithDataChart,
	gradientLineChart,
	stackedAreaChart,
	basicColumChart,
	columnlabelChart,
	mixedChart,
	basicBarChart,
	nagativeValueBarChart,
	lineColumAreaChart,
	multipleYAxisChart,
	simpleBubbleChart,
	dBubbleChart,
	scatterXYChart,
	scatterChart,
	simplePieChart,
	gradientDonutChart,
	patternedDonutChart,
	basicRadialBarChart,
	multipleRadialBars,
	strokedCircularGuage,
} from './data-chart'

export default {
	page: {
		title: 'Charts',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout, PageHeader },
	data() {
		return {
			linewithDataChart: linewithDataChart,
			gradientLineChart: gradientLineChart,
			stackedAreaChart: stackedAreaChart,
			basicColumChart: basicColumChart,
			columnlabelChart: columnlabelChart,
			mixedChart: mixedChart,
			basicBarChart: basicBarChart,
			nagativeValueBarChart: nagativeValueBarChart,
			lineColumAreaChart: lineColumAreaChart,
			multipleYAxisChart: multipleYAxisChart,
			simpleBubbleChart: simpleBubbleChart,
			dBubbleChart: dBubbleChart,
			scatterXYChart: scatterXYChart,
			scatterChart: scatterChart,
			simplePieChart: simplePieChart,
			gradientDonutChart: gradientDonutChart,
			patternedDonutChart: patternedDonutChart,
			basicRadialBarChart: basicRadialBarChart,
			multipleRadialBars: multipleRadialBars,
			strokedCircularGuage: strokedCircularGuage,
			title: 'Charts',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Components',
					href: '/',
				},
				{
					text: 'Charts',
					active: true,
				},
			],
		}
	},
}
</script>

<template>
	<Layout>
		<PageHeader :title="title" :items="items" />
		<div class="row">
			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Line with Data Labels</h4>
						<apexchart
							class="apex-charts"
							height="380"
							type="line"
							:series="linewithDataChart.series"
							:options="linewithDataChart.chartOptions"
						></apexchart>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Gradient Line Chart</h4>
						<apexchart
							class="apex-charts"
							height="380"
							type="line"
							:series="gradientLineChart.series"
							:options="gradientLineChart.chartOptions"
						></apexchart>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xl-6">
				<!-- Portlet card -->
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Stacked Area</h4>
						<apexchart
							class="apex-charts"
							height="380"
							type="area"
							:series="stackedAreaChart.series"
							:options="stackedAreaChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Basic Column Chart</h4>

						<apexchart
							height="380"
							type="bar"
							class="apex-charts"
							:series="basicColumChart.series"
							:options="basicColumChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->

		<div class="row">
			<div class="col-xl-6">
				<!-- Portlet card -->
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Column Chart with Datalabels</h4>
						<apexchart
							height="380"
							type="bar"
							class="apex-charts"
							:series="columnlabelChart.series"
							:options="columnlabelChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Mixed Chart - Line & Area</h4>

						<apexchart
							height="380"
							type="line"
							class="apex-charts"
							:series="mixedChart.series"
							:options="mixedChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->
		<div class="row">
			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Basic Bar Chart</h4>

						<apexchart
							height="380"
							type="bar"
							class="apex-charts"
							:series="basicBarChart.series"
							:options="basicBarChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Bar with Negative Values</h4>

						<apexchart
							height="380"
							type="bar"
							class="apex-charts"
							:series="nagativeValueBarChart.series"
							:options="nagativeValueBarChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->

		<div class="row">
			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Line, Column & Area Chart</h4>
						<apexchart
							height="380"
							type="line"
							class="apex-charts"
							:series="lineColumAreaChart.series"
							:options="lineColumAreaChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Multiple Y-Axis Chart</h4>

						<apexchart
							height="380"
							type="line"
							class="apex-charts"
							:series="multipleYAxisChart.series"
							:options="multipleYAxisChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->

		<div class="row">
			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Simple Bubble Chart</h4>

						<apexchart
							height="380"
							type="bubble"
							class="apex-charts"
							:series="simpleBubbleChart.series"
							:options="simpleBubbleChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">3D Bubble Chart</h4>
						<apexchart
							height="380"
							type="bubble"
							class="apex-charts"
							:series="dBubbleChart.series"
							:options="dBubbleChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->

		<div class="row">
			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Scatter (XY) Chart</h4>
						<apexchart
							class="apex-charts"
							height="380"
							type="scatter"
							:series="scatterXYChart.series"
							:options="scatterXYChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Scatter Chart - Datetime</h4>
						<apexchart
							class="apex-charts"
							height="380"
							type="scatter"
							:series="scatterChart.series"
							:options="scatterChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->

		<div class="row">
			<div class="col-xl-4">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Simple Pie Chart</h4>
						<apexchart
							class="apex-charts"
							height="320"
							type="pie"
							:series="simplePieChart.series"
							:options="simplePieChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-4">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Gradient Donut Chart</h4>
						<apexchart
							class="apex-charts"
							height="320"
							type="donut"
							:series="gradientDonutChart.series"
							:options="gradientDonutChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-4">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Patterned Donut Chart</h4>
						<apexchart
							class="apex-charts"
							height="320"
							type="donut"
							:series="patternedDonutChart.series"
							:options="patternedDonutChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->

		<div class="row">
			<div class="col-xl-4">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Basic RadialBar Chart</h4>
						<apexchart
							class="apex-charts"
							height="350"
							type="radialBar"
							:series="basicRadialBarChart.series"
							:options="basicRadialBarChart.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-4">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Multiple RadialBars</h4>
						<apexchart
							class="apex-charts"
							height="350"
							type="radialBar"
							:series="multipleRadialBars.series"
							:options="multipleRadialBars.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->

			<div class="col-xl-4">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-3">Stroked Circular Guage</h4>
						<apexchart
							class="apex-charts"
							height="350"
							type="radialBar"
							:series="strokedCircularGuage.series"
							:options="strokedCircularGuage.chartOptions"
						></apexchart>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card-->
			</div>
			<!-- end col-->
		</div>
	</Layout>
</template>
