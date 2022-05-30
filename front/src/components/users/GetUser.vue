<script>
import userService from '@/services/userService'
export default {
    props: {
        userId: Number
    },
    mounted() {
        this.getUser(this.userId)

    },
    methods: {
        getUser(id) {
            userService.getUser(id)
                .then((response) => {
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

