import { mount } from '@vue/test-utils'
import { describe, it, test, expect } from 'vitest'
import TheSection from './components/TheSection.vue'

describe('Hero', () => {
  const wrapper = mount(TheSection, {
    stubs: {
      NuxtLink: true,
    },
  })

  it('should render hero img correctly', () => {
    expect(wrapper.find('img').attributes('src')).toEqual('/nfts/nft.jpg')
  })

  test('button should redirect to colecoes', () => {
    expect(wrapper.find('nuxtlink').attributes('to')).toEqual('/colecoes')
  })
})
