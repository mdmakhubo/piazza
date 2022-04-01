import cookie from "cookie";

const handler = (req, res) => {

  if (req.method === "POST") {
    const { username, password } = req.body;
    const token = "VH*^$)NV,ddns||cWe%hbbnFBddd";

    if (
      username === "admin" &&
      password === "password123"
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Succesfull");
    } else {
      res.status(400).json("Wrong Credentials!");
    }
  }
};

export default handler;