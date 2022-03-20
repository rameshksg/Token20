const truffleAssert = require('truffle-assertions');

const ERC20MinerReward = artifacts.require("ERC20MinerReward");

contract('ERC20MinerReward', (accounts) => {

    /*it('testing ResponseMessage of HelloBlockchain', async () => {
        const HelloBlockchainInstance = await HelloBlockchain.deployed();
        var returnValue1;
        returnValue1 = await HelloBlockchainInstance.ResponseMessage.call();

        // Write an assertion below to check the return value of ResponseMessage.
        assert.equal('something', 'something', 'A correctness property about ResponseMessage of HelloBlockchain');
    });

    
    it('testing SendRequest of HelloBlockchain', async () => {
        const HelloBlockchainInstance = await HelloBlockchain.deployed();
        var callerAccount = accounts[0];
        var requestMessage1 = "StringValue1";
        await HelloBlockchainInstance.SendRequest(requestMessage1, {from: callerAccount});

        // Because the function call can change the state of contract HelloBlockchain, please write assertions
        // below to check the contract state.
        assert.equal('something', 'something', 'A correctness property about SendRequest of HelloBlockchain');
    });*/

    it('testing _reward of ERC20MinerReward', async () => {
        const ERC20MinerRewardInstance = await ERC20MinerReward.deployed();
        await ERC20MinerRewardInstance._reward();

        // Because the function call can change the state of contract HelloBlockchain, please write assertions
        // below to check the contract state.
        assert.equal('something', 'something', 'A correctness property about reward of ERC20MinerReward');
    });

    it('should return correct event description', async()=>{

        // Instance of our deployed contract
        const instance = await ERC20MinerReward.deployed();
    
        // Calling the Delivered() function
        const delivered = await instance._reward();
    
        // Check event description is correct
        truffleAssert.eventEmitted(delivered, 'LogNewAlert', (event) =>{
          return event.description == '_rewarded';
        });
      });

});