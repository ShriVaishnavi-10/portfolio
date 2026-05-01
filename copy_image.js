const fs = require('fs');
const src = 'C:\\Users\\VAISHU\\.gemini\\antigravity\\brain\\f672295e-ebfa-45cd-996f-ab8fa49ee3ad\\momentum_themed_1777653133084.png';
const dest = 'd:\\studying\\shrivaishnavi_portfolio\\public\\momentum-themed.png';
fs.copyFileSync(src, dest);
console.log('Copied successfully!');
