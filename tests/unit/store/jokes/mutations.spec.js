import { expect } from 'chai'
import store from './../../../../src/store/modules/jokes'

describe('store.jokes.mutations', () => {
    let state = {
        jokesList: [],
        favouritesList: [],
        jokesListLimit: '',
        favouritesListLimit: '',
        timerSetUp: '',
        timerState: false
    }

    it('SET_JOKE_INTO_LIST should add a joke to jokesList into store when commited', () => {
        store.mutations.SET_JOKE_INTO_LIST(state, 'joke Example')
        expect(state.jokesList.length).to.eql(1)
    })

    it('SET_FAVOURITE_JOKE should add a joke to favourites jokes list into store when commited', () => {
        store.mutations.SET_FAVOURITE_JOKE(state, 'favourite joke Example')
        expect(state.favouritesList.length).to.eql(1)
    })

    it('UNSET_FAVOURITE_JOKE should remove a joke from favourites jokes list in store when commited', () => {
        state.favouritesList = [];
        state.favouritesList.push({ id: 1, joke: 'joke example 1' });
        state.favouritesList.push({ id: 2, joke: 'joke example 2' });
        store.mutations.UNSET_FAVOURITE_JOKE(state, { id: 1, joke: 'joke example 1' });
        expect(state.favouritesList.length).to.eql(1)
    })

    it('TOGGLE_TIMER should toggle timer state in store when commited', () => {
        store.mutations.TOGGLE_TIMER(state)
        expect(state.timerState).to.true
    })
})
