
<script>
import userService from '@/services/userService'
export default {
    data(){
        return{
             user_id: this.$route.params.id,

        }
    },
  mounted() {
      this.getUser(this.user_id)
   
  },
    methods:{
        getUser(id){
            userService.getUser(id)
            .then((response) => {
                console.log(response);
                this.$emit('getInfo', response.data.user)
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }

}
</script>

<style>

</style>

