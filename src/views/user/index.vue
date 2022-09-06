<template>
  <div>
    <div class="container d-flex align-items-center flex-column">
      <b-card title="Listando usuarios" class="w-50">
        <b-row
          v-for="user in users"
          :key="user._id"
          class="d-flex align-items-center mt-2"
        >
          <b-col>
            <span class="lead">{{ user.username }}</span>
          </b-col>
          <b-col>
            <b-button
              variant="primary"
              style="margin-left: 10px"
              @click="redirect(user._id)"
              >Ver</b-button
            >
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>



<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    redirect(userId) {
      this.$router.push({
        name: "users.edit",
        params: { id: userId },
      });
    },
  },
};
</script>

<style>
</style>