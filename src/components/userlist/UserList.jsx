import React from 'react';
import './userList.css';


const nombreMap = {
  id_user: 'ID',
  name_usuario: 'Nombres',
  password: 'Contraseña',
  fk_id_type_user: 'Tipo de usuario',
  fk_dni: 'DNI'
};

const UserList = ({ user }) => {
  const getUserProps = () => {
    const props = ['id_user', 'name_usuario', 'password','fk_id_type_user', 'fk_dni'];
    return props.map(prop => (
      <p key={prop}>{`${nombreMap[prop]}: ${user[prop] || 'No disponible'}`}</p>
    ));
  };

  return (
    <div className="user-card">
      {getUserProps()}
    </div>
  );
};

export default UserList