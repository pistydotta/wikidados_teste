<template>
  <div class="container d-flex align-items-center flex-column">
    <b-card title="Editando usuario" class="w-50">
      <b-row class="d-flex align-items-center">
        <b-col md="4">
          <label for="username">Nome de usuario: </label>
        </b-col>
        <b-col>
          <b-input type="text" name="username" v-model="user.username" />
        </b-col>
      </b-row>
      <b-row class="d-flex align-items-center mt-2">
        <b-col md="4">
          <label for="password">Senha: </label>
        </b-col>
        <b-col>
          <b-input
            type="password"
            name="password"
            id=""
            v-model="user.password"
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
        <b-button class="mr-2" variant="primary" @click="editar">Editar</b-button>
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
        username: "",
        email: "",
        password: "",
      },
    };
  },
  async mounted() {
    const response = await this.$store.dispatch(
      "getUser",
      this.$route.params.id
    );
    this.user = { ...response.user };
  },
  methods: {
    async editar() {
      let workingUser = {
        userId: this.$route.params.id,
        user: this.user,
      };
      const response = await this.$store.dispatch("editUser", workingUser);
      console.log(response);
      if (response.statusCode == 201) {
        this.$router.push({ name: "users" });
      }
    },
    async deletar() {
      const response = await this.$store.dispatch(
        "deleteUser",
        this.$route.params.id
      );
      if (response.data.statusCode == 200) {
        this.$router.push({ name: "users" });
      }
    },
  },
};
</script>

<style>
</style>