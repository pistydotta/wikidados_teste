<template>
  <div>
    <div class="container d-flex align-items-center flex-column">
      <b-card title="Criando usuario" class="w-50">
        <b-row class="d-flex align-items-center">
          <b-col md="4">
            <label for="username">First name: </label>
          </b-col>
          <b-col>
            <b-input type="text" name="username" v-model="user.first_name" />
          </b-col>
        </b-row>
        <b-row class="d-flex align-items-center mt-2">
          <b-col md="4">
            <label for="password">Last Name: </label>
          </b-col>
          <b-col>
            <b-input
              type="text"
              name="password"
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
          <b-button variant="primary" @click="criar">Criar</b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
      },
    };
  },
  methods: {
    async criar() {
      const response = await this.$store.dispatch("createUser", this.user);
      this.$router.push({
        name: "users",
      });
    },
  },
};
</script>

<style>
</style>