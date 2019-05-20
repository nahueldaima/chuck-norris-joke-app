import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Header from './../../../src/components/Header.vue'
import Vuex from 'vuex'
import definedStore from './../../../src/store/modules/jokes'
import Vuetify from 'vuetify'

describe('Header.vue', () => {
    Vue.use(Vuetify)
    Vue.use(Vuex)

    let wrapper
    let store

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                jokes: {
                    timerState: false,
                    jokesList: ['testItem', 'testItem2'],
                    jokesListLimit: 3,
                }
            },
            getters: definedStore.getters,
            mutations: definedStore.mutations,
            actions: definedStore.actions
        })
        document.body.setAttribute('data-app', true)
        wrapper = mount(Header, { store })
    })


    it('should renders without erros', () => {
        expect(wrapper.isVueInstance()).to.eql(true);
    });

    it('should toggle state on switch', () => {
        wrapper.find('input').trigger('click');
        expect(wrapper.vm.$store.state.timerState).be.true;
    })
})