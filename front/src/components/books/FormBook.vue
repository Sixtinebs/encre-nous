<template>
    <div id="add-new-book">
        <h2>Ajouter une oeuvre / un projet</h2>
        <p class="succes-msg" v-if="message">{{ message }}</p>
        <form class="form">
            <div class="input input-text">
                <label for="title">Titre</label>
                <input v-model="title" type="text" id="title" name="title" />
            </div>
            <div class="input input-text">
                <label for="number-word">Nombre de mots </label>
                <input v-model="number_word" type="number" id="number-word" name="number-word" />
            </div>
            <div class="input">
                <label for="genre">Genre de l'oeuvre</label>
                <select v-model="genre" name="genre" id="select-genre">
                    <option disabled value="">--Choisissez le genre du livre--</option>
                    <option>Poétique</option>
                    <option>Policier</option>
                    <option>Fantastique</option>
                    <option>Erotique</option>
                    <option>Science-fiction</option>
                    <option>Romance</option>
                </select>
            </div>
            <div class="input input-area">
                <label for="summarize">Résumé / synopsis </label>
                <textarea v-model="summarize" type="text" id="summarize" name="summarize"></textarea>
            </div>
            <a @click="validateForm()" class="btn-form btn-submit">Ajouter le livre</a>
        </form>
    </div>
</template>

<script>
import bookService from "@/services/bookService";
import { mapState } from 'vuex';
import { ref } from "vue";

export default {
    name: 'formBook',
    computed: {
        ...mapState(['user']),
    },
    data() {
        return {
            title: ref(''),
            summarize: ref(''),
            genre: ref(''),
            number_word: ref(''),
            id: this.$store.state.userInfo.id,
            message: ref(''),
        }
    },

    methods: {
        validateForm() {
            const self = this;
            const data = {
                title: this.title,
                summarize: this.summarize,
                genre: this.genre,
                number_word: this.number_word,
                author_id: this.id
            }
            bookService.createBook(data)
                .then(() => {
                    this.message = `Votre livre " ${self.title} " à été ajouté.`;
                    this.title = '';
                    this.summarize = '';
                    this.genre = '';
                    this.number_word = '';
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                })
                .catch((error) => console.log(error))
        }
    }
}
</script>

<style >
#add-new-book h2 {
    font-weight: bold;
}

form {
    margin: auto 120px;
}

#add-new-book form .input {
    display: flex;
    margin: 20px;

}

#add-new-book form .input-text input {
    width: 300px;
}

label {
    font-weight: bold;
    font-size: 20px;
    text-align: left;
    width: 250px;
}

.input-area {
    flex-direction: column;
}

textarea {
    height: 400px;
}

.succes-msg {
    width: 500px;
    background-color: #EAEFBD;
    padding: 20px;
    margin: auto;
    border-radius: 20px;
    border: 1px solid #a7ab83;
}
</style>