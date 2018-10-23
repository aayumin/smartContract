
pragma solidity ^0.4.20;
//contract testContract {
//  function testContract() {
    // constructor
//  }
//}


contract testContract {
    
    struct Person{
        uint age;
        string name;
        uint id;
    }
    
   // mapping (string => Person) Map;
    
    Person[5] public  people;
    bool success;
    uint saveInteger;    
    uint curr;
    address sender;
  
    function sayHello() returns (string) {
	return "hello!!";
    }
 
    function setAddress() payable {
	sender = msg.sender;
    }
  
    function getAddress() public view returns (address) {
	return sender;
    }

     function  testContract() { // constructor
	curr = 0;
    }

    function setIntegerSum(uint _a, uint _b) public returns (uint) {
	saveInteger = _a+_b;
	return saveInteger;
    }

    function getInteger() public view returns (uint) {
	return saveInteger;
    }

    function addPerson(uint _age, string _name) public {
      //  uint ID = uint(keccak256(_name))%1000;
       // people.push(Person(_age, _name, ID));
	uint ID = (_age*184268)%10000;
	//Person personA = Person(_age, _name, ID);
	// people.push(Person(_age, _name, ID));
	//people.push(Person({age : _age, name: _name, id : ID}));
	people[curr] = Person(_age,_name,ID);
     //   people[ID] = Person(_age, _name, ID);
	curr = curr+1;
        success = true;
    }

    function getCurr() public view returns (uint) {
	return curr;
    }

    function getName(uint _curr) public returns (string) {
	return people[_curr].name;
	}


    
    function getSuccess() returns (bool) {
	return success;
    }

    /*
    function isExist(string _name) returns (bool) {
         uint ID = uint(keccak256(_name))%1000;
	bool result = false;
     //   if(people[ID].name == _name) {return true;
    //        success = true;
    //    }
   //     else{ false;
    //    success = false;
    //    }
	require(people[ID] == _name);
	result = true;
	return result;
    }
    */
    
    
    /*
    function getinfo(uint id) returns (Person(uint, string, uint))
    */
    
    /*
    function getPerson(string _name) returns (Person){
        return Map[_name];
    }
    */
    
    
}
