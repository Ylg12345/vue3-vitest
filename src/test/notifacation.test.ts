import { shallowMount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';

import Notification from '../components/Notification.vue';
import { NOTIFICATION } from '../type';

describe('notification.vue', () => {
  test('renders the correct style for error', () => {
    const type = NOTIFICATION.ERROR;
    const wrapper = shallowMount(Notification, {
      props: { type, message: 'ylg' },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--error"])
    );
  });

  test('renders the correct style for success', () => {
    const type = NOTIFICATION.SUCCESS;
    const wrapper = shallowMount(Notification, {
      props: { type, message: 'ylg' },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--success"])
    );
  });

  test('renders the correct style for info', () => {
    const type = NOTIFICATION.INFO;
    const wrapper = shallowMount(Notification, {
      props: { type, message: 'ylg' },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--info"])
    );
  });

  test('slides down when message is not empty', () => {
    const type = NOTIFICATION.SUCCESS;
    const message = 'ylg';
    const wrapper = shallowMount(Notification, {
      props: { type, message },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--slide"])
    );
  });

  test('slides down when message is empty', () => {
    const type = NOTIFICATION.SUCCESS;
    const message = '';
    const wrapper = shallowMount(Notification, {
      props: { type, message },
    });
    expect(wrapper.classes('notification--slide')).toBe(false);
  });

  test('render message when message is not empty', () => {
    const type = NOTIFICATION.SUCCESS;
    const message = '';

    const wrapper = shallowMount(Notification, {
      props: { type, message },
    });

    expect(wrapper.find('.notification__text').text()).toBe(message);
  })

  test('emits event when close button is clicked', async () => {
    const type = NOTIFICATION.SUCCESS;
    const message = 'ylg';

    const wrapper = shallowMount(Notification, {
      props: { type, message },
    });
    const closeButton = wrapper.find('.notification__button');
    await closeButton.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('clear-notification');
  });
});