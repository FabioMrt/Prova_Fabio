const service = require('../service/subject.service')

const create = (req, res) => {
    if (req.body.name && req.body.workload && req.body.teacherName) {
        service.create(req.body)
        res.status(201).send('Subject created successfully!');
    } else {
        res.status(400).send('Bad Request !');
    }
}

const listAll = (req, res) => {
    const responseBody = service.listAll()
    if (responseBody.length) {
        res.status(200).send(responseBody)
    } else {
        res.send('Error! Invalid value.');
    }
}

const update = (req, res) => {

    if (req.body.name && req.body.workload && req.body.teacherName) {
        const responseBody = service.update(req.params.id, req.body)
        if (responseBody) {
            res.status(200).send('Subject updated successfully!');
        } else {
            res.status(400).send('Invalid ID!');
        }
 
    }
}

const remove = (req, res) => {
    const responseBody = service.remove(req.params.id)
    if (responseBody) {
        res.status(200).send('Subject removed successfully!');
    } else {
        res.status(400).send('Invalid ID!');
    }

}

module.exports = {
    create,
    listAll,
    update,
    remove
}