import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import NftCard from './components/nft/NftCard.vue'

describe('NFT Card', () => {
  const wrapper = mount(NftCard, {
    props: {
      title: 'CloneX',
      price: 5.83,
      creator: 'Me',
      url: '/url',
      link: 'link.com',
    },
  })

  test('img src should match props data', () => {
    expect(wrapper.find('img').attributes('src')).toEqual('/url')
  })

  test('title of NFT should match props data', () => {
    expect(wrapper.find('[data-test="nft-title"]').text()).toEqual('CloneX')
  })

  test('creator s name should match props data', () => {
    expect(wrapper.find('[data-test="creator"]').text()).toEqual('@Me')
  })

  test('price should match props data', () => {
    expect(wrapper.find('[data-test="price"]').text()).toEqual('5.83 ETH')
  })

  test('anchor tag href should match props data', () => {
    expect(wrapper.find('a').attributes('href')).toEqual('link.com')
  })

  test('anchor tag should open in new window', () => {
    expect(wrapper.find('a').attributes('target')).toEqual('_blank')
  })
})
