
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import axios from "axios"

dotenv.config({
  path: "./env"
})


const app = express()
const port = process.env.PORT || 3000 ;


app.use(express.json()) ;

app.use(cors({origin: "*"}))



app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})