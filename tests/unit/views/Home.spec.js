import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Home from './../../../src/views/Home.vue'
import Vuex from 'vuex'
import definedStore from './../../../src/store/modules/jokes'
import Vuetify from 'vuetify'

describe('Home.vue', () => {
	Vue.use(Vuetify)
	Vue.use(Vuex)

	let wrapper
	let store

	beforeEach(() => {
		store = new Vuex.Store({
			state: definedStore.state,
			getters: definedStore.getters,
		})
		wrapper = shallowMount(Home, { store })
	})
	it('should renders without erros', () => {
		expect(wrapper.isVueInstance()).to.eql(true);
	});

})