<template>
    <div id="container-discussion">
        <p> Messagerie </p>
        <section>
            <div v-for="msg in discussion" :key="msg.id" class="bulle"
                v-bind:class="[msg.originator_id == my_id ? 'right' : 'left']">
                <p>{{ msg.message }}</p>
                <img class="img-profil"
                 v-if="userInfo.img" :src="userInfo.img"
                alt="" 
                v-bind:class="[msg.originator_id == my_id ? 'my_profil' : 'no_profil']"/>
                <img 
                class="img-profil" 
                v-else src="../../assets/images/image-default.jpeg" 
                v-bind:class="[msg.originator_id == my_id ? 'my_profil' : 'no_profil']"
                alt="" />
                <img class="img-profil"
                 v-if="userInfo.img" :src="user_img"
                alt="" 
                v-bind:class="[msg.originator_id == user_id ? 'your_profil' : 'no_profil']"/>
                <img 
                class="img-profil" 
                v-else src="../../assets/images/image-default.jpeg" 
                v-bind:class="[msg.recipient_id == user_id? 'my_profil' : 'no_profil']"
                alt="" />
            </div>
        </section>
    <get-user @get-info="collectInfo"></get-user>
    </div>
</template>

<script>
import messageService from '@/services/messageService';
import getUser from '../users/GetUser.vue';
import { mapState } from 'vuex'

export default {
    components:{
        getUser,
    },
    data() {
        return {
            user_id: this.$route.params.id,
            discussion: null,
            my_id: this.$store.state.user.id,
            activeClass: true,
            user_img: null

        }
    },
    computed: {
        ...mapState(['user', 'userInfo']),
    },
    methods: {
        getDiscussion(my_id, user_id) {
            const data = { my_id, user_id }

            messageService.getDiscussion(data)
                .then((response) => {
                    this.discussion = response.data.discussion;
                    console.log(response)
                })
                .catch((error) => console.log(error))
        },
        collectInfo(info){
            if(info.Beta_reader){
                this.user_img = info.Beta_reader.img
            }else if (info.Author){
                 this.user_img = info.Author.img
            }else {
                this.user_img = undefined
            }
            console.log(this.user_img)
        }
    },
    created() {
        this.getDiscussion(this.my_id, this.user_id)
    }

}
</script>

<style scoped>
.bulle.right {
    /* text-align: right; */
    justify-content: flex-end;
    flex-direction: row;
}

.bulle.left {
    /* text-align: left; */
    justify-content: flex-end;
    flex-direction: row-reverse;
}

section {
    overflow-y: scroll;
    bottom: 0;
    height: 500px;
}

.bulle {
    border: 0.5px solid #ff5e1a;
    margin: 20px 0;
    border-radius: 25px;
    padding: 10px 30px;
    position: relative;
    display: flex;
}

#container-discussion {
    padding: 0 80px;
}

.img-profil {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    object-fit: cover;
}
.no_profil {
    display: none
}
</style>