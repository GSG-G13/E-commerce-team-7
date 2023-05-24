export const logoutController = (req, res) => {

  const { token } = req.cookies;

  if (!token) {
    res.json({
      message: 'not authenticated'
    })
  } else {
    res.json({
      message: 'User Logged Out Successfully',
    })
  }

}