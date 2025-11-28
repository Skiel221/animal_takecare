const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'token'; // si usás cookie httpOnly

exports.register = async (req, res) => {
  const { email, password, nombre, apellido } = req.body;
  if (!email || !password) return res.status(400).json({ msg: 'Faltan datos' });

  try {
    const [exists] = await pool.query('SELECT id FROM usuarios WHERE email = ?', [email]);
    if (exists.length) return res.status(409).json({ msg: 'Email ya registrado' });

    const hash = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (email, password, nombre, apellido) VALUES (?, ?, ?, ?)', 
      [email, hash, nombre || null, apellido || null]);

    return res.status(201).json({ msg: 'Usuario creado' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Error del servidor' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: 'Faltan datos' });

  try {
    const [rows] = await pool.query('SELECT id, password, nombre, apellido, role FROM users WHERE email = ?', [email]);
    if (!rows.length) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const payload = { id: user.id, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });

    // 1) devolver token en cookie httpOnly (recomendado)
    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 8 * 3600 * 1000
    });

    // 2) opcional: enviar datos del usuario
    res.json({ msg: 'Logueado', user: { id: user.id, nombre: user.nombre, apellido: user.apellido } });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

exports.me = async (req, res) => {
  // Si usás middleware que pushea req.user, devolvé eso
  if (!req.user) return res.status(401).json({ msg: 'No autenticado' });
  res.json({ user: req.user });
};
