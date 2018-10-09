import * as WavesAPI from '@waves/waves-api';
const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);

const contractAccount = Waves.Seed.fromExistingPhrase("enrich used today album code output term chuckle catalog road fine ski syrup conduct give");
const player1 = Waves.Seed.fromExistingPhrase("arch cram regret awesome rent boring tenant spy zebra trumpet place pitch flash dog gap");
const player2 = Waves.Seed.fromExistingPhrase("tell duty vast this miss multiply clip crew seed wave inmate tube bachelor double pizza");

const accounts = { contractAccount, player1, player2 };
export default accounts;