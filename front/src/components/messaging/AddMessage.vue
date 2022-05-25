<template>
    <div id="add-message">
    <div>
        <p v-if="isEmpty"> Votre message est vide</p>
        <textarea v-model="message" type="text" name="" id="my-message" placeholder="Placez votre message ici..." ></textarea>
        <p @click="sendMsg(dataUser, message)" class="btn-send"> <img class="icone-send" src="../../assets/images/send.svg" /></p>
    </div>
    </div>


</template>

<script>
import messageService from '@/services/messageService'
import { ref } from 'vue'
export default {
    data() {
        return {
            dataUser: {
                user_id: this.$route.params.id,
                my_id: this.$store.state.user.id,
            },
            message: ref(''),
            isEmpty: null


        }
    },
    methods: {
        sendMsg(data, message) {
            this.isEmpty = false;
            if(!message){
                this.isEmpty = true;
                return;
            }
            data['message'] = message;
            console.log(data, 'DATA ICI')
            messageService.sendMessage(data)
                .then((response) => {
                    console.log(response);
                    this.$emit('newMessage');
                    this.message = '';
                })
                .catch((error) => console.log(error))
        },
    }

}
</script>

<style scoped>
.btn-send {
    cursor: pointer;
    margin: 20px auto;
    display: flex;
    border: 1px solid;
    width: 25px;
    height: 25px;
    padding: 8px;
    border-radius: 30px;
    padding-left: 10px;
}
#add-message {
    padding: 0 80px;
}
textarea {
  resize: none;
      width: 100%;
    border: 0.5px solid #ff5e1a;
    height: 100px;
}
img.icone-send:hover {
    filter: brightness(0) saturate(100%) invert(14%) sepia(44%) saturate(3760%) hue-rotate(231deg) brightness(79%) contrast(117%);
}

</style>