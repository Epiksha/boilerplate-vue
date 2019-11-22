import { mount } from '@vue/test-utils';
import Example from './Example.vue';

describe('Component', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(Example);

        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});