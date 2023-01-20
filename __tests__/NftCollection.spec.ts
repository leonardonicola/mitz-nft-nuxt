import { mount } from '@vue/test-utils'
import { describe, it, test, expect } from 'vitest'
import NftCollection from './components/nft/NftCollection.vue'

describe('NFT Collection', () => {
  const wrapper = mount(NftCollection, {
    props: {
      url: 'hape.png',
      creator: 'Prime Ape',
    },
  })

  it('should match collection creator name', () => {
    expect(wrapper.find('[data-test="creator"]').text()).toEqual('Prime Ape')
  })

  it('should match img alt', () => {
    expect(wrapper.find('img').attributes('alt')).toEqual('Prime Ape')
  })

  test('img src path should be creator name in lower case and without whitespaces', () => {
    expect(wrapper.find('img').attributes('src')).toEqual('/nfts/primeape/hape.png')
  })
})
