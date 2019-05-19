
import axios from './../../axios'

const state = {
    jokesList: [],
    favouritesList: [],
    jokesListLimit: 10,
    favouritesListLimit: 10,
    timerSetUp: 5000, //in ms
    timerState: false
}

const mutations = {
    SET_JOKE_INTO_LIST(state, joke) {
        state.jokesList.push(joke)
    },
    SET_FAVOURITE_JOKE(state, joke) {
        state.favouritesList.push(joke)
        state.jokesList = state.jokesList.filter(item => item.id !== joke.id);
    },
    UNSET_FAVOURITE_JOKE(state, joke) {
        if (state.favouritesList.length > 0) {
            state.favouritesList = state.favouritesList.filter(item => item.id !== joke.id);
        }
    },
    TOGGLE_TIMER(state) {
        state.timerState = !state.timerState;
    }
}

const actions = {
    GET_JOKES({ commit, state, dispatch }, amount) {
        if (amount === undefined || amount == 0) dispatch('CREATE_GLOBAL_ERROR', "You have to specify the amount of jokes you want to fetch from the API");
        else {
            axios.get('http://api.icndb.com/jokes/random/' + amount)
                .then(res => {
                    if (Array.isArray(res.value)) {
                        res.value.forEach(joke => {
                            (state.jokesList.length < state.jokesListLimit) ? commit('SET_JOKE_INTO_LIST', joke) : dispatch('CREATE_GLOBAL_ERROR', "Maximum number of Jokes Reached.");
                        })
                    }
                })
                .catch(e => {
                    dispatch('CREATE_GLOBAL_ERROR', "An error has occured while trying to fetch jokes from the API.");
                    console.log(e)
                })
        }
    },
    ADD_FAVOURITE_JOKE({ commit, state, dispatch }, joke) {
        let duplicatesCheck = state.favouritesList.some(v => {
            joke.id === v.id;
        })
        if (state.favouritesList.length < state.favouritesListLimit) {
            (!duplicatesCheck) ? commit('SET_FAVOURITE_JOKE', joke) : dispatch('CREATE_GLOBAL_ERROR', "The Joke Id:" + joke.id + ", already exists on the favourite list and duplicates are not allowed.");
        } else dispatch('CREATE_GLOBAL_ERROR', "Maximum number of Jokes Reached.");
    },
}

const getters = {
    GET_FAVOURITES_LIST(state) {
        return state.favouritesList
    },
    GET_JOKES_LIST(state) {
        return state.jokesList
    },
    GET_JOKES_LIST_LIMIT(state) {
        return state.jokesListLimit
    },
    GET_JOKES_FAVOURITES_LIST_LIMIT(state) {
        return state.favouritesListLimit
    },
    GET_TIMER_SETUP(state) {
        return state.timerSetUp
    },
    GET_TIMER_STATE(state) {
        return state.timerState
    },
};


export default {
    state,
    getters,
    mutations,
    actions
};
