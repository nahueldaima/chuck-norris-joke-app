<template>
	<v-snackbar v-model="showAlert" bottom :color="alertType" left multi-line :timeout="timeout">
		{{ message }}
		<v-btn color="white" flat @click="showAlert = false">Close</v-btn>
	</v-snackbar>
</template>
<script>
export default {
	name: "Snackbar",
	data() {
		return {
			snackbar: false,
			mode: "",
			timeout: 4000
		};
	},
	computed: {
		showAlert: {
			get() {
				return this.$store.getters.SHOW_GLOBAL_ALERT.status;
			},
			set() {
				this.$store.commit("HIDE_GLOBAL_ALERT");
			}
		},
		alertType() {
			return this.$store.getters.SHOW_GLOBAL_ALERT.type;
		},
		message() {
			return this.$store.getters.SHOW_GLOBAL_ALERT.message || null;
		}
	}
};
</script>
