const { Router } = require('express');
const router = Router();

router.get('/', (_, res) => res.render('index.ejs'));
router.get('/discord', (_, res) => res.redirect('https://discord.gg/jhWNPtH'));
router.get('/github', (_, res) => res.redirect('https://github.com/auguwu'));

module.exports = router;