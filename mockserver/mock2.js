const MINUTE_TO_MILLIS = 60 * 1000
const PORT = 3000
const CIRCUIT_BREAKER_MILLS = 30 * MINUTE_TO_MILLIS
const HTTP_PATH_PREFIX = 'api/v0'

const express = require('express')
const fs = require('fs')
const path = require('path')
const { re } = require('@babel/core/lib/vendor/import-meta-resolve')

const args = process.argv
const app = express()

app.listen(PORT, () => {
  console.log(`\nServer is running at http://localhost:${PORT}`)
  const filePath = jsonFilePath()
  console.log(`circuit breaker after ${CIRCUIT_BREAKER_MILLS / (MINUTE_TO_MILLIS)} min`)
  console.log('DataSource =', filePath)
  console.log('\nResources')
  logDynamicEndpoints()
})

app.get('/', (req, res) => {
  const filePath = jsonFilePath()
  if (!filePath) {
    return res.status(404).send(' ERROR!! File path is required')
  }
  const jsonData = readFromFile(filePath)
  if (jsonData) {
    allowAnyOrigins(res)
    res.json(jsonData)
  } else {
    res.status(500).send('ERROR!! reading JSON file')
  }
})

app.get(`/${HTTP_PATH_PREFIX}/:dataName`, (req, res) => {
  const { dataName } = req.params
  const filePath = jsonFilePath()
  if (!filePath) {
    return res.status(404).send(' ERROR!! File path is required')
  }
  const jsonData = readFromFile(filePath)
  if (jsonData && jsonData[dataName]) {
    allowAnyOrigins(res)
    res.json(jsonData[dataName])
  } else {
    res.status(500).send(`ERROR!! ${dataName} data not found`)
  }
})

//-----------------------------------

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
    console.log(`http://localhost:${PORT}/${HTTP_PATH_PREFIX}/${dataName}`)
  })
}

function allowAnyOrigins(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
}

setTimeout(() => {
  console.log('elapsed... Closing server')
  app.close()
}, CIRCUIT_BREAKER_MILLS)
