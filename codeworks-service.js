function CodeWorksService(){
  var self = this;
  var baseUrl = 'https://codeworks.herokuapp.com/users'
  var createUserUrl = baseUrl+'/create'

  
  self.getJSON = function(callback){
    $.get(baseUrl, callback)
  }
  
  self.addUser = function(user, callback){
    $.post(createUserUrl, {user: user}, callback)
  }
  
  
  
}
