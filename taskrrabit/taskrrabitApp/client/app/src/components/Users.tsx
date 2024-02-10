import React from 'react'

const Users = () => {
    const name = "Pepito"
    const admin = true
  return (
    <div>
        <div>Users</div>
        <h1>How R U, {name}?</h1>
        {admin ? <h2>Admin authorised</h2> : <h2>Go home, Loser</h2>}
    </div>
  )      
}

export default Users