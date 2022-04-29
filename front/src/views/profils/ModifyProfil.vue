<template>
    <form >
        <div class="bloc-1">
            <div class="container-image">
                <img v-if="userInfo.img" :src="infoPost.image" alt="" />
                <img v-else src="../../assets/images/image-default.jpeg" alt="" />
                <label for="img">Votre photo de profil : </label>
                <input type="file" id="img" name="img" accept="image/png, image/jpeg">
            </div>

            <div class="container-info">
                <h2>A propose de moi</h2>
                <div>
                    <p>{{ errorMessage }}</p>
                    <label for="email">Votre email : </label>
                    <input v-model="email" type="email" id="email" name="email" :placeholder="user.email" />
                </div>

                <div>
                    <label for="password">Votre password : </label>
                    <input v-model="password" type="password" id="password" name="password"
                        :placeholder="user.password" />
                </div>

                <div class="full-name">
                    <div>
                        <label for="first-name">Votre prénom : </label>
                        <input v-model="firstName" type="text" id="first-name" name="first-name"
                            :placeholder="userInfo.first_name" />
                    </div>
                    <div>
                        <label for="last-name">Votre nom : </label>
                        <input v-model="lastName" type="text" id="last-name" name="last-name"
                            :placeholder="userInfo.last_name" />
                    </div>
                </div>


                <div>
                    <label for="birthday">Votre date de naissance : </label>
                    <input v-model="birthday" type="date" id="birthday" name="birthday" />
                </div>

                <div v-if="user.role == 'BR'">
                    <label for="siret">Siret</label>
                    <input v-model="siret" type="number" id="Siret" name="Siret" minlength="13" maxlength="13"
                        :placeholder="userInfo.siret">
                </div>
                <div>
                    <label for="description">Décrivez-vous : </label>
                    <textarea v-model="description" id="description" name="description"
                        :placeholder="userInfo.description"></textarea>
                </div>

                <div v-if="user.role == 'BR'" id="options-experiences">
                    <p>Années d'expériences ?</p>
                    <div class="option-experience">
                        <input v-model="experience" type="radio" id="option-1" name="experience" value="Moins de 6 mois"
                            :checked="'Moins de 6 mois' == userInfo.experience">
                        <label class="label-register" for="experience">Moins de 6 mois</label>
                    </div>
                    <div class="option-experience">
                        <input type="radio" id="option-2" name="experience" value="6 mois à 2 ans"
                            :checked="'6 mois à 2 ans' == userInfo.experience">
                        <label class="label-register" for="experience">6 mois à 2 ans</label>
                    </div>
                    <div class="option-experience">
                        <input type="radio" id="option-3" name="experience" value="Entre 2 et 5ans"
                            :checked="'Entre 2 et 5ans' == userInfo.experience">
                        <label class="label-register" for="experience">Entre 2 et 5ans</label>
                    </div>
                    <div class="option-experience">
                        <input type="radio" id="option-4" name="experience" value="Plus de 5 ans"
                            :checked="'Plus de 5 ans' == userInfo.experience">
                        <label class="label-register" for="experience">Plus de 5 ans</label>
                    </div>

                </div>

                <div v-if="user.role == 'BR'">
                    <label for="method-working">Dite en plus sur la façon dont vous travaillez : </label>
                    <textarea v-model="methodWorking" id="method-working" name="method-working"
                        :placeholder="userInfo.method_working"></textarea>
                </div>

                <div v-if="user.role == 'BR'">
                    <label for="prices">Tarifs</label>
                    <input v-model="tarif" type="text" id="prices" name="prices" :placeholder="userInfo.price">
                </div>
            </div>


        </div>
        <a @click="validate(user.id)" class="btn-form btn-submit">Valider mon profil</a>
    </form>
</template>

<script>
import userService from '@/services/userService';
import { ref } from 'vue';
import { mapState } from 'vuex';

export default {
    name: "ModifyProfil",
    setup() {
        return {
            lastName: ref(''),
            firstName: ref(''),
            birthday: ref(''),
            description: ref(''),
            methodWorking: ref(''),
            tarif: ref(''),
            experience: ref(''),
            siret: ref(''),
            email: ref(''),
            password: ref(''),
            errorMessage: ref('')
        }
    },
    computed: {
        ...mapState(['userInfo', 'user']),

    },
    methods: {
        modifyUser(id) {
            const user = {
                email: this.email,
                password: this.password
            };
            let dataLog = {}
            for (const data in user) {
                if (user[data].length !== 0) {
                    dataLog[data] = user[data]
                }
            }
            if (Object.entries(dataLog).length !== 0) {
                return new Promise((resolve, reject) => {
                    userService.modifyUser(id, dataLog)
                        .then((response) => {
                            console.log(response);
                            //store.commit('LOG_USER', { email: this.email });
                            resolve(response)
                        }).catch((error) => {
                            error.response.data.errorCode == 1062 ? this.errorMessage = "l'email existe déjà, veuillez en choisir un autres" : "";
                            console.log(error)
                            reject(error)
                        })
                })

            }
        },

        modifyUserInfo(id) {
            const datas = {
                last_name: this.lastName,
                first_name: this.firstName,
                birthday: this.birthday,
                description: this.description,
                method_working: this.methodWorking,
                price: this.tarif,
                experience: this.experience,
                siret: this.siret,
            };

            let dataUser = {};
            for (const data in datas) {
                if (datas[data].length !== 0) {
                    dataUser[data] = datas[data]
                }
            }


            if (this.$store.state.user.role == "BR" && Object.entries(dataUser).length !== 0) {
                return new Promise((resolve, reject) => {
                    userService.modifyBetaReader(id, dataUser)
                        .then((response) => {
                            resolve(response);
                        })
                        .catch((error) => {
                            reject(error);
                        })
                })

            }

            if (this.$store.state.user.role == "A" && Object.entries(dataUser).length !== 0) {
                return new Promise((resolve, reject) => {
                    userService.modifyAuthor(id, dataUser)
                        .then((response) => {
                            resolve(response)
                        })
                        .catch((error) => {
                            reject(error);
                        })
                })

            }
        },

        async validate(id) {
            console.log(id)
            try {
                await this.modifyUser(id);
                await this.modifyUserInfo(id);
                this.$emit('changeDisplay');
                this.$emit('refreshDatas')
            } catch (error) {
                console.log(error);
            }
        }
    }



}
</script>

<style>

</style>