import User from "../../models/User.js";
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'

const controller = {

    sign_up: async (req, res, next) => {
        req.body.is_online = false
        req.body.is_admin = false
        req.body.is_author = false
        req.body.is_company = false
        req.body.is_verified = true
        req.body.verify_code = crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            await User.create(req.body)
            return res.status(200).send('¡Usuario registrado!')
        } catch (error) {
            console.log(error)
            next(error)
        }
        },

    sign_in: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            const token = jsonwebtoken.sign(
                {id: user._id}, //datos a encriptar
                process.env.SECRET, //llave para encriptar/desencriptar
                {expiresIn: 60*60*24*7} //tiempo que dura el token
                )
            //return res.status(200).send('¡Usuario online!')
            return res.status(200).json({
                success: true,
                message: '¡Usuario online!',
                data: token
            })
        } catch (error) {
        next(error)
        }
        },

    sign_out: async (req, res, next) => {
        console.log(req.user)
        const { email } = req.user
        try {
            await User.findOneAndUpdate(
            { email },
            { is_online: false },
            { new: true }
            )
            //return res.status(200).send('¡Usuario offline!')
            return res.status(200).json({
                success: true,
                message: '¡Usuario offline!',
            })
        } catch (error) {
            next(error)
        }
        },

    signintoken: async (req, res, next) => {
        let { user } = req
        try {
            req.body.success = true
            req.body.sc = 200
            req.body.data = { user }
            return defaultResponse(req,res)
        } catch (error) {
            next(error)
        }
    },
}

export default controller