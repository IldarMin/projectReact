var INFO = [
  {
      id: 1,
      name: "Katya",
      surname: "Merci",
      tel: "89297220291"
  },
  {
      id: 2,
      name: "Masha",
      surname: "Ledyava",
      tel: "89297220211"
  },
  {
      id: 3,
      name: "Dinara",
      surname: "Sotnikova",
      tel: "89297220222"
  },
  {
      id: 4,
      name: "Sasha",
      surname: "Sotnikov",
      tel: "89297220233"
  }
];

var Contact = React.createClass({
    render: function() {
      return(
        <li>
          <div>{this.props.id}</div>
          <div>{this.props.name}</div>
          <div>{this.props.surname}</div>
        </li>
      );
    }
});

var ContactsList = React.createClass({
    render: function(){
      return (
        <div>
          <ul>
              {
                INFO.map(function (el) {
                  return <Contact key={el.id} name={el.name} id={el.id} surname={el.surname}/>
                })
              }
          </ul>
        </div>
      );
    }
});

ReactDOM.render(
    <ContactsList />,
    document.getElementById('content')
);
