import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import List from './../../../src/components/List.vue'
import Vuetify from 'vuetify'

describe('List.vue', () => {
    Vue.use(Vuetify)

    it('should renders without erros', () => {
        let wrapper = shallowMount(List);
        expect(wrapper.isVueInstance()).to.eql(true);
    });

    it('should output props content on html', () => {
        let items = [{ id: 1, joke: 'test joke 1' }, { id: 2, joke: 'test joke 2' }];
        let listActionIcon = 'star';
        let headerIcon = 'add_comment';
        let headerColor = 'blue';
        let wrapper = shallowMount(List, {
            propsData: {
                items,
                listActionIcon,
                headerIcon,
                headerColor
            }
        })
        expect(wrapper.find('v-card-text-stub').text()).to.eql(items[0].joke);
        expect(wrapper.find('v-toolbar-stub').props('color')).to.eql(headerColor);
        expect(wrapper.html()).to.include(headerIcon);
        expect(wrapper.html()).to.include(listActionIcon);
    });

    it('should output same amount of items in the list as those on the prop', () => {
        let items = [{ id: 1, joke: 'test joke 1' }, { id: 2, joke: 'test joke 2' }];
        let wrapper = shallowMount(List, {
            propsData: {
                items
            }
        })
        expect(wrapper.findAll('v-card-text-stub').length).to.eql(items.length);
    });

    it('should output default props content if props were no set', () => {
        let wrapper = shallowMount(List);
        expect(wrapper.props('items')).to.exist;
        expect(wrapper.props('listActionIcon')).to.exist;
        expect(wrapper.props('headerIcon')).to.exist;
        expect(wrapper.props('headerColor')).to.exist;
    });

    it('should emit event on header button clikecd', () => {
        let headerIcon = 'add_comment';
        let wrapper = mount(List, {
            propsData: {
                headerIcon
            }
        })
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('button-clicked')).to.exist;
    });

    it('should emit event with item details on item clicked', () => {
        let items = [{ id: 1, joke: 'test joke 1' }];
        let wrapper = mount(List, {
            propsData: {
                items
            }
        })
        wrapper.find('.listItem').trigger('click');
        expect(wrapper.emitted('element-clicked').length).to.eql(1);
        expect(wrapper.emitted('element-clicked')[0][0]).to.eql(items[0]);
    });
})