import AppError from "../../core/error";
import {Request, Response}  from 'express'
import AuthServices from "../../services/admin/auth.service";
import catchAsync from "../../middlewares/catchAsync.middleware";
import sendResponse from "../../utils/response";
class AuthController {
    static addAdmin = catchAsync(async (req:Request, res:Response) => {
        const data = await AuthServices.signUp(req.body);
        console.log(data)
        return sendResponse(res,'Success!',data,200)
    })
}

export default AuthController;
