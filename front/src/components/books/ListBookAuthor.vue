<template>
    <div id="bloc-liste-book">
        <div class="book" v-for="book in books" :key="book.id">
            <div class="info-book">
                <a class="link" :href="'/livre/' + book.id">
                    <p class="title">{{ book?.title }} <img class="icone-book"
                            src="../../assets/images/book-icone.svg" /></p>
                </a>
                <p>Nombre de mot : <span>{{ book?.number_word }}</span></p>
                <p>Genre : <span>{{ book?.genre }}</span></p>
                <a v-if="authorId === userInfo?.id" @click="deleteBook(book?.id, authorId)" class="btn-corbeille"> <img
                        class="icone-corbeille" src="../../assets/images/corbeille.svg" /></a>

            </div>
            <a v-if="authorId !== userInfo?.id" class="see-more" :href="'/livre/' + book.id">En savoir +</a>
        </div>
    </div>
</template>

<script>
import bookService from '@/services/bookService';
import { mapState } from 'vuex';

export default {
    name: 'listBookAuthor',
    data() {
        return {
            books: null
        }
    },
    props: {
        authorId: Number
    },
    computed: {
        ...mapState(['userInfo']),
    },
    mounted() {
        this.getBooksByAuthor(this.authorId);
    },
    methods: {
        getBooksByAuthor(id) {
            bookService.getByAuthor(id)
                .then((response) => {
                    this.books = response.data.books
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        deleteBook(id, authorId) {
            if (confirm("Est-vous sur de vouloir supprimer votre oeuvre ?")) {
                bookService.deleteBook(id)
                    .then(() => {
                        this.getBooksByAuthor(authorId)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }

}
</script>

<style scoped>
#bloc-liste-book {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.book {
    border: 1px solid #FF5E1A;
    margin: 15px;
    text-align: left;
    flex-flow: wrap;
    padding: 20px 35px;
    border-radius: 40px;
    width: 400px;

}

.title {
    font-size: 23px;
}

#bloc-liste-book .icone-book {
    width: 30px;
    border-radius: inherit;
    vertical-align: middle;
    margin-left: 10px;
}

.btn-corbeille {
    background-color: #fc0000;
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
    float: right;
    border-radius: 50px;
}

.btn-corbeille .icone-corbeille {
    width: inherit;
    height: 15px;
    vertical-align: middle;
}

.see-more {
    float: right;
}

a {
    cursor: pointer;
}

.link {
    display: block;
    margin: 0;
}

@media screen and (max-width: 990px) {
    #bloc-liste-book .book {
        margin: 15px 0;
    }
}

@media screen and (max-width: 450px) {
    #bloc-liste-book .book {
        padding: 15px 20px;
    }
}
</style>