import { createStore } from 'vuex';
import userService from '@/services/userService';


let user = localStorage.getItem('user');
let status = localStorage.getItem('status');
let userInfo = localStorage.getItem('userInfo');

if (!user) {
    user = {
        id: -1,
        token: '',
        email: '',
        role: ''
    };
    status = '';
} else {
    try {
        status = JSON.parse(status);
        user = JSON.parse(user);
        userInfo = JSON.parse(userInfo);
    } catch (ex) {
        user = {
            id: -1,
            token: '',
            email: '',
            role: ''
        };
        userInfo = {};
        status = ''

    }
}

// Create a new store instance.
const store = createStore({
    state() {
        return {
            status: status,
            user: user,
            userInfo: userInfo,
        }
    },
    mutations: {
        SET_STATUS: function (state, status) {
            state.status = status;
            localStorage.setItem('status', JSON.stringify(status));
        },
        LOG_USER: function (state, user) {
            state.user = user;
            userService.instance.defaults.headers.common['Authorization'] = user.token;
            localStorage.setItem('user', JSON.stringify(user));
        },
        USER_INFO: function (state, userInfo) {
            console.log(userInfo)
            state.userInfo = userInfo;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        },
        LOGOUT: function (state) {
            state.user = {
                userId: -1,
                token: '',
                email: '',
                role: ''
            }
            state.status = '';
            state.userInfo = '';
            localStorage.removeItem('user');
            localStorage.removeItem('userInfo');
            localStorage.removeItem('status');
        }
    },
    actions: {
        createAccountBetaReader: ({ commit }, userDatas) => {
            commit('SET_STATUS', 'loading');
            return new Promise((resolve, reject) => {
                userService.registerBetaReader(userDatas)
                    .then(function (response) {
                        commit('SET_STATUS', 'created');
                        resolve(response)
                    })
                    .catch(function (error) {
                        commit('SET_STATUS', 'error_register');
                        reject(error)
                    })
            })

        },
        createAccountAuthor: ({ commit }, userDatas) => {
            commit('SET_STATUS', 'loading');
            return new Promise((resolve, reject) => {
                console.log(userDatas)
                userService.registerAuthor(userDatas)
                    .then(function (response) {
                        commit('SET_STATUS', 'created');
                        resolve(response)
                    })
                    .catch(function (error) {
                        commit('SET_STATUS', 'error_register');
                        reject(error)
                    })
            })
        },
        getAuthor: ({ commit }, datas) => {
            commit;
            return new Promise((resolve, reject) => {
                userService.getAuthor(datas)
                    .then((response) => {
                        console.log(response)
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error)
                    })
            });
        },
        getBetaReader: ({ commit }, datas) => {
            commit;
            return new Promise((resolve, reject) => {
                userService.getBetaReader(datas)
                    .then((response) => {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error)
                    })
            });
        },
        loginUser: ({ dispatch, commit }, userDatas) => {
            commit('SET_STATUS', 'loading');
            return new Promise((resolve, reject) => {
                userService.login(userDatas)
                    .then(function (response) {
                        const id = response.data.user_id;
                        const email = userDatas.email;
                        // const token = response.data.token;
                        commit('SET_STATUS', 'login');
                        commit('LOG_USER', {
                            id: id,
                            token: response.data.token,
                            email: email,
                            role: response.data.role
                        });
                        dispatch('getAuthor', id).then((response) => {
                            console.log(response.author);
                            if (!response.author) {
                                dispatch('getBetaReader', id).then((response => {
                                    commit('USER_INFO', response.beta_readers)
                                })).catch((error) => console.log(error))
                            } else {
                                commit('USER_INFO', response.author)
                            }

                        }).catch((error) => console.log(error));
                        resolve(response)

                    }).catch(function (error) {
                        commit('SET_STATUS', 'error_login');
                        reject(error)
                    })
            })
        },

    },
})

export default store;