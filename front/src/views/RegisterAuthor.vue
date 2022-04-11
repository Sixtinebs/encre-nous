<template>
    <div class="text-register">
        <h1>Votre profil d'auteur</h1>
        <p>Ut gravida semper eros, ac mattis ligula bibendum at. Vivamus tempor nec arcu malesuada faucibus.</p>
        <p> dictum turpis, at elementum magna fermentum sit amet.nec arcu malesuada faucibus. Vestibulum ante ipsum
            primis
            in faucibus </p>
        <p>orci luctus et ultrices posuere cubilia curae; Praesent lacus elit, aliquet et malesuada vel, finibus et
            nibh.
            Nunc consectetur massa sem, vitae luctus ante sodales nec. Sed sapien erat, tempus tristique orci sit amet,
            semper
            eleifend nibh. </p>

    </div>
    <form class="register form">
        <div class="info-user">
            <div class="info">
                <label class="label-register" for="last-name">Votre nom</label>

                <input type="text" id="last-name" name="last-name" required maxlength="50">

            </div>
            <div class="info">
                <label class="label-register" for="first-name">Votre Prénom</label>

                <input type="text" id="first-name" name="first-name" required maxlength="50">
            </div>
        </div>
        <div class="info-user ">
            <div class="info">
                <label class="label-register" for="birthday">Votre date de naissance</label>
                <input v-model="birthday" type="date" id="birthday" name="birthday"
                    placeholder="Votre date de naissance" required />
            </div>
            <div class="info">
                <label class="label-register label-file" for="img-profil">Ajoutez une photo de profil</label>
                <p class="custom-file">Importer</p>
                <input type="file" class="input-file" id="img-profil" name="img-profil">
            </div>
        </div>

        <div class="info-user">
            <div class="info">
                <label class="label-register" for="description">Décrivez-vous </label>

                <textarea type="textarea" id="description" name="description"></textarea>
            </div>
            <div class="info">
                <label class="label-register" for="method-working">Décrivez votre méthode de travail</label>
                <textarea id="method-working" name="method-working"></textarea>
            </div>
        </div>

        <div class="info-user">
            <div class="info">
                <label class="label-register" for="email">Votre Email</label>
                <input type="email" id="email" name="email" required>

            </div>
            <div class="info">
                <label class="label-register" for="password">Votre mot de passe</label>
                <input type="password" id="password" name="password" required>

            </div>

        </div>

        <button type="submit" class="btn-form btn-submit">Créer son profil </button>

    </form>

</template>

<script >
import { ref } from "vue";
export default {
    setup() {
        return {
            birthday: ref(""),
        };
    },
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

form.form input {
    height: 40px;
}

input[type="file"] {
    display: none;
}

.custom-file {
    border: 1px solid black;
    display: flex;
    margin-top: 0px;
    cursor: pointer;
    height: 40px;
    justify-content: center;
    align-items: center;
}

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

form {
    margin-bottom: 70px;
}
</style>