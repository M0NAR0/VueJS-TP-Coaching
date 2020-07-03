<template>
    <div>
        <h1>Rapport quotidien</h1>
        <v-alert v-if="coachMessage" type="success">{{ coachMessage }}</v-alert>
        <v-alert v-if="reportSendMessage" type="success">{{ reportSendMessage }}</v-alert>
        <v-row>
            <v-col cols="12" sm="4">
                <h2>Physique</h2>
                <v-text-field v-model="poids" type="number" label="Poids"></v-text-field>
                <v-text-field v-model="sportPratique" label="Sport réalisé dans la journée"></v-text-field>
                <v-text-field v-model="sportDuree" type="number" label="Durée"></v-text-field>
                <v-select v-model="sportIntensite" :items="intensiteList" label="Intensité" ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
                <h2>Diététique</h2>
                <v-select v-model="petitDejeuner" :items="repasList" label="Petit-déjeuner" ></v-select>
                <v-select v-model="dejeuner" :items="repasList" label="Déjeuner" ></v-select>
                <v-select v-model="diner" :items="repasList" label="Dîner" ></v-select>
                <v-checkbox
                    v-model="collation"
                    label="Une collation ?"
                ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4">
                <h2>Psychologique</h2>
                <v-select v-model="humeur" :items="humeurList" label="Humeur" ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="8">
                <v-textarea v-model="observations" label="Observations" ></v-textarea>
            </v-col>
            <v-col cols="12" sm="4">
                <v-btn @click="sendReport" color="success">Envoyer</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                humeurList: ["Maussade", "Normal", "Bien", "Très bien"],
                repasList: ["Léger", "Normal", "Conséquent"],
                intensiteList: ["Faible", "Moyenne", "Forte"],
                sportPratique: "",
                sportDuree: "",
                sportIntensite: "",
                poids: "",
                petitDejeuner: "",
                dejeuner: "",
                diner: "",
                collation: false,
                humeur: "",
                observations: "",
                coachMessage: "",
                reportSendMessage: "",
            }
        },
        methods: {
            sendReport() {
                const report = {
                    //memberId: this.memberId,
                    sportPratique: this.sportPratique,
                    sportDuree: this.sportDuree,
                    sportIntensite: this.sportIntensite,
                    poids: this.poids,
                    petitDejeuner: this.petitDejeuner,
                    dejeuner: this.dejeuner,
                    diner: this.diner,
                    collation: this.collation,
                    humeur: this.humeur,
                    observations: this.observations
                };
                try {
                    this.axios.post(process.env.VUE_APP_API_URL + "/reports", report);
                    this.reportSendMessage = "Rapport envoyé avec succès !";
                } catch (error) {
                    alert("Erreur !");
                    console.log("erreur", error);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>