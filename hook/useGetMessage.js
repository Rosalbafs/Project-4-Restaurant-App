import React, { useEffect } from 'react'
import axios from 'axios'

export const useGetMessage = () => {
  useEffect(() => {
    axios.get('http://localhost:5000/message')
      .then((response) => console.log(response.data))
  }, [])
}