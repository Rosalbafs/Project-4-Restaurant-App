import React from 'react';

import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;

const express = require('express')
const app = express()
const messageRoutes = require('./messages')
const PORT = 5000

app.use(express.json())
app.use('/message', messageRoutes)

app.get('/', (req, res) => {
  res.send({
    message: 'hi ucamp'
  })
})

app.listen(5000, () => {
  console.log(`El servidor está corriendo en el puerto: ${PORT}`)
})