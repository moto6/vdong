const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000
const args = process.argv


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

function jsonFilePath() {
  return path.join(__dirname, args[2])
}

function readFromFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return null
  }
}

app.get('/', (req, res) => {
  const filePath = jsonFilePath()
  console.log("DB >",filePath)
  if (!filePath) {
    return res.status(404).send(' ERROR!! File path is required')
  }
  const jsonData = readFromFile(filePath)
  if (jsonData) {
    res.json(jsonData)
  } else {
    res.status(500).send('ERROR!! reading JSON file')
  }
})

