var FilterCards = React.createClass({
  render: function() {
    var result = [];
    this.props.cardObject.forEach(function(card) {
      result.push(<Card nome={card.nome} origem={card.origem} significado={card.significado} />);
    });
    return (
      <div>
        {result}
      </div>
    );
  }
});

  var Card = React.createClass({
    render: function() {
      return (
        <div>
          <p>Card</p>
          <p>Nome: {this.props.nome}</p>
          <p>Origem: {this.props.origem}</p>
          <p>significado: {this.props.significado}</p>
          <hr />
        </div>
        );
    }
  });

  var WelcomeMsg = React.createClass({
    render: function() {
      return (
        <div>
          <h1> Seja bem Vindo ao Projeto Dialetus </h1>
          <h2> Em breve uma página Sensacional nesse Projeto </h2>
        </div>
        );
    }
  });

  var Dialetus = React.createClass({
    render: function() {
      return (
        <div>
          <WelcomeMsg />
          <FilterCards cardObject={this.props.cardObject} />
        </div>
      );
    }
  });

  var CARDS = [
  {nome: 'barril', origem:'Bahia', significado:'foda, legal demais', relacionados:['barriado']},
  {nome: 'fragar', origem:'minas gerais', significado:'ver, observar', relacionados:['manja']},
  {nome: 'Ó paí ó', origem:'Bahia', significado:'não sei'}
  ];

  ReactDOM.render(
    <Dialetus cardObject = {CARDS} />,
    document.getElementById('content')
    );
