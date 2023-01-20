import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Influencers from './components/Influencers.vue'

describe('Influencers', () => {
  const wrapper = mount(Influencers)

  it('should hide button when clicked itself', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

})
