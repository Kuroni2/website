import axios from 'axios'

axios
.get("https://localhost:3001/users")
.then(response => {
  const users = response.data
  console.log(users)
})