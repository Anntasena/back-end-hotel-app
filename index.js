const express = require("express");
const app = express();
app.use(express.json()); // Body Parser: Mengambil data yang dikirimkan oleh client melalui body

const PORT = 5004;

// Import Router
const { hotelsRouters } = require("./routers");
app.use("/hotel", hotelsRouters);

app.listen(PORT, () => console.log(`API Running on Port ${PORT}`));
