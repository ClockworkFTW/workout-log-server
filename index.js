const app = require("express")();
const dbConnect = require("./models");
dbConnect();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser());

const userRouter = require("./routes/user");
app.use("/user", userRouter);

const exerciseRouter = require("./routes/exercise");
app.use("/exercise", exerciseRouter);

const workoutRouter = require("./routes/workout");
app.use("/workout", workoutRouter);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
	console.log(`App started on port ${PORT}`);
});
