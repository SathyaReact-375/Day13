import React from 'react';
import useFetch from './useFetch';

const UserList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{textAlign:'center'}}>
         <h1>Task4</h1>
      <h1>User List</h1>
      <ul style={{listStyleType:"none"}}>
        {data?.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;