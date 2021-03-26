const express = require("express")
const app = express()
const routes = require("./routes")

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(routes)
app.use(express.static(__dirname + "/../public"))
app.listen(3000, () => console.log("Servidor iniciado"))