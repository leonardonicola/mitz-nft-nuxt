import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Header from './layouts/default.vue'

describe('Header', () => {
  const wrapper = mount(Header, {
    stubs: {
      NuxtLink: true,
    },
  })

  test('logo should redirect to home page', () => {
    expect(wrapper.findAll('nuxtlink')[0].attributes('to')).toEqual('/')
  })

  test('home button should redirect to home page', () => {
    expect(wrapper.findAll('nuxtlink')[1].attributes('to')).toEqual('/')
  })

  test('colecoes button should redirect to home page', () => {
    expect(wrapper.findAll('nuxtlink')[2].attributes('to')).toEqual('/colecoes')
  })

  test('dropdown button should show dropdown menu', async () => {
    expect(wrapper.find('[data-test="dropdown-menu"]').exists()).toBe(false)
    await wrapper.find('[data-test="dropdown-btn"]').trigger('click')
    expect(wrapper.find('[data-test="dropdown-menu"]').exists()).toBe(true)
  })
})
