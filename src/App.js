import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as WavesAPI from '@waves/waves-api';
import accounts from './accounts';
import data from './txdata';

const { contractAccount, player1, player2 } = accounts;

const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);

class App extends Component {
  state = {
    gameState: 0,
    player1Move: 0,
    player2Move: 0,
    message: '',
    messageLink: ''
  }

  initGame = async (e) => {
    e.preventDefault();
  
    const dataTxObj = {
      data: data[0],
      fee: 1000000 + 400000,
      sender: contractAccount.address,
      senderPublicKey: contractAccount.keyPair.publicKey
    };

    const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
    dataTx.addProof(contractAccount.keyPair.privateKey);
    const dataTxJSON = await dataTx.getJSON();
    
  try {
      const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);
      this.setState({message: `Команда успешно выполнена. Детали транзакции:`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, gameState: 1});
    } catch (error) {
      this.setState({message: `Ошибка выполнения транзакции. Проверьте состояние смарт-контракта:`, messageLink: `testnet.wavesexplorer.com/address/${contractAccount.address}`});
    }
  }

  startRegistration = async (e) => {
    e.preventDefault();
  
    const dataTxObj = {
      data: data[1],
      fee: 1000000 + 400000,
      sender: contractAccount.address,
      senderPublicKey: contractAccount.keyPair.publicKey
    };

    const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
    dataTx.addProof(contractAccount.keyPair.privateKey);
    const dataTxJSON = await dataTx.getJSON();
    try {
      const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);
      this.setState({message: `Команда успешно выполнена. Детали транзакции:`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, gameState: 2});
    } catch (error) {
      this.setState({message: `Ошибка выполнения транзакции. Проверьте состояние смарт-контракта:`, messageLink: `testnet.wavesexplorer.com/address/${contractAccount.address}`});
    }
  }

  registerPlayerOne = async (e) => {
    e.preventDefault();

  
    const dataTxObj = {
      data: data[2],
      fee: 1000000 + 400000,
      sender: contractAccount.address,
      senderPublicKey: contractAccount.keyPair.publicKey
    };

    const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
    dataTx.addProof(player1.keyPair.privateKey);
    const dataTxJSON = await dataTx.getJSON();
    try {
      const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);
      this.setState({message: `Команда успешно выполнена. Детали транзакции:`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, gameState: 3});
    } catch (error) {
      this.setState({message: `Ошибка выполнения транзакции. Проверьте состояние смарт-контракта:`, messageLink: `testnet.wavesexplorer.com/address/${contractAccount.address}`});
    }
  }

  registerPlayerTwo = async (e) => {
    e.preventDefault();
  
    const dataTxObj = {
      data: data[3],
      fee: 1000000 + 400000,
      sender: contractAccount.address,
      senderPublicKey: contractAccount.keyPair.publicKey
    };

    const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
    dataTx.addProof(player2.keyPair.privateKey);
    const dataTxJSON = await dataTx.getJSON();
    try {
      const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);
      this.setState({message: `Команда успешно выполнена. Детали транзакции:`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, gameState: 4});
    } catch (error) {
      this.setState({message: `Ошибка выполнения транзакции. Проверьте состояние смарт-контракта:`, messageLink: `testnet.wavesexplorer.com/address/${contractAccount.address}`});
    }
  }

  beginGame = async (e) => {
    e.preventDefault();
    const dataTxObj = {
      data: data[4],
      fee: 1000000 + 400000,
      sender: contractAccount.address,
      senderPublicKey: contractAccount.keyPair.publicKey
    };

    const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
    dataTx.addProof(contractAccount.keyPair.privateKey);
    const dataTxJSON = await dataTx.getJSON();
    try {
      window.beginGame();
      const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);
      this.setState({message: `Команда успешно выполнена. Детали транзакции:`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, gameState: 5});
    } catch (error) {
      this.setState({message: `Ошибка выполнения транзакции. Проверьте состояние смарт-контракта`});
    }
  }

  playerOneMove = async (e) => {
    e.preventDefault();
    const dataTxObj = {
      data: Object.assign(data[5], {
        value: this.state.player1Move
      }),
      fee: 1000000 + 400000,
      sender: contractAccount.address,
      senderPublicKey: contractAccount.keyPair.publicKey
    };

    const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
    dataTx.addProof(player1.keyPair.privateKey);
    const dataTxJSON = await dataTx.getJSON();
    try {
      const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);
      this.setState({message: `Команда успешно выполнена. Детали транзакции:`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, gameState: 6});
    } catch (error) {
      this.setState({message: `Ошибка выполнения транзакции. Проверьте состояние смарт-контракта:`, messageLink: `testnet.wavesexplorer.com/address/${contractAccount.address}`});
    }
  }

  playerTwoMove = async (e) => {
    e.preventDefault();
    const dataTxObj = {
      data: Object.assign(data[6], {
        value: this.state.player1Move
      }),
      fee: 1000000 + 400000,
      sender: contractAccount.address,
      senderPublicKey: contractAccount.keyPair.publicKey
    };

    const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
    dataTx.addProof(player2.keyPair.privateKey);
    const dataTxJSON = await dataTx.getJSON();
    try {
      const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);
      this.setState({message: `Команда успешно выполнена. Детали транзакции:`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, gameState: 7});
      const { player1Move, player2Move } = this.state;
      if (player1Move === player2Move) {
        window.draw();
      } else if ((player1Move === 0 && player2Move === 1) || (player1Move === 1 && player2Move === 2) || (player1Move === 2 && player2Move === 0)) {
        window.playerOneWin();
      } else {
        window.playerTwoWin();
      }
    } catch (error) {
      this.setState({message: `Ошибка выполнения транзакции. Предыдущее действие могло еще не успеть записаться в блокчейн. Проверьте состояние смарт-контракта. `, messageLink: `testnet.wavesexplorer.com/address/${contractAccount.address}`});
    }
  }

  endGame = async (e) => {
    e.preventDefault();
    const dataTxObj = {
      data: data[7],
      fee: 1000000 + 400000,
      sender: contractAccount.address,
      senderPublicKey: contractAccount.keyPair.publicKey
    };

    const dataTx = await Waves.tools.createTransaction(Waves.constants.DATA_TX_NAME, dataTxObj);
    dataTx.addProof(contractAccount.keyPair.privateKey);
    const dataTxJSON = await dataTx.getJSON();
    try {
      window.endGame();
      const dataTxResult = await Waves.API.Node.transactions.rawBroadcast(dataTxJSON);
      this.setState({message: `Команда успешно выполнена. Детали транзакции:`, messageLink: `testnet.wavesexplorer.com/tx/${dataTxResult.id}`, gameState: "ended"})
    } catch (error) {
      this.setState({message: `Ошибка выполнения транзакции. Проверьте состояние смарт-контракта.`})
    }
  }

  onMoveChange = (playerNumber) => (e) => {
    this.setState({[`player${playerNumber}Move`]: +e.target.value});
  }

  render() {
    const {gameState} = this.state;
    const isVisible = {display: 'block'};
    const isNotVisible = {display: 'none'};
    return (
      <div className="game">
        <div className="game__container">
          <div className="game__col">
            <article className="player">
              <h2>Player 1 <a href={`https://testnet.wavesexplorer.com/address/${player1.address}`} target="_blank" className="player__link">{player1.address}</a></h2>
              <form className="player__start" onSubmit={this.initGame.bind()} style={gameState === 0 || gameState === "ended" ? isVisible : isNotVisible}>
                <button type="submit">Init Game</button>
              </form>
              <form className="player__start" onSubmit={this.startRegistration} style={gameState === 1 ? isVisible : isNotVisible}>
                <button type="submit">Start Registration</button>
              </form>
              <form className="player__start" onSubmit={this.registerPlayerOne} style={gameState === 2 ? isVisible : isNotVisible}>
                <button type="submit">Register me</button>
              </form>
              <form className="player__start" onSubmit={this.beginGame} style={gameState === 4 ? isVisible : isNotVisible}>
                <button type="submit">Begin Game</button>
              </form>
              <form className="player__move" onSubmit={this.playerOneMove} style={gameState === 5 ? isVisible : isNotVisible}>
                <fieldset className="player__movefields">
                  <legend>Your move</legend>
                  <label className="player__move">
                    <input type="radio" value="0" checked={this.state.player1Move === 0} onChange={this.onMoveChange(1)}/>
                    Rock
                  </label>
                  <label className="player__move">
                    <input type="radio" value="1" checked={this.state.player1Move === 1} onChange={this.onMoveChange(1)}/>
                    Scissors
                  </label>
                  <label className="player__move">
                    <input type="radio" value="2" checked={this.state.player1Move === 2} onChange={this.onMoveChange(1)}/>
                    Paper
                  </label>
                </fieldset>
                <button type="submit">Move</button>
              </form>
              <form className="player__finish" onSubmit = {this.endGame} style={gameState === 7 ? isVisible : isNotVisible}>
                <button type="submit">Finish</button>
              </form>
              <form className="player__reward" style={isNotVisible}>
                <button type="submit">Get Reward</button>
              </form>
            </article>
          </div>
          <div className="game__col">
            <article className="player">
              <h2>Player 2 <a href={`https://testnet.wavesexplorer.com/address/${player2.address}`} target="_blank" className="player__link">{player2.address}</a></h2>
              <form className="player__start" onSubmit={this.registerPlayerTwo} style={gameState === 3 ? isVisible : isNotVisible}>
                <button type="submit">Join game</button>
              </form>
              <form className="player__move" onSubmit={this.playerTwoMove} style={gameState === 6 ? isVisible : isNotVisible}>
                <fieldset className="player__movefields">
                  <legend>Your move</legend>
                  <label className="player__move">
                    <input type="radio" name="player1_move" value="0" checked={this.state.player2Move === 0} onChange={this.onMoveChange(2)}/>
                    Rock
                  </label>
                  <label className="player__move">
                    <input type="radio" name="player1_move" value="1" checked={this.state.player2Move === 1} onChange={this.onMoveChange(2)}/>
                    Scissors
                  </label>
                  <label className="player__move">
                    <input type="radio" name="player1_move" value="2" checked={this.state.player2Move === 2} onChange={this.onMoveChange(2)}/>
                    Paper
                  </label>
                </fieldset>
                <button type="submit">Move</button>
              </form>
              <form className="player__reward" style={isNotVisible}>
                <button type="submit">Get Reward</button>
              </form>
            </article>
          </div>
        </div>
        <div className="game__container">
          <p className="game__status" style={this.state.message === '' ? isNotVisible : isVisible}>
            <span>{this.state.message}</span><br/>
            <a href={this.state.messageLink} target="_blank" className="game__statuslink">{this.state.messageLink}</a>
          </p>
          <p style={this.state.gameState==="ended" ? isVisible : isNotVisible}>"Обновите страницу, чтобы сыграть еще раз"</p>
        </div>
      </div>
    );
  }
}

export default App;
