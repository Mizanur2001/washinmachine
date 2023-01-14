import nodeMailer from 'nodemailer'

const sendMail = () => {
    return {
        index(req, res) {
            const { name, phone, email, msg } = req.body

            const transpoter = nodeMailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            })

            const mailOption = ({
                from: process.env.EMAIL,
                to: 'support@washinmachine.com',
                subject: `Mail from ${name}`,
                text: `${name} contact Email is --> ${email} and phone Number is --> ${phone} ----------------------------
                ${msg}`
            })

            transpoter.sendMail(mailOption, (err, info) => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send("mail Sent Successfully")
                }
            })
        }
    }
}

export default sendMail