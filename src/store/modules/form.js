import request from '../../utils/request';
import router from '../../router';

const state = {
  step: {
    payAccount: '123456',
  },
};
const actions = {
  async submitStepForm({ commit }, { paylod }) {
    await request({
      url: '/api/form',
      method: 'POST',
      data: paylod,
    });
    commit('saveStepFormData', { paylod });
    router.push('/form/step-form/result');
  },
};
const mutations = {
  saveStepFormData(state, { paylod }) {
    state.step = {
      ...state.step,
      ...paylod,
    };
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
