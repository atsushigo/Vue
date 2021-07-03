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
app.post("/login",(req,res)=>{
	const USERNAME = "sam"
	const PASSWORD = "12345"
	
	const {username,password} = req.body.user
	
	if(username === USERNAME && password === PASSWORD){
		res.json({
			message:"login OK"
		})
	}else{
		res.status(403).json({
			message:"Login資料不正確"
		})
	}
	
})

app.listen(3010);
