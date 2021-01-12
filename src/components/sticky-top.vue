<script>
export default {
	props: {
		top: {
			type: Number,
			default: 10,
		},
		scrollY: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			myStyle: { position: 'relative' },
			originalTop: 0,
		}
	},
	watch: {
		scrollY(newValue) {
			const newTop = this.scrollY + this.top - this.originalTop

			if (newTop > 0) {
				this.$set(this.myStyle, 'top', `${newTop}px`)
			} else {
				this.$delete(this.myStyle, 'top')
			}
		},
	},
	mounted() {
		this.originalTop = this.$el.getBoundingClientRect().top
	},
}
</script>
<template>
	<div :style="myStyle"><slot /></div>
</template>