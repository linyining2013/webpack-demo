import React from 'react'
import ReactDom from 'react-dom';

let reactNode = React.createElement('h1', null, '哈哈哈哈')
ReactDom.render(reactNode, document.getElementById('app'))