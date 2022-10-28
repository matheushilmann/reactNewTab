import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Users } from '../Users/users'
import { Modal } from '../Modal/modal'
import { Mask } from '../Modal/Mask/mask'
import { cards } from '../Modal/Cards/cards';
import home from './home.css'

export function Home(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => { // Evitar loop na lista
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce') // Pegar dados da API (GET)
      .then(response => {setUsers(response.data);})
      .catch(error => { console.log(error); })
  }, []);



  return (
    <>{
      users.map((user) =>{ // Map para buscar os itens da lista API
        return (
          <Users
            img = {user.img}
            name = {user.name}
            key = {user.id}
            id = {user.id}
            username = {user.username}
            onClick={() => {
            }}
          />
        )})
      }    
    </>
  )
}
