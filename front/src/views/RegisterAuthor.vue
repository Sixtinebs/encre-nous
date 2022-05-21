<template>
    <div id="register-author">
        <div class="text-register">
            <h1>Votre profil d'auteur</h1>
            <p>Ut gravida semper eros, ac mattis ligula bibendum at. Vivamus tempor nec arcu malesuada faucibus.</p>
            <p> dictum turpis, at elementum magna fermentum sit amet.nec arcu malesuada faucibus. Vestibulum ante ipsum
                primis
                in faucibus </p>
            <p>orci luctus et ultrices posuere cubilia curae; Praesent lacus elit, aliquet et malesuada vel, finibus et
                nibh.
                Nunc consectetur massa sem, vitae luctus ante sodales nec. Sed sapien erat, tempus tristique orci sit
                amet,
                semper
                eleifend nibh. </p>
            <div class="not-succes-msg" v-if="message" v-html="message"></div>
        </div>
        <div class="register form">
            <div class="info-user">
                <div class="info">
                    <label class="label-register" for="last-name">Votre nom</label>
                    <input v-model="lastName" type="text" id="last-name" name="last-name" required maxlength="50">
                </div>
                <div class="info">
                    <label class="label-register" for="first-name">Votre Prénom</label>
                    <input v-model="firstName" type="text" id="first-name" name="first-name" required maxlength="50">
                </div>
            </div>
            <div class="info-user ">
                <div class="info">
                    <label class="label-register" for="birthday">Votre date de naissance</label>
                    <input v-model="birthday" type="date" id="birthday" name="birthday"  max="2004-01-01"
                        placeholder="Votre date de naissance" required />
                </div>
                <!-- <div class="info">
                    <label class="label-register label-file" for="img-profil">Ajoutez une photo de profil</label>
                    <p class="custom-file">Importer</p>
                    <input type="file" class="input-file" id="img-profil" name="img-profil">
                </div> -->
            </div>

            <div class="info-user">
                <div class="info">
                    <label class="label-register" for="description">Décrivez-vous </label>
                    <textarea v-model="description" type="textarea" id="description" name="description"></textarea>
                </div>
            </div>

            <div class="info-user">
                <div class="info">
                    <label class="label-register" for="email">Votre Email</label>
                    <input v-model="email" type="email" id="email" name="email" required>

                </div>
                <div class="info">
                    <label class="label-register" for="password">Votre mot de passe</label>
                    <input v-model="password" type="password" id="password" name="password" required>
                    <label class="label-register" for="confirm-password">Confirmer votre mot de passe <span
                            class="required">*</span></label>
                    <input v-model="confirmPassword" type="password" id="confirm-password" required
                        name="confirm-password">
                </div>

            </div>

            <button @click="createAuthor" class="btn-form btn-submit">Créer son profil </button>

        </div>
    </div>
</template>

<script >
import { ref } from "vue";
export default {
    setup() {
        return {
            lastName: ref(''),
            firstName: ref(''),
            birthday: ref(''),
            description: ref(''),
            email: ref(''),
            password: ref(''),
            message: ref('')
        };
    },
    methods: {
        createAuthor() {
            this.message = "";
            const fielIsEmpty = this.fieldEmptyMessage();
            const isCorrectPassword = this.verifyPassword(this.password, this.confirmPassword);
            console.log(fielIsEmpty)
            if (!isCorrectPassword || fielIsEmpty) {
                console.log('ici')
                return;
            }

            const self = this;
            this.$store.dispatch('createAccountAuthor', {
                last_name: this.lastName,
                first_name: this.firstName,
                birthday: this.birthday,
                description: this.description,
                email: this.email,
                role: 'A',
                password: this.password
            }).then(() => {
                self.$router.push('/connexion');
            })
                .catch((error) => {
                    if (error.response.data.errorCode == 1062) {
                        this.message += `<p>L'email existe déjà</p>`;
                        this.scrollTop();
                    }
                    console.log(error);
                })
        },
        verifyPassword(password, password2) {
            if (password == password2) {
                return true;
            } else {
                this.scrollTop();
                this.message += `<p>Les mots de passe ne corresponde pas</p>`;
                return false;
            }
        },
        fieldEmptyMessage() {
            let isEmpty = false;
            if (!this.lastName) {
                this.message += `<p>Le champ nom est vide</p>`;
                isEmpty = true;
            }
            if (!this.firstName) {
                this.message += `<p>Le champ prénom est vide</p>`;
                isEmpty = true;
            }
            if (!this.birthday) {
                this.message += `<p>Le champ anniversaire est vide</p>`;
                isEmpty = true;
            }
            if (!this.description) {
                this.message += `<p>Le champ description est vide</p>`;
                isEmpty = true;
            }
            if (!this.email) {
                this.message += `<p>Le champ email est vide</p>`;
                isEmpty = true;
            }

            console.log(isEmpty)
            if (isEmpty) {
                this.scrollTop();
                return true;
            } else {
                return false;
            }
        },
        scrollTop() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    }
};
</script>

<style>
.text-register h1 {
    font-weight: bold;
}

.text-register p {
    margin: 0;
}

.text-register {
    max-width: 1000px;
    margin: auto;
}

.info-user {
    border: 2px solid #ff5e1a;
    padding: 50px 80px;
    margin: 40px 100px;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
    width: 40%;
}

.label-register {
    text-align: left;
    font-weight: bold;
    padding: 0 0 20px 40px;
    font-size: 20px;
}

.form input {
    height: 40px;
}

input[type="file"] {
    display: none;
}

/* .custom-file {
    border: 1px solid black;
    display: flex;
    margin-top: 0px;
    cursor: pointer;
    height: 40px;
    justify-content: center;
    align-items: center;
} */

.option-experience {
    display: flex;
}

.option-experience label {
    padding: 0 0 0 10px;
    display: flex;
    align-items: center;
}

.btn-submit {
    font-size: 20px;
    cursor: pointer;
}

.form {
    margin-bottom: 70px;
}
</style>