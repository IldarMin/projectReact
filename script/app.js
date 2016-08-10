var HelloWorld = React.createClass({
    render: function(){
      return <h1>Hello {this.props.name}, I love {this.props.loves} !</h1>
    }
});

ReactDOM.render(
  <div>
    <HelloWorld name="Ildar" loves="football"/>
    <HelloWorld name="Katya" loves="tennis"/>
    <HelloWorld name="Masha" loves="volleyball"/>
    <HelloWorld name="Manya" loves="hockey"/>
  </div>,
  document.getElementById('content')
);
