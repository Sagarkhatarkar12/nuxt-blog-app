import { defineStore } from "pinia";
// import { routerKey } from "vue-router";
import { useRouter  } from "vue-router";
export const useLoginStore = defineStore("login", {
  state: () => ({
  
    accessToken: "",
    user: { },
    isAuthenticated: false,
  }),
  actions: {
     Login(email, password) {
  // const data = null;
   
       console.log("email", email);
       console.log("password", password);
    
  
   const response =    fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),

      })
      .then((res) => res.json())
      .then((data)=>{
        // console.log("data", data.accessToken);

        if(data && data.accessToken) {
          this.accessToken = data.accessToken;
          // this.user.userName = data.username;
          this.user = data
          // console.log(data)
          this.isAuthenticated = true;
          // console.log("user", this.user);
           const router = useRouter();
         return navigateTo('/profile')
            // router.push('/dashboard') 
        
        }
      })
         
   
      
    },
  },
});
