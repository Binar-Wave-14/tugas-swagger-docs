const { Todos } = require('../models')

exports.update = async(req, res, next) => {
    try {
        const {id} = req.param
        const {todo} = req.body

        const [isExist, [data]] = await Todos.update({
            todo
        }, {
            where: {
                id
            },
            returning: true
        })

        if (!isExist) {
            throw {
                code: 404,
                message: 'todo not found'
            }
        }

        return res.status(200).json({
            code: 200,
            message: 'success update todo',
            data
        })
    } catch (error) {
        next(error)
    }
}