const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000
const args = process.argv

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  logDynamicEndpoints()
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

// 동적 엔드포인트 로그
function logDynamicEndpoints() {
  const filePath = jsonFilePath()
  if (!filePath) {
    console.error(' ERROR!! File path is required')
    return
  }
  const jsonData = readFromFile(filePath)
  if (!jsonData) {
    console.error('ERROR!! reading JSON file')
    return
  }
  Object.keys(jsonData).forEach(dataName => {
    console.log(`ServeAt: http://localhost:${port}/${dataName}`)
  })
}

app.get('/', (req, res) => {
  const filePath = jsonFilePath()
  console.log('DB >', filePath)
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

app.get('/:dataName', (req, res) => {
  const { dataName } = req.params
  const filePath = jsonFilePath()
  if (!filePath) {
    return res.status(404).send(' ERROR!! File path is required')
  }
  const jsonData = readFromFile(filePath)
  if (jsonData && jsonData[dataName]) {
    res.json(jsonData[dataName])
  } else {
    res.status(500).send(`ERROR!! ${dataName} data not found`)
  }
})
