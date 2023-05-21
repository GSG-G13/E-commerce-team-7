const customError = (status, massage) => {
    const error = new Error(massage);
    error.status = status;
    return error;
}
export default customError