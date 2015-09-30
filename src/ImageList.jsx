var React = require('react');
var Image = require('./Image.jsx');
var ImageList = React.createClass({
  getDefaultProps: function() {
    return {
      defautImgWrapper: 'clearfix'
    }
  },

  getInitialState: function() {
    return {
      imgWrapper: this.props.imgWrapper || this.props.defautImgWrapper,
      imageData: this.props.imageData
    }
  },

  handleClick: function(data) {
    this.props.handleClickImage(data);
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.imageData !== this.state.imageData) {
      this.setState({imageData: nextProps.imageData })
    }
  },

  render: function() {
    var that = this;
    var imageList = [];
    this.state.imageData.forEach(function(data) {
      imageList.push(<Image data={data}
                            imgClass={that.state.imgClass}
                            handleClick={that.handleClick}/>)
    })

    return (
      <div className={this.state.imgWrapper}>
        {imageList}
      </div>
    )
  }

});

module.exports = ImageList;