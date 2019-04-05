const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = 4000
const cors = require("cors")
const axios = require("axios")
const path = require("path")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + "./../react-app/build/"))

// GET Tasks
app.get("/api/tasks", (request, response) => {
  axios
    .get("http://5c992ab94236560014393239.mockapi.io/tasks")
    .then((tasksGetResponse) => {
      return response.json(tasksGetResponse.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

// GET And PUT Individual Task
app.put("/api/tasks/:id", (request, response) => {
  axios
    .get(`http://5c992ab94236560014393239.mockapi.io/tasks/${request.params.id}`)
    .then((mockApiResponse) => {
      return axios
        .put(`http://5c992ab94236560014393239.mockapi.io/tasks/${request.params.id}`, {
          items: [...mockApiResponse.data.items, request.body.value]
        })
        .then((mockApiPutResponse) => {
          // console.log("mockApiPutResponse", mockApiPutResponse)
          response.json(mockApiPutResponse.data)
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
})

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "./../react-app/build/index.html"))
})

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT)
})
