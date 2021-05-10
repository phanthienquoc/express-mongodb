import mongoose from "mongoose";

import { ContactShema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactShema);

export const addNewContact = (req, res) => {
    let newConact = new Contact(req.body);

    newConact.save((err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err)
        }

        res.json(contact)
    })
}

export const getContactById = (req, res) => {
    Contact.findById({ _id: req.params.id }, (err, contact) => {
        if (err) {
            res.send(err)
        }

        res.json(contact)
    })
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err)
        }

        res.json(contact)
    })
}

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.id }, (err, contact) => {
        if (err) {
            res.send(err)
        }

        res.json({ message: "successfully deleted contact" })
    })
}