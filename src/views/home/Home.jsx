import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../../components/userlist/UserList';
import './Home.css';


const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/Usuario", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      console.log('Respuesta:', response);
      if (!response.ok) {
        throw new Error("La solicitud no tuvo éxito");
      }
      return response.json();
    })
    .then((data) => {
      console.log('Datos recibidos:', data);
      setUsers(data); // Guardamos los datos como string
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error al cargar datos:", error);
      setIsLoading(false);
    });
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
