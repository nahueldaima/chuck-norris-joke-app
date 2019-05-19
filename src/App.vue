<template>
	<v-app>
		<Header/>
		<v-content>
			<Home/>
			<Snackbar/>
		</v-content>
	</v-app>
</template>

<script>
import Header from "./components/Header";
import Snackbar from "./components/SnackBar";
import Home from "./views/Home";

export default {
	name: "App",
	components: {
		Header,
		Home,
		Snackbar
	},
	data() {
		return {
			//
		};
	},
	beforeCreate() {
		this.$store.commit("initialiseStore");
	}
};
</script>
