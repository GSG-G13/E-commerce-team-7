const clientError = (req, res) => {
    res.status(404).json({
        error: true,
        massage: 'page not found'
    });
};
export default clientError;