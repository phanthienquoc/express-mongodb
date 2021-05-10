import { CONTACT_PATH } from "../constants"
import { addNewContact, getContactById, getContacts, updateContact, deleteContact } from "../controllers/crmController"

const routes = (app) => {
    app.route(CONTACT_PATH)
        .get(getContacts)
        .post(addNewContact)

    app.route(`${CONTACT_PATH}/:id`)
        .get(getContactById)
        .put(updateContact)
        .delete(deleteContact)
}

export default routes;