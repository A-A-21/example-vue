<template>
  <div>
    <form @submit.prevent>
      <input v-model="post.title" class="input" placeholder="Название"
             type="text">
      <input v-model="post.body" class="input" placeholder="Описание"
             type="text">
      <MyButton style="align-self: flex-end" @click="createPost" class="btn">Создать</MyButton>
    </form>

  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: { MyButton },
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
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}


</style>
