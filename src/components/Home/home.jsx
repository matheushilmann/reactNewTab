import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css'
import { Users } from '../Users/users'
import { Modal } from '../Modal/modal'
import { Mask } from '../Modal/Mask/mask'
import { cards } from '../Modal/Cards/cards';

export function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => { // Evitar loop na lista
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce') // Pegar dados da API (GET)
      .then(response => { setUsers(response.data) })
      .catch(error => { console.log(error) })
  }, []);

  const openModal = (user) => {
    setUsers(user);
  }

  return (
    <>{
        users.map((u) =>( // Map para buscar os itens da lista API
          <Users
            img = {u.img}
            name = {u.name}
            key = {u.id}
            id = {u.id}
            username = {u.username}
            onClick={() => {openModal(u)}}             
          />
        )) 
      }

      {users.id && <Modal users={users} setUser={setUsers}/> }  
       
    </>
  )
}
