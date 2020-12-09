var express = require("express");
var router = express.Router();

// router.get("/", function (req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
//     res.send("API is working properly");
// });

router.post("/access", (req, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message

    var mail = {
        from: name,
        to: email,
        subject: subject,
        text: message
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: "fail"
            })
        } else {
            res.json({
                status: "success"
            })
        }
    })
})

module.exports = router;