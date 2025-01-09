import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../../components/userlist/UserList';
import './Home.css';


const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Usuario');
        console.log('Datos recibidos:', response.data);
        setUsers(response.data); // Guardamos los datos correctamente
      } catch (error) {
        console.error('Error al cargar datos:', error);
      } finally {
        setIsLoading(false);
      }
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
