<template>
  <div>
    <form @submit.prevent>
      <my-input v-model="post.title" placeholder="Название"
                v-fokus
      />
      <my-input v-model="post.body" placeholder="Описание"
      />
      <my-button style="align-self: flex-end; margin-top: 15px" @click="createPost" class="btn">Создать</my-button>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    }
  }
};
</script>

<style scoped>


form {
  display: flex;
  flex-direction: column;
}


</style>
