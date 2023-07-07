<template>
  <div class="container bg-light border border-success col-4">
    <br>
    <h1>Add Form</h1><br>
    <form @submit="submitForm">
      <div class="form-group d-flex">
        <label for="title" class="col-4">Title:</label>
        <input type="text" class="form-control border border-success" id="title" v-model="form.title" />
      </div>
      <div v-if="!form.title && formSubmit" class="error-message text-danger">Title is required.</div>
      <br>
 
      <div class="form-group d-flex ">
        <label for="email" class="col-4">Email:</label>
        <input type="email" class="form-control border border-success" id="email" v-model="form.email" />
      </div>
      <div v-if="!form.email && formSubmit" class="error-message text-danger">Email is required</div>
      <div v-else-if="!isEmailValid && formSubmit" class="error-message text-danger">Invalid email format.</div>
      <br>

      <div class="form-group d-flex">
        <label for="author" class="col-4">Author:</label>
        <input type="author" class="form-control border border-success" id="author" v-model="form.author" />
      </div>
      <div v-if="!form.author && formSubmit" class="error-message text-danger">Author is required.</div>
      <br>
      <div class="form-group text-center ">
        <router-link to="/">
        <button type="button" class="btn btn-outline-secondary text-dark col-4 me-5">Cancel</button>
      </router-link>
        <button type="submit" class="btn btn-outline-success text-dark col-4">Submit</button>
      </div><br>
    
    </form>
  </div>

  </template>
  
  <script>
  import axios from "axios";
  export default {
    name:"AddPage",
    computed:{
      isEmailValid() {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
      },
    },
    data() {
      return {
        books: [],
        formSubmit: false,
        form:{
            title: '',
            author: '',
            email: ''
        }
      };
    },
    methods: {
      async submitForm(event) {
        event.preventDefault();

        // Perform additional form submission logic
        this.formSubmit = true;
        if (
          this.form 
          && this.form.title 
          && this.form.author
          && this.form.email 
          && this.isEmailValid
        ) {
          console.log('Form submitted:', this.name, this.email);
        } else {
          console.log('Form has errors');
          return
        }

        // Handle form submission logic here
        console.log('Submitted:', this.form);
        // this.book.push(this.form)
        await axios.post("http://localhost:3000/posts", this.form);
        this.$router.push('/');
      },
    },
  };
  </script>