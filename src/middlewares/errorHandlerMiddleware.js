export const errorHandlerMiddleware = () => {
  (req, res) => {
    res.status(500).send('Oops! Something went wrong');
  };
};
