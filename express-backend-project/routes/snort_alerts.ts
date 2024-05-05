import express, { Request, Response, NextFunction } from 'express';
import { validateAndTransform } from './../middlewares/class-validator.middleware';
import { UserAddDTO } from '../dto/users/user.add.dto';
import UserController from './../controllers/users/user.controller';
import AuthenticationMiddleware from './../middlewares/authentication.middleware';
import RateLimiter from './../util/rate-limiter';
import { UserLoginDTO } from '../dto/users/userLogin.dto';

const router = express.Router();
const controller = new UserController();
const authController = new AuthenticationMiddleware();
const rateLimiter = new RateLimiter();
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

/* GET users listing. */
router.get('/pdf', rateLimiter.getLimiter,
    (req, res)=>{
        const date = new Date().getTime();
        const filePath = path.join(__dirname,'..','public','reports', `output_${date}.pdf`);
        console.log('Path', filePath)
        const doc = new PDFDocument();

        
        doc.pipe(fs.createWriteStream(filePath));
        
        doc
        .fontSize(25)
         
        .text(`Report Generated on ${new Date().toString()}`, 100, 100);

        doc.end()

       // res.set('Content-Type', 'application/pdf');
       // fs.createReadStream(filePath).pipe(res);
       res.status(200).json({
        status:'Success',
        url:`/reports/output_${date}.pdf`
       })
       
    });

module.exports = router;
