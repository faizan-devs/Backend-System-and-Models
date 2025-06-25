import { asyncHandler } from "../utils/aynchandler.js"

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "backend running"
    })
})

export { registerUser }