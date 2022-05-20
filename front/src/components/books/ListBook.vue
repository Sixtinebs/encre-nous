<template>
    <div id="bloc-liste-book">
        <div class="book" v-for="book in books" :key="book.id">
            <div class="info-book">
                <p class="title">{{ book?.title }}</p>
                <p>{{book.Author?.last_name }} {{book.Author?.first_name }}</p>
                <p>Nombre de page : <span>{{ book?.number_word }}</span></p>
                <p>Genre : <span>{{ book?.genre }}</span></p>
               
            </div>
            <div class="boutons">
                <a class="btn-form" :href="'/profil/a/'+book.Author?.user_id">Contact</a>
                <a class="btn-form btn-1" :href="'/livre/'+book.id">En savoir +</a>
            </div>
            <p class="pitch">Pitch: <span>{{ book?.summarize }}</span></p>
        </div>

    </div>

</template>

<script>
import bookService from "@/services/bookService"

export default {
    data() {
        return {
            books: null,
        }
    },
    methods: {
        getAllBooks() {
            bookService.getAllBooks()
                .then((response) => {
                    this.books = response.data.books;
                })
                .catch((error) => console.log(error))
        },


    },
    mounted() {
        this.getAllBooks()
    }

}
</script>

<style scoped>
#bloc-liste-book {
    margin:auto 125px;
}

.book {
    border: 2px solid #FF5E1A;
    border-radius: 15px;
    margin: 15px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    padding: 25px 45px;
    border-radius: 70px;
}

.title {
    color: #FF5E1A;
    font-size: 25px;
    font-weight: 400;
    margin: 0 0 16px 0;
}
.pitch {
    flex: 0 0 100%;
    margin: initial
}
p {
    font-weight: bold;
}
span {
    font-weight: 400;
}
.boutons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
}
.boutons .btn-form,
.boutons .btn-form.btn-1
 {
    padding: 10px 35px;
}

</style>