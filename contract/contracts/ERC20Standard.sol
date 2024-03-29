pragma solidity >=0.4.22 <0.9.0;
//pragma solidity 0.4.26;

import './SafeMath.sol';

contract ERC20Standard {
	using SafeMath for uint256;
	uint public totalSupply;
	
	string public name;
	uint8 public decimals;
	string public symbol;
	string public version;
	
	mapping (address => uint256) balances;
	mapping (address => mapping (address => uint)) allowed;

	//Fix for short address attack against ERC20
// 	modifier onlyPayloadSize(uint size) {
// 		assert(msg.data.length == size + 4);
// 		_;
// 	} 

	function balanceOf(address _owner) public view returns (uint balance) {
		return balances[_owner];
	}

	function transfer(address _recipient, uint _value) public returns(bool) {
	    require(balances[msg.sender] >= _value && _value > 0);
	    balances[msg.sender] = balances[msg.sender].sub(_value);
	    balances[_recipient] = balances[_recipient].add(_value);
	    emit Transfer(msg.sender, _recipient, _value);        
        }
        
    //  function transfer(address to, uint256 value) public returns (bool) {
    //     _transfer(msg.sender, to, value);
    //     return true;
    //   }

	function transferFrom(address _from, address _to, uint _value) public returns(bool){
	    require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0);
            balances[_to] = balances[_to].add(_value);
            balances[_from] = balances[_from].sub(_value);
            allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
            emit Transfer(_from, _to, _value);
        }
        

	function  approve(address _spender, uint _value) public {
		allowed[msg.sender][_spender] = _value;
		emit Approval(msg.sender, _spender, _value);
	}

	function allowance(address _spender, address _owner) public view returns (uint balance) {
		return allowed[_owner][_spender];
	}

	//Event which is triggered to log all transfers to this contract's event log
	event Transfer(
		address indexed _from,
		address indexed _to,
		uint _value
		);
		
	//Event which is triggered whenever an owner approves a new allowance for a spender.
	event Approval(
		address indexed _owner,
		address indexed _spender,
		uint _value
		);
}