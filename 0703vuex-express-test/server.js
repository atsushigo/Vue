const express = require("express")
const app = express()
const cors = require("cors")
const jwt = require("jsonwebtoken")

// JWT密鑰改從環境變數讀取，避免硬編碼進原始碼
const JWT_SECRET = process.env.JWT_SECRET || "dev-only-placeholder-secret"

app.use(express.urlencoded({
	extended: false
}))
app.use(express.json())
app.use(cors())
app.get("/", function(req, res) {
	res.send("get ok")
});
app.get("/hi",(req,res)=>{
	// console.log(req.headers)
	const {authorization} = req.headers
	const[, token] = authorization.split(" ")
	// console.log(token)
	const tokenVerify = jwt.verify(token,JWT_SECRET)
	if(tokenVerify){
		res.json({
			message:"帶token的HI OK"
		})
	}else{
		res.status(403).json({
			message:"error"
		})
	}
	
})
app.post("/login",(req,res)=>{
	const USERNAME = process.env.DEMO_USERNAME || "sam"
	const PASSWORD = process.env.DEMO_PASSWORD || "dev-only-placeholder-password"

	const {username,password} = req.body.user

	if(username === USERNAME && password === PASSWORD){
		const user = {
			id:1,
			username,
		}
		const token = jwt.sign(user,JWT_SECRET)

		res.json({
			message:"login OK",
			user,
			token
		})
	}else{
		res.status(403).json({
			message:"Login資料不正確"
		})
	}
	
})

app.listen(3010);
