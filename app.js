var prompt = require('sync-prompt').prompt;

var dob = new Date(prompt('What is your birthday (mm/dd/yyyy)? '));
var today = new Date();
var thisYear = today.getFullYear();
var yearBorn = dob.getFullYear();
var age = thisYear - yearBorn;

if(today.getMonth() <=  dob.getMonth()){
  if(today.getDate() < dob.getDate()){
    age--;
  }
}

var birthMonth = dob.getMonth() + 1;
var birthDay = dob.getDate();
var sign;

switch(birthMonth){
  case 1:
    if(birthDay <= 19){
      sign = 'Capricorn';
    }else{
      sign = 'Aquarius';
    }
    break;
  case 2:
    if(birthDay <= 18){
      sign = 'Aquarius';
    }else{
      sign = 'Pisces';
    }
    break;
  case 3:
    if(birthDay <= 20){
      sign = 'Pisces';
    }else{
      sign = 'Aries';
    }
    break;
  case 4:
    if(birthDay <= 20){
      sign = 'Aries';
    }else{
      sign = 'Taurus';
    }
    break;
  case 5:
    if(birthDay <= 20){
      sign = 'Taurus';
    }else{
      sign = 'Gemini';
    }
    break;
  case 6:
    if(birthDay <= 20){
      sign = 'Gemini';
    }else{
      sign = 'Cancer';
    }
    break;
  case 7:
    if(birthDay <= 22){
      sign = 'Cancer';
    }else{
      sign = 'Leo';
    }
    break;
  case 8:
    if(birthDay <= 22){
      sign = 'Leo';
    }else{
      sign = 'Virgo';
    }
    break;
  case 9:
    if(birthDay <= 22){
      sign = 'Virgo';
    }else{
      sign = 'Libra';
    }
    break;
  case 10:
    if(birthDay <= 22){
      sign = 'Libra';
    }else{
      sign = 'Scorpio';
    }
    break;
  case 11:
    if(birthDay <= 21){
      sign = 'Scorpio';
    }else{
      sign = 'Sagittarius';
    }
    break;
  case 12:
    if(birthDay <= 21){
      sign = 'Sagittarius';
    }else{
      sign = 'Capricorn';
    }
    break;
}

console.log('You are ' + age + ' years old');
console.log('Your sign is', sign);

