import React from 'react';
import axios from 'axios';

export const useSendData = (data) => {
  console.log('soy el data', data)
  if (!data.text || !data.author) {
    return
  }
  axios.post('http://localhost:3000/message', data)
    .then(response => {
      console.log(response);
      return response
    })
}
