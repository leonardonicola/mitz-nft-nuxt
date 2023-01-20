import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import index from './pages/colecoes/index.vue'

describe('Colecoes', () => {
  const wrapper = mount(index, {
    stubs: {
      NuxtLink: true,
    },
  })

  vi.mock('../utils/nftCollectionList.ts', () => {
    return {
      collections: {
        collec: [
          {
            name: 'nft name',
            url: 'nft.webp',
            creator: 'Bored Ape',
            price: 0.45,
            link: 'link.com',
          },
        ],
      },
    }
  })

  it('should go to collection page', () => {
    expect(wrapper.find('nuxtlink').attributes('to')).toEqual(
      '/colecoes/boredape'
    )
  })

  it('should open new window with opensea.io', () => {
    expect(wrapper.find('a').attributes('target')).toEqual('_blank')
    expect(wrapper.find('a').attributes('href')).toEqual('https://opensea.io')
  })
})
