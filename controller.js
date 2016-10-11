function CodeWorksController(){
  var codeWorksService = new CodeWorksService()
  
  function getUsers(){
    codeWorksService.getJSON(writeToPage)
  }
  
  
  $('#add-user-form').on('submit', function(e){
    e.preventDefault();
    var form = this;
    var user = {
      name: form.username.value,
      email: form.email.value
    }
    
    codeWorksService.addUser(user, function(){
      getUsers();
      form.reset()
    })
    
  })
  
  
  
  function writeToPage(data){
    var template = ''
    for(var key in data){
      var user = data[key]
      template+= `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.id}</td></tr>`
    }
    $('#users').html(template)
  }
  
  
  getUsers()
}

CodeWorksController();