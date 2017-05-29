exports.home = function(req,res) {
  res.render('home', {title:'iLoveMyCity', headline: 'We believe there is something to say to world!'});
}

exports.city = function(req,res) {
  var cityName = req.params.city;
  var title, heading;
  var imageCount=[1,2,3,4,5,6];

  if(cityName=='madurai') {
    title = "Madurai";
    heading="Madurai : World greatest temple city !!!";
  } else if (cityName=="chennai") {
    title = "Chennai";
    heading="Chennai : Hottest business hub !!!";
  } else if (cityName=="coimbatore") {
    title = "Coimbatore";
    heading="Coimbatore : Cool and little moncester !!!";
  } else if (cityName=="trichy") {
    title = "Trichy";
    heading="Trichy : World famous anicent Kallanai dam !!!";
  }

  res.render('city', {
    title:title,
    headline:heading,
    city:cityName,
    numberOfImages:imageCount});
}