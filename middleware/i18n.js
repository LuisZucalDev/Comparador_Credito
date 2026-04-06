const fs = require('fs');
const path = require('path');

const locales = {};
const localesPath = path.join(__dirname, '../locales');

// Load all locales
fs.readdirSync(localesPath).forEach(file => {
  if (file.endsWith('.json')) {
    const lang = file.replace('.json', '');
    locales[lang] = JSON.parse(fs.readFileSync(path.join(localesPath, file), 'utf8'));
  }
});

module.exports = (req, res, next) => {
  // 1. Check query param ?lang=
  // 2. Check cookie lang
  // 3. Fallback to 'es'
  let lang = req.query.lang || req.cookies.lang || 'es';
  
  if (!locales[lang]) lang = 'es';

  // Save to cookie for persistence
  if (req.query.lang) {
    res.cookie('lang', lang, { maxAge: 900000, httpOnly: true });
  }

  // Translation function
  const t = (key) => {
    const keys = key.split('.');
    let result = locales[lang];
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // Return key if not found
      }
    }
    return result;
  };

  res.locals.t = t;
  res.locals.currentLang = lang;
  next();
};
