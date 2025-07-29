const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
