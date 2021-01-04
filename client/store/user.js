export const state = () => ({
    user: null
});

export const getters = {
    getUser(state) {
        return state.user;
    }
};

  
export const mutations = {
    login(context, user) {
      state.user = user;
    },
  
    logout(context) {
      state.user = null;
    }
};
  
  export const actions = {};