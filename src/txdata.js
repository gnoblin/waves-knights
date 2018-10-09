import accounts from './accounts';
const {player1,player2} = accounts;

export default [
	[{
	  key: 'command',
	  value: 0,
	  type: 'integer'
	}, {
		key: 'gameState',
		value: 0,
		type: 'integer'
	}],
	[
		{
		  key: 'command',
		  value: 1,
		  type: 'integer'
		},
		{
			key: 'gameState',
			value: 1,
			type: 'integer'
		}, 
		{
			key: 'player1',
		  value: '',
		  type: 'string'
		},
		{
			key: 'player2',
		  value: '',
		  type: 'string'
		},
	],
	[
		{
		  key: 'command',
		  value: 2,
		  type: 'integer'
		},
		{
			key: 'gameState',
			value: 2,
			type: 'integer'
		}, 
		{
			key: 'player1',
		  value: `${player1.keyPair.publicKey}`,
		  type: 'string'
		}
	],
	[
		{
		  key: 'command',
		  value: 3,
		  type: 'integer'
		},
		{
			key: 'gameState',
			value: 3,
			type: 'integer'
		}, 
		{
			key: 'player2',
		  value: `${player2.keyPair.publicKey}`,
		  type: 'string'
		}
	],
	[
		{
		  key: 'command',
		  value: 4,
		  type: 'integer'
		},
		{
			key: 'gameState',
			value: 4,
			type: 'integer'
		}
	],
	[
		{
		  key: 'command',
		  value: 5,
		  type: 'integer'
		},
		{
			key: 'gameState',
			value: 5,
			type: 'integer'
		},
		{
			key: 'move1',
			value: 0,
			type: 'integer'
		}
	],
	[
		{
		  key: 'command',
		  value: 6,
		  type: 'integer'
		},
		{
			key: 'gameState',
			value: 6,
			type: 'integer'
		},
		{
			key: 'move2',
			value: 0,
			type: 'integer'
		}
	],
	[
		{
		  key: 'command',
		  value: 7,
		  type: 'integer'
		},
		{
			key: 'gameState',
			value: "ended",
			type: 'string'
		}
	]
]