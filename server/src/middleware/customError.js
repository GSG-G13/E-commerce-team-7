// const customError = (status, massage) => {
//   const error = new Error(massage);
//   error.status = status;
//   return error;
// };

class customError {
  constructor(status, message){
    this.status = status;
    this.message = message;
  }
}
export default customError;