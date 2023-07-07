<template>
   
    <div class="hello container">
        <h1>Home Page</h1>
        <router-link to="/all-loader">
            <button class="mb-2 btn btn-success">See All Loader Here</button>
        </router-link>

        <div class="d-flex aligns-items-right justify-content-right">
            <router-link to="/add">
                <button class="mb-2 btn btn-success">Add New Record</button>
            </router-link>
        </div>
        
      
        <table class="table">  
            <thead>
                <tr class="table-success">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>  
            <tbody>   
                 
                <tr v-for="book of books" :key="book.id" class="table-light">
                    <td>  <button :value="book.id" class="btn btn-success" @click="view">{{book.id}}</button>
                    </td>
                    <td>{{book.title}}</td>
                    <td>{{book.author}}</td>
                    <td>{{book.email}}</td>
                    <td><button :value="book.id" class="btn btn-success" @dblclick="edit">Double Click Edit</button><br>
                        <button :value="book.id" class="mt-2 btn btn-danger" @click="confirmDelete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
            
    </div>
    <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
  </template>
  
  <script>
  import axios from "axios";
  import ConfirmDialogue from '../components/ConfirmDialogue.vue'

  export default {
    name: 'HomePage',
    components:{
        ConfirmDialogue
    },
    data() {
      return {
        books: [],
        modalShow:false,
      };
    },
    methods:{
        async confirmDelete(event) {
            this.modalShow = true;
            const id = event.target.value;

            const ok = await this.$refs.confirmDialogue.show({
                title: 'Delete Page',
                message: 'Are you sure you want to delete this record? It cannot be undone.',
                okButton: 'Delete',
            })
            // If you throw an error, the method will terminate here unless you surround it wil try/catch
            if (ok) {
                this.deleteRecord(id)
            } else {
                this.modalShow = false;
            }
        },
        view(event){
            const id = event.target.value;
            this.$router.push(`/detail/${id}`);
        },
        edit(event){
            const id = event.target.value;
            this.$router.push(`/update/${id}`);
        },
        deleteRecord(id){
            this.$router.push(`/update/${id}`);
            axios.delete(`http://localhost:3000/posts/${id}`)
            .then(response => {
                // Handle the API response here
                console.log(response.data);
                this.$router.push(`/`);
            })
            .catch(error => {
                // Handle any errors that occurred
                console.error(error);
            });
        }
    },
    created() {
        axios.get('http://localhost:3000/posts')
        .then(response => {
            // Handle the API response here
            console.log(response.data);
            this.books = response.data;
        })
        .catch(error => {
            // Handle any errors that occurred
            console.error(error);
        });
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  