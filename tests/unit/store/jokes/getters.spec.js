import { expect } from 'chai'
import store from './../../../../src/store/modules/jokes'

describe('store.jokes.getters', () => {
    let state = {
        jokesList: ['test joke 1', 'test joke 2'],
        favouritesList: ['test favourite 1', 'test favourite 2', 'test favourite 3'],
        jokesListLimit: 10,
        favouritesListLimit: 10,
        timerSetUp: 5000,
        timerState: false
    }
    it('GET_FAVOURITES_LIST should return favouritesList from state', () => {
        let getterResult = store.getters.GET_FAVOURITES_LIST(state)
        expect(state.favouritesList).to.eql(getterResult)
    })
    it('GET_JOKES_LIST should return jokesList from state', () => {
        let getterResult = store.getters.GET_JOKES_LIST(state)
        expect(state.jokesList).to.eql(getterResult)
    })
    it('GET_JOKES_LIST_LIMIT should return jokes list limit from state', () => {
        let getterResult = store.getters.GET_JOKES_LIST_LIMIT(state)
        expect(state.jokesListLimit).to.eql(getterResult)
    })
    it('GET_JOKES_FAVOURITES_LIST_LIMIT should return favourites jokes list limit from state', () => {
        let getterResult = store.getters.GET_JOKES_FAVOURITES_LIST_LIMIT(state)
        expect(state.favouritesListLimit).to.eql(getterResult)
    })
    it('GET_TIMER_SETUP should return timmer setup from state', () => {
        let getterResult = store.getters.GET_TIMER_SETUP(state)
        expect(state.timerSetUp).to.eql(getterResult)
    })
    it('GET_TIMER_STATE should return timmer status from state', () => {
        let getterResult = store.getters.GET_TIMER_STATE(state)
        expect(state.timerState).to.eql(getterResult)
    })

})