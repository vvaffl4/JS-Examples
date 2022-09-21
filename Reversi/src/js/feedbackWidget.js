class FeedbackWidget{
  constructor(elementId) {
     this._elementId = elementId;
     this._element = document.getElementById(this._elementId);

     $(this._element).hide()
     $(this._element).find('.feedbackClose button')
      .on('click', () => {
        $(this._element).removeClass('show');

        setTimeout(() => $(this._element).hide(), 1500);
      })
   }
   
  get elementId() { //getter, set keyword voor setter methode
    return this._elementId;
  }
    
  show(message, type){
    $(this._element).find('.feedbackMessage p').text(message);
    $(this._element).addClass(type);
    $(this._element).addClass('show');
    $(this._element).show();

    this.log({ message, type })
  }

  log(message){
    let logs = JSON.parse(localStorage.getItem(this._elementId));

    if (!logs) logs = []

    localStorage.setItem(this._elementId, JSON.stringify([
      message,
      ...logs.slice(0, 9)
    ]));
  }

  removeLog(){
    localStorage.removeItem(this._elementId);
  }

  history(){  
    let logs = JSON.parse(localStorage.getItem(this._elementId));
    
    if (!logs) logs = [];

    let formattedLogs = logs
      .map(log => `<type ${log.type}> - ${log.message}`)
      .join('\n');

    return formattedLogs;
  }
}


 $(() => {
//     const error = new FeedbackWidget('error');
    const challenge = new FeedbackWidget('challenge');
//     const koffie = new FeedbackWidget('koffie');

//     error.show("Je gegevens konden niet worden opgehaald. Zo jammer. Probeer het later nog eens.", "error");
    challenge.show("Mike wil deelnemen aan jouw spel. Geef akkoord.", "success");

//     koffie.show(
//       'Bijna klaar, tijd voor koffie',
//       'success'
//     );

//     console.log(koffie.history());
  });
