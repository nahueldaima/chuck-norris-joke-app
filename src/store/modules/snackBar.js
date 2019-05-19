

const state =  {
    alertState: false,
    alertMessage: null,
    alertType: 'success'
}

const mutations = {
    NEW_ERROR(state, message){
        state.alertState = true;
        state.alertType = 'error';
        state.alertMessage = message;
    },
    NEW_MESSAGE(state, message){
        state.alertState = true;
        state.alertType = 'success';
        state.alertMessage = message;
    },
    HIDE_GLOBAL_ALERT(state){
        state.alertState = false;
    }
}

const actions = {
    CREATE_GLOBAL_ERROR({commit}, message){
        commit('NEW_ERROR', message);
    },
    SET_GLOBAL_MESSAGE({commit}, message){
        commit('NEW_MESSAGE', message);
    }
}

const getters = {
    SHOW_GLOBAL_ALERT(state){
        return {
            status: state.alertState,
            message: state.alertMessage,
            type: state.alertType
        }
    }
};


export default {
    state,
    getters,
    mutations,
    actions
};
