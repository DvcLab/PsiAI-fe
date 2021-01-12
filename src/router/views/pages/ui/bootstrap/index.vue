<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Alerts from './alerts'
import Toasts from './toasts'
import Buttons from './buttons'
import Badges from './badges'
import Cards from './cards'
import Dropdowns from './dropdowns'
import Tabs from './tabs'
import Accordions from './accordions'
import Modals from './modals'
import ProgressBars from './progressbars'
import Popovers from './popovers'
import Tooltips from './tooltips'
import Spinners from './spinners'

/**
 * UI elements
 */
export default {
	page: {
		title: 'Bootstrap UI',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout,
		PageHeader,
		Alerts,
		Toasts,
		Buttons,
		Badges,
		Cards,
		Dropdowns,
		Tabs,
		Accordions,
		Modals,
		ProgressBars,
		Popovers,
		Tooltips,
		Spinners,
	},
	data() {
		return {
			title: 'Bootstrap UI',
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
					text: 'Bootstrap UI',
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
		<!-- alerts -->
		<div class="row">
			<div class="col-xl-6">
				<Alerts />
			</div>

			<div class="col-xl-6">
				<Toasts />
			</div>
		</div>

		<!-- buttons -->
		<Buttons />

		<div class="row">
			<div class="col-lg-12">
				<Badges />
			</div>
		</div>
		<!-- end row -->

		<!-- Cards -->
		<div class="row">
			<div class="col-lg-12">
				<Cards />
			</div>
		</div>

		<!-- Dropdowns -->
		<Dropdowns />

		<!-- Tabs -->
		<Tabs />

		<!-- Accordions -->
		<Accordions />

		<!-- Modals -->
		<div class="row">
			<div class="col-lg-12">
				<Modals />
			</div>
		</div>
		<!-- end row -->

		<!-- progress -->
		<ProgressBars />

		<!-- tooltip -->
		<div class="row">
			<div class="col-lg-6">
				<Popovers />
			</div>

			<div class="col-lg-6">
				<Tooltips />
			</div>
		</div>
		<!-- end row -->

		<!-- Spinners -->
		<div class="row">
			<div class="col-lg-12">
				<Spinners />
			</div>
		</div>
	</Layout>
</template>
