import "@babel/polyfill"
console.log(1111)
import png from './1.png'
import './style.scss'

const img = new Image()
img.src = png

console.log(new Promise(()=>{}))

document.body.append(img)

// import React,{Component} from 'react'
// import ReactDom from 'react-dom'
// class App extends Component {
//     render() {
//         return (
//             <div>react app</div>
//         )
//     }
// }

// ReactDom.render(<App />, document.getElementById('root'))
