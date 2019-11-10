import React, { Component } from 'react';
import sheep from '../../assets/ovelha.png';
import apiURL from '../../services/api';
import axios from 'axios';
import Loader from '../loader/index';
import './styles.css';
// const Sheep = () => <img src={sheep} alt='sheep' />;
// export default Sheep;

// export default class Sheep extends React.Component {
//   render() {
//     return <img src={sheep} alt='sheep' />;
//   }
// }

class Sheep extends Component {
  state = {
    fact: {},
    loading: false
  };

  componentDidMount() {
    this.getNewChuckFact();
  }

  /**
   * Função de buscar os dados na api. Primeiro setSate do loading como TRUE, isso vai fazer o loading aparecer.
   * Com o callback dessa operação, ele busca os dados na API, extrai os dados de res.data e salva no estado 'fact' e volta o loading para FALSE
   *
   */

  getNewChuckFact = () => {
    this.setState({ loading: true }, () => {
      axios
        .get(`https://api.chucknorris.io/jokes/random`)
        .then(res => {
          console.log('response', res);
          this.setState({ fact: res.data, loading: false });
        })
        .catch(error => console.log('errror while fetching data', error));
    });
  };

  render() {
    const { fact, loading } = this.state;
    return (
      <article className='arcticle_container'>
        <button className='sheep' onClick={() => this.getNewChuckFact()}>
          <img src={sheep} alt='sheep' />;
        </button>
        <div id='fact_container'>{loading ? <Loader /> : fact.value}</div>
      </article>
    );
  }
}

export default Sheep;
