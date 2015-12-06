# react-image-list

simple way to show image list in react 

### Demo

[demo](http://ctxhou.github.io/react-image-list/)

## Props

| Property | type   | default           | required | description                                                          |
|----------|--------|-------------------|----------|----------------------------------------------------------------------|
| imageData     | object | n/a               | yes      | the data of your image ; format:  [ {url: <img url>, name: "name"} ] |
| gridClass  | string | col col-4 px2 py2 | no       | set the grid class name                                              |
| imgClass | string | imageList__img    | no       | set the image class name                                             |

## Example

data: 
    
```js
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
```

js:

```js
var ImageList = require('react-image-list');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ImageList imageData={data}
                    wrapperClass="wrapper"
                    gridClass="col-md-3"
                    imgClass="responsive"/>
      </div>
    )
  }
})
```

If you want to use the same style as the demo page, clone this [css](https://github.com/ctxhou/react-image-list/blob/master/dist/react-image-list.css).

## Development

    npm install
    npm start
    npm run build:lib


## todo

more flexible

## License

MIT [@ctxhou](github.com/ctxhou)