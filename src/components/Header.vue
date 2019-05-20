<template>
	<v-toolbar app height="64px">
		<v-img class="headerImage" max-width="56px" :src="imageUrl"></v-img>
		<v-toolbar-title class="headline text-uppercase">
			<span>Chuck Norris</span>
			<span class="font-weight-light">&nbsp;Jokes App</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-switch rigth v-model="timerState" label="Launch Timmer"></v-switch>
			<v-btn v-if="auth" flat @click="logOut">Log Out</v-btn>
		</v-toolbar-items>
		<v-toolbar-items class="hidden-md-and-up">
			<v-menu bottom left>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>more_vert</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-tile>
						<v-switch flat rigth v-model="timerState" label="Launch Timmer"></v-switch>
					</v-list-tile>
					<v-list-tile v-if="auth">
						<v-btn flat @click="logOut">Log Out</v-btn>
					</v-list-tile>
				</v-list>
			</v-menu>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
export default {
	data() {
		return {
			timerProcess: "",
			imageUrl: require("@/assets/chuck-norris.png")
		};
	},
	computed: {
		timerState: {
			get() {
				return this.$store.getters.GET_TIMER_STATE;
			},
			set() {
				return this.$store.commit("TOGGLE_TIMER");
			}
		},
		auth() {
			return this.$store.getters.GET_AUTH_STATE;
		}
	},
	watch: {
		timerState() {
			this.timerState ? this.setTimer() : clearInterval(this.timerProcess);
		}
	},
	methods: {
		setTimer() {
			this.$store.dispatch(
				"SET_GLOBAL_MESSAGE",
				"Timer launched. Will try to add a new joke every: " +
					this.$store.getters.GET_TIMER_SETUP / 1000 +
					" seconds."
			);
			this.timerProcess = setInterval(() => {
				if (
					this.$store.getters.GET_JOKES_LIST.length <
					this.$store.getters.GET_JOKES_LIST_LIMIT
				) {
					this.$store.dispatch("GET_JOKES", 1);
				} else {
					this.$store.dispatch("SET_GLOBAL_MESSAGE", "Timer stoped");
					clearInterval(this.timerProcess);
					this.timerState = false;
				}
			}, this.$store.getters.GET_TIMER_SETUP);
		},
		logOut() {
			this.$store.commit("LOG_OUT");
		}
	}
};
</script>

<style>
.v-toolbar .v-input {
	margin-top: 16px;
}
</style>
