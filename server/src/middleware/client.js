const clientError = (req, res) => {
    res.status(404).json({massage: 'page not found'});
};
export default clientError;