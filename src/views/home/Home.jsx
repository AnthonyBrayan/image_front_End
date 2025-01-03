import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../../components/userlist/UserList';
import './Home.css';


const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = () => {
      axios.get('http://localhost:3000/Usuario')
      .then(response => {
        console.log('Datos recibidos:', response.data);
        setUsers(response.data); // Guardamos los datos correctamente
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar datos:", error);
        setIsLoading(false);
      });

    };
  
    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      {users && users.map((user, index) => (
        <UserList key={index} user={user} />
      ))}
    </div>
  );
};

export default Home;
