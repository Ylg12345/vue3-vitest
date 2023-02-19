import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  test('render message when message is not empty', () => {
    const msg = 'ylg';
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg
      }
    });

    expect(wrapper.find('h1').text()).toBe(msg);
  });

  test('test whether the click event is triggered', async () => {
    const wrapper = shallowMount(HelloWorld);
    const button = wrapper.find('.card button');

    await button.trigger('click');
    const afterText = button.text();
    expect(afterText).toContain(1);
  });
});