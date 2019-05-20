<template>
	<v-app>
		<Header/>
		<v-content>
			<Login :display="display"/>
			<Home/>
			<Snackbar/>
		</v-content>
		<Footer/>
	</v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Snackbar from "./components/SnackBar";
import Home from "./views/Home";
import Login from "./components/Login";

export default {
	name: "App",
	components: {
		Header,
		Footer,
		Home,
		Snackbar,
		Login
	},
	computed: {
		display() {
			return !this.$store.getters.GET_AUTH_STATE;
		}
	},
	beforeCreate() {
		this.$store.commit("STORE_INIT");
	}
};
</script>
