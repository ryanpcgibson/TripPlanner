function updateColumns() {
  // var externalposturl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Santa%20Fe%20KOA%20Journey/2023-03-25/2023-03-26?unitGroup=us&include=hours&key=A6B3B556WATX75H39Y374UWE8&contentType=json"
  // var jsonString = UrlFetchApp.fetch(externalposturl).getContentText();

  testData = "Weather-TestData-JSON.html"
  const jsonString = HtmlService.createHtmlOutputFromFile(testData).getContent();

  var jsonObject = JSON.parse(jsonString);
  Logger.log(jsonObject.resolvedAddress);

// data.filter(function(data){ return data.code == code }
  Logger.log(jsonObject.days)

}

function showMessageBox() {
    Browser.msgBox('You clicked it!');
  }