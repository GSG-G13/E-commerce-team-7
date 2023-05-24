export const logoutController = (req, res) => {

  const { token } = req.cookies;

  if (!token) {
    res.json({
      message: 'not authenticated'
    })
  } else {
    res.clearCookie("token").json({
      status: 200,
      message: 'User Logged Out Successfully',
    })
  }

}