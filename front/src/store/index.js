import { createStore } from 'vuex';

import userService from '@/services/userService';



// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    actions: {
        createAccountBetaReader: ({ commit }, userDatas) => {
            commit;
            return new Promise((resolve, reject) => {
                userService.registerBetaReader(userDatas)
                    .then(function (response) {
                        resolve(response)
                    })
                    .catch(function (error) {
                        reject(error)
                    })
            })

        },
        createAccountAuthor: ({commit}, userDatas) => {
            commit;
            console.log(userDatas)
            return new Promise((resolve, reject) => {
                userService.registerAuthor(userDatas)
                .then(function(response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error)
                  })
            })
        }
    },
    mutations: {

    }
})

export default store;