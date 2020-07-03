<template>
    <div>
        <v-row v-for="(member, index) in this.members" :key="index">
            <v-col>
                <h3>{{ member.firstname }} {{ member.lastname }}</h3>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                members: [],
            }
        },
        async created() {
            try {
                const membersInDb = await this.axios.get(process.env.VUE_APP_API_URL + "/users");
                this.members = membersInDb.data.filter(user => !user.isCoach);
            } catch (error) {
                alert("Erreur");
                console.log("erreur", error);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>