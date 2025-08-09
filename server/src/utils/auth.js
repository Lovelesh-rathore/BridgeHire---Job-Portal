import jwt from "jsonwebtoken";

export const genAuthToken = (user_ID, res) => {
  const token = jwt.sign({ id: user_ID }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("secret", token, {
    maxAge: 1000 * 60 * 60 * 24,
    htppOnly: true,
    sameSite: "strict",
    secure: false,
  });
};
