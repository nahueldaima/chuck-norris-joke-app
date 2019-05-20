import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Login from './../../../src/components/Login.vue'
import Vuetify from 'vuetify'

describe('Login.vue', () => {
    Vue.use(Vuetify)

    it('should renders without erros', () => {
        let wrapper = shallowMount(Login, {
            props: {
                display: true
            }
        });
        expect(wrapper.isVueInstance()).to.eql(true);
    });
})