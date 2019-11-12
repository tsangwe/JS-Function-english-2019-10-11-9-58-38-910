function palindrome(message){
  message = message.toLowerCase();
  var reverseMessage = message.split('').reverse().join(''); 
  return message ===  reverseMessage;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
