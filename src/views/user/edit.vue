<template>
  <div class="container d-flex align-items-center flex-column">
    <b-card title="Editando usuario" class="w-50">
      <b-row class="d-flex align-items-center">
        <b-col md="4">
          <label for="first_name">First Name: </label>
        </b-col>
        <b-col>
          <b-input type="text" name="first_name" v-model="user.first_name" />
        </b-col>
      </b-row>
      <b-row class="d-flex align-items-center mt-2">
        <b-col md="4">
          <label for="last_name">Last Name: </label>
        </b-col>
        <b-col>
          <b-input
            type="text"
            name="last_name"
            id=""
            v-model="user.last_name"
          />
        </b-col>
      </b-row>
      <b-row class="d-flex align-items-center mt-2">
        <b-col md="4">
          <label for="email">Email: </label>
        </b-col>
        <b-col>
          <b-input type="text" name="email" v-model="user.email" />
        </b-col>
      </b-row>
      <div class="d-flex justify-content-end mt-2">
        <b-button class="mr-2" variant="primary" @click="editar"
          >Editar</b-button
        >
        <b-button variant="primary" @click="deletar">Deletar</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 0,
        first_name: "",
        email: "",
        last_name: "",
      },
    };
  },
  async mounted() {
    const user = await this.$store.dispatch("getUser", this.$route.params.id);
    this.user = { ...user };
  },
  methods: {
    async editar() {
      await this.$store.dispatch("editUser", this.user);
      this.$router.push({ name: "users" });
    },
    async deletar() {
      const response = await this.$store.dispatch(
        "deleteUser",
        this.$route.params.id
      );
      this.$router.push({ name: "users" });
    },
  },
};
</script>

<style>
</style>