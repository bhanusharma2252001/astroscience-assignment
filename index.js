const bodyParser = require('body-parser');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const { validate } = require('./schema/validate');
const { userSchema } = require('./schema/user.schema');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
})

const upload = multer({ storage: storage })
const app = express();
app.use(express.json());
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/createUser", upload.single('profilePic'), validate(userSchema), async (req, res) => {
    try {
        const data = req.body;
        data.profilePic = req.file.path;
        const createdUser = await prisma.user_details.create({ data });
        return res.status(201).json({ success: true, createdUser });

    } catch (error) {
        return res.status(500).json({ success: false, errorMessage: "Internal Server Error : " + error.message });
    }


})
app.listen(PORT, () => {
    console.log('server is listening on PORT: ', PORT);
})