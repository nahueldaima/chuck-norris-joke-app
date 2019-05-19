<template>
  <v-toolbar app height="64px">
    <v-toolbar-title class="headline text-uppercase">
      <span>Chuck Norris </span>
      <span class="font-weight-light">Jokes App</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
	<v-toolbar-items>
		<v-switch rigth v-model="timerState" label="Launch Timmer"></v-switch>
	</v-toolbar-items>
  </v-toolbar>

</template>

<script>
export default {
  data() {
    return {
      timerProcess: ""
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
    }
  },
  watch: {
    timerState() {
      this.timerState ? this.setTimer() : clearInterval(this.timerProcess);
    }
  },
  methods: {
    setTimer() {
        this.$store.dispatch('SET_GLOBAL_MESSAGE', 'Timer launched. Will try to add a new joke every: ' + (this.$store.getters.GET_TIMER_SETUP/1000) + ' seconds.');
        this.timerProcess = setInterval(() => {
			if(this.$store.getters.GET_JOKES_LIST.length < this.$store.getters.GET_JOKES_LIST_LIMIT) {
                this.$store.dispatch("GET_JOKES", 1);
			} else {
                this.$store.dispatch('SET_GLOBAL_MESSAGE', 'Timer stoped');
				clearInterval(this.timerProcess);
				this.timerState = false;
			}
        }, this.$store.getters.GET_TIMER_SETUP);
    }
  }
};
</script>

<style>
.v-toolbar .v-input {
	margin-top:16px;
}
</style>
