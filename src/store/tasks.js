// getter basically returns something from the state.

const state = {
  tasks: {
    Id1: {
      name: "Go to shop",
      completed: false,
      due_date: "2020/11/24",
      due_time: "18.00"
    },
    Id2: {
      name: "Get bananas",
      completed: false,
      due_date: "2020/11/25",
      due_time: "18.30"
    },
    Id3: {
      name: "Get apple",
      completed: false,
      due_date: "2020/11/26",
      due_time: "18.45"
    }
  }
};

const mutations = {
  TaskUpdate: (state, payload) => {
    console.log("payload from mutation");
    Object.assign(state.tasks[payload.id], payload.updates);
    // state.tasks = payload;
    // state.tasks.push(payload);
  }
};

const actions = {
  updateTask({ commit }, payload) {
    commit("TaskUpdate", payload);
  }
};

const getters = {
  todos: state => {
    return state.tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
