var React = require('react');
// var ReactDOM = require('react-dom');
var ImageList = require('../index');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ImageList imageData={data}/>
      </div>
    )
  }
})

var data = [
  {
    url: "https://media.giphy.com/media/mBeVNSCfd6lH2/giphy.gif",
    name: "img1"
  },
  {
    url: "https://media.giphy.com/media/ecBo3S3v3lp4Y/giphy.gif",
    name: "img2"
  },
  {
    url: "https://media.giphy.com/media/RiFRWvxngVVNC/giphy.gif",
    name: "img3"
  },
  {
    url: "https://media.giphy.com/media/EH8LJFg68Mss8/giphy.gif",
    name: "img4"
  },
  {
    url: "https://media.giphy.com/media/fEy4Eug2MFy/giphy.gif",
    name: "img5"
  }
]

React.render(
  <App/>,
  document.getElementById('root')
);