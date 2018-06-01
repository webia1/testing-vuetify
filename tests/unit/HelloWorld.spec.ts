import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe ('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld);
  const vm = wrapper.vm;

  afterEach(() => {
    vm.$destroy();
    jest.clearAllMocks();
  });

  describe('Props Message', () => {
    it('renders props.msg when passed', () => {
      const msg = 'new message';
      wrapper.setProps({ msg });
      expect(wrapper.text()).toMatch(msg);
    });
  });
});
