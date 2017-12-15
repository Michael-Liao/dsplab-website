module.exports = {
  db: { // only for fast tests!!!!!
    database: process.env.DB_NAME || 'labsite',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'stincky0925',
    options: {
      dialect: 'mysql',
      host: process.env.HOST || 'localhost',
    },
  }
};
