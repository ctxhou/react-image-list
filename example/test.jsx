var React = require('react');
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
    url: "http://fakeimg.pl/200/?text=img1",
    name: "img1"
  },
  {
    url: "http://fakeimg.pl/200/?text=img2",
    name: "img2"
  },
  {
    url: "http://fakeimg.pl/200/?text=img3",
    name: "img3"
  },
  {
    url: "http://fakeimg.pl/200/?text=img4",
    name: "img4"
  },
  {
    url: "http://fakeimg.pl/200/?text=img5",
    name: "img5"
  }
]

module.exports = App;