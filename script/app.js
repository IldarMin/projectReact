var INFO = [
  {
      id: 0,
      img: 'http://downloadicons.net/sites/default/files/women-business-user-icon-44928.png',
      name: "Katya",
      surname: "Merci",
      tel: "89297220291"
  },
  {

      id: 1,
      name: "Masha",
      img: 'http://www.clker.com/cliparts/b/1/f/a/1195445301811339265dagobert83_female_user_icon.svg.med.png',
      surname: "Ledyava",
      tel: "89297220211"
  },
  {
      id: 2,
      name: "Dinara",
      img: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-female-alt-icon.png',
      surname: "Sotnikova",
      tel: "89297220222"
  },
  {
      id: 3,
      img: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png',
      name: "Sasha",
      surname: "Sotnikov",
      tel: "89297220233"
  }
];

var Contact = React.createClass({
    render: function() {
      return(
        <li className="contact_list">
          <img src={this.props.img} />
          <div className="contact_info">
            <div className="name">{this.props.name}</div>
            <div className="tel">{this.props.tel}</div>
          </div>
        </li>
      );
    }
});

var ContactsList = React.createClass({
    getInitialState: function () {
      return{
        displayedInfo: INFO
      };
    },

    changeEvent: function (e){
      var searchEvent = e.target.value.toLowerCase();
      // console.log(searchEvent);
      var displayedInfo = INFO.filter(function(el) {
        var searchElement = el.name.toLowerCase();
        return searchElement.indexOf(searchEvent) !== -1;
      })
      this.setState({
        displayedInfo: displayedInfo
      });
    },

    render: function(){
      return (
        <div className="container">
          <input type="text" onChange={this.changeEvent}/>
          <ul>
              {
                this.state.displayedInfo.map(function (el) {
                  return <Contact
                          key={el.id}
                          name={el.name}
                          tel={el.tel}
                          surname={el.surname}
                          img={el.img}/>
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
