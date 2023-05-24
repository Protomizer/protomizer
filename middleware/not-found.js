//Requests to routes that do not exist

const notFoundMiddleware = (req, res) => {
    res.status(404).send('Route not found!')
}

export default notFoundMiddleware;