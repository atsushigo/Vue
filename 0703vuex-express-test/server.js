const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.urlencoded({
	extended: false
}))
app.use(express.json())
app.use(cors())
app.get("/", function(req, res) {
	res.send("get ok")
});

app.listen(3010);
