console.log("connected")

const handleRegister = async (ev) => {
    try {
        ev.preventDefault()
        console.log("handeleRegiater")
        const firstName = ev.target.firstName.value;
        const lastName = ev.target.lastName.value;
        const password = ev.target.password.value;
        const email = ev.target.email.value;
        const phone = ev.target.phone.value;
        const zipCode = ev.target.zipCode.value;
        
        if (!firstName || !lastName ||!email || !password || !phone || !zipCode) throw new Error ("All fields are required");

        const response = await axios.post("/api/users", {firstName, lastName, email, password,  phone, zipCode })
        console.log(response)
        
    } catch (error) {
        console.error(error) 
    }
     
}

// decoding cookie example - client side
async function handleCheckIfUserIsconnected() {
    try {
      //@ts-ignore
      const { data } = await axios.get("/api/users/get-user-by-cookie");
      const { userDB } = data;
  
      console.log("user has connected!")
    } catch (error) {
      console.error(error);
    }
  }

