  <template>
      <div class="container bg-light border border-success col-4">
        <br>
        <h1>Detail Page</h1>
        <br>
        
        <div class="d-flex aligns-items-center justify-content-center">
          <p class="col-3 bg-light">Id</p>
          <p class="col-3 border bg-light">
            {{this.form.id}}
          </p>
        </div>
        <div class="d-flex aligns-items-center justify-content-center">
          <p class="col-3 bg-light">Title</p>
          <p class="col-3 border bg-light">
            {{this.form.title}}
          </p>
        </div>
        <div class="d-flex aligns-items-center justify-content-center">
          <p class="col-3 bg-light">Email</p>
          <p class="col-3 border bg-light">
            {{this.form.email}}
          </p>
        </div>
        <div class="d-flex aligns-items-center justify-content-center">
          <p class="col-3 bg-light">Author</p>
          <p class="col-3 border bg-light aligns-items-left justify-content-left">
            {{this.form.author}}
          </p>
      </div>

      <router-link to="/">
        <button class="mt-2 mb-3 btn btn-success">Home</button>
      </router-link>
    </div> 
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name:"DetailPage",
    data() {
      return {
        id:"",
        form:{
          id:'',
          title: '',
          author: '',
          email:''
        }
      };
    },
    created() {
      this.id = this.$route.params.id;
      axios.get('http://localhost:3000/posts/'+this.id)
      .then(response => {
          // Handle the API response here
          console.log(response.data);
          this.form = response.data;
      })
      .catch(error => {
          // Handle any errors that occurred
          console.error(error);
      });
    }  
  };
  </script>