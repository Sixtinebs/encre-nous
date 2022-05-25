<template>
    <div>
        <div class="infos">
            <div class="info-author">
                <div>
                    <h1>{{ bookDatas.title }}</h1>
                    <p class="name">{{ authorDatas.last_name }} {{ authorDatas.first_name }}</p>
                    <a class="btn-form btn-1" :href="'/profil/a/' + authorDatas.user_id">En savoir plus sur l'auteur</a>
                </div>
                <div class="container-image">
                    <img v-if="authorDatas.img" :src="authorDatas.img" alt="" />
                    <img v-else src="../assets/images/image-default.jpeg" alt="" />
                </div>
            </div>

            <p>Nombre de page : <span>{{ bookDatas.number_word }}</span></p>
            <p>Genre : <span>{{ bookDatas.genre }}</span></p>
            <p>Ajouté le : <span>{{ dateTime(bookDatas.createdAt) }}</span></p>
            <p class="pitch">Pitch: <span>{{ bookDatas.summarize }}</span></p>
            <a class="btn-form" :href="'/messaging/'+authorDatas.user_id">Contactez-le</a>
        </div>
    </div>
</template>

<script>
import bookService from "@/services/bookService";
import moment from 'moment';

export default {
    name: 'OneBook',
    data() {
        return {
            id: this.$route.params.id,
            bookDatas: {},
            authorDatas: {}
        }
    },
    mounted() {
        this.getOneBook(this.id)
    },
    methods: {
        getOneBook(id) {
            bookService.getOneBook(id)
                .then((response) => {
                    console.log(response),
                        this.bookDatas = response.data.book,
                        this.authorDatas = response.data.author
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        dateTime(value) {
            return moment(value).format('DD/MM/YYYY');
        },
    },


}
</script>

<style scoped>
.infos {
    border: 1px solid #FF5E1A;
    margin: 40px 125px;
    border-radius: 70px;
    padding: 60px 80px 200px 80px;
}

.infos .btn-form {
    margin: 30px 50px 0 0;
    display: inline-block;
    float: right;
    padding: 11px 25px;
}

p {
    text-align: left;
    font-weight: bold;
}

.pitch span {
    display: block;
}

span {
    font-weight: 400;
}

img {
    max-width: 250px;
    border-radius: 70px
}

.info-author {
    display: flex;
    justify-content: space-between;
}

.name {
    font-size: 25px;
    font-weight: 600;
}

.btn-1 {
    float: left !important;
    margin: initial !important
}
</style>