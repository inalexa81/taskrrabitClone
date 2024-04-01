import express from "express";
import ActionModel from "./actoinsModel";


export async function createAction(req: express.Request, res: express.Response) {
    try {
        console.log("actionCtrl");
        const {category, action} = req.body;
        if(!category || !action) throw new Error("on file actionsCtrl on function register: missing information ")

        const actionDB = new ActionModel({category, action});
        await actionDB.save();
        console.log(actionDB)

        res.send({createAction: true, actionDB});
        console.log(actionDB)

    } catch (error) {
        res.send({createAction: false, error: error.message})
    }
}

export async function getCategories(req: express.Request, res: express.Response) {
    try {
        const categories = await ActionModel.distinct("category");
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export async function getActions(req: express.Request, res: express.Response) {
    try {
        const actions = await ActionModel.distinct("action");
        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}