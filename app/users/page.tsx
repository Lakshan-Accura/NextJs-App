import React, { use } from 'react'
import { Interface } from 'readline';

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {

   const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' } 

)
    const users: User[] = await res.json();

  return (
    <>
    <div>Users</div>
    <p>{new Date().toLocaleTimeString()}</p>
<ul>
    {users.map
    (user => <li key={user.id}>{user.name}</li>)}
</ul>
    </>
  )
}

export default UsersPage