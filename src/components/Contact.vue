<template>
    <div>
        <h2>Contact</h2>
        <v-row>
            <v-col cols="12" sm="3">
                <v-text-field v-model="contactLastname" label="Nom" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
                <v-text-field v-model="contactFirstname" label="Prénom" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field v-model="contactEmail" label="Adresse email" ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field v-model="contactSubject" label="Sujet" ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-textarea v-model="contactContent" label="Descriptif" ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="10"></v-col>
            <v-col cols="12" sm="1">
                <v-btn color="success">Envoyer</v-btn>
            </v-col>
        </v-row>
        <br>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contactLastname: "",
                contactFirstname: "",
                contactEmail: "",
                contactSubject: "",
                contactContent: "",
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>