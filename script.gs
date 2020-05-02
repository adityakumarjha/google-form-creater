function myFunction() {
  /* Created only for 4 options MCQ can be easily tweaked for more than that*/
  var input='';//enter the text you want to convert to the form with removed line,paragraph breaks
  var temp;
  Logger.log(input);
  var question;
  var options=[];
  var form = FormApp.openById('');//enter form ID
  form.setShuffleQuestions(true);
  form.setTitle("test");
  form.setIsQuiz(true);
  var items = form.getItems();
    while(items.length > 0)
    {
     form.deleteItem(items.pop());
    }
  
  for(var i=0;i<input.length;i++)
  {
    Logger.log(input[i]);
    if(input[i]=='Q'){
      if(i!=0){
        options.push(temp);
        var item = form.addMultipleChoiceItem();
       item.setRequired(true);
      item.setTitle(question);
item.setChoices([
  item.createChoice(options[0], true),
  item.createChoice(options[1], false),
item.createChoice(options[2], false),
item.createChoice(options[3], false)]);
 item.setPoints(1);     
      }
        options=[];
      question='';
      temp='';
      continue;
    }
    if(input[i+1]=='A'&& input[i+2]==')'){
      question=temp+" "+"?";
      temp='';
      continue;
    }
    if(input[i]=='A'&& input[i+1]==')')
    {
      i++;
      temp='';
      continue;
    }
     
    if(input[i]=='B'&& input[i+1]==')')
    {
      i++;
      options.push(temp);
      temp='';
      continue;
    }
    if(input[i]=='C'&& input[i+1]==')')
    {
      i++;
      options.push(temp);
      temp='';
      continue;
    }
    if(input[i]=='D'&& input[i+1]==')')
    {
      i++;
      options.push(temp);
      Logger.log(options);
      temp='';
      continue;
    }
    
    temp+=input[i];
  }
  
  options.push(temp);
        var item = form.addMultipleChoiceItem();
       item.setRequired(true);
      item.setTitle(question);
item.setChoices([
  item.createChoice(options[0], true),
  item.createChoice(options[1], false),
item.createChoice(options[2], false),
item.createChoice(options[3], false)]);
 item.setPoints(1);     
}
