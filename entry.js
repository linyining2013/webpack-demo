document.write('i am entry webpack')

document.write(require('./module.js'))

require('!style-loader!css-loader!./site.css')