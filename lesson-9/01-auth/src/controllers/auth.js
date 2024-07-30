import * as AuthService from '../services/auth.js';

async function register(req, res) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const registeredUser = await AuthService.registerUser(user);

  res.send({ status: 200, message: 'User registered', data: registeredUser });
}

async function login(req, res) {
  const { email, password } = req.body;

  await AuthService.loginUser(email, password);

  res.send('Login completed');
}

export { register, login };
