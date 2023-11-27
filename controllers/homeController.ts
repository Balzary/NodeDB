import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{


    let users = await User.findAll();
    
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Naruto',
        lastName: 'Uzumaki',
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};

export const cadastrar = async (req: Request, res :Response) =>{
   
    await User.create({
        name: req.body.nome,
        age: req.body.idade
    })

    let users = await User.findAll();

    res.render('pages/home', {
        users
    });
}


