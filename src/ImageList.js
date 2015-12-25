var React = require('react');
var Image = require('./Image');

var ImageList = React.createClass({
  getDefaultProps: function() {
    return {
      defautImgWrapper: 'clearfix'
    }
  },

  getInitialState: function() {
    return {
      wrapperClass: this.props.wrapperClass || this.props.defautImgWrapper,
      imageData: this.props.imageData
    }
  },

  handleClick: function(data) {
    if(this.props.handleClickImage){
      this.props.handleClickImage(data);
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.imageData !== this.state.imageData) {
      this.setState({imageData: nextProps.imageData })
    }
  },

  render: function() {
    var that = this;
    var imageList = [];
    this.state.imageData.forEach(function(data, i) {
      imageList.push(<Image key={i}
                            data={data}
                            imgClass={that.props.imgClass}
                            gridClass={that.props.gridClass}
                            handleClick={that.handleClick}/>)
    })

    return (
      <div className={this.state.wrapperClass}>
        {imageList}
      </div>
    )
  }

});

module.exports = ImageList;