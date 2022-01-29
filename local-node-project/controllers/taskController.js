module.exports = {
    get(req, res) {
        response.json({ message: 'All tasks here' });
    },
    getById(req, res) {
        response.json({ message: 'One task here' });
    },
    create(req, res) {
        res.status(200).json({
            success: true,
            body: req.body,
        });
    },
};
