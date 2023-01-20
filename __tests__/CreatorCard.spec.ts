import { mount } from '@vue/test-utils'
import { describe, test, expect} from 'vitest'
import CreatorCard from './components/CreatorCard.vue'

describe('Creator Card', () => {
  const wrapper = mount(CreatorCard, {
    props: {
      name: 'Tyler',
      numOfArts: '5',
      phrase: 'Aww you look malnourished',
      photo: 'tyler.webp',
    },
  })

  test('img src should have correct path', () => {

    expect(wrapper.find('img').attributes('src')).toEqual('/influencers/tyler.webp')
  })

  test('name text should match props data', () => {
    expect(wrapper.find('[data-test="influencer-name"]').text()).toEqual('Tyler')
  })

  test('number of nft arts owned should match props data', () => {
    expect(wrapper.find('[data-test="num-arts"]').text()).toEqual("5 NFT's")
  })

  test('phrase text should match props data', () => {
    expect(wrapper.find('p').text()).toEqual('"Aww you look malnourished"')
  })

  test('number of nft arts owned should have bold font', () => {
    expect(wrapper.find('[data-test="num-arts"]').classes()).toContain("font-bold")
  })
})
