const fs = require('fs');

const filename = "Life Expectancy Data v2.csv"
readCSVFile(filename)
// Read CSV file and parse data
function readCSVFile(filename) {
  fs.readFile(filename, 'utf-8', (err, fileData) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(fileData);
    const rows = fileData.split('\n');
    var headers = []
    var data = []
    for (let index = 0; index < rows.length; index++) {
      headers.push(rows[index].split(','))



    }
    for (let index1 = 0; index1 < headers.length; index1++) {
      for (let index2 = 0; index2 < headers[index1].length; index2++) {
        data.push(headers[index1][index2])

      }

    }

    console.log(data);

    var jsonArray = [];

    for (var i = 0; i < data.length; i++) {
      var obj = {
        index: i,
        value: data[i]
      };

      jsonArray.push(obj);
    }

    var jsonResult = {
      array: jsonArray
    };

    console.log(JSON.stringify(jsonResult));
    fs.writeFile("output.json",JSON.stringify(jsonResult), 'utf-8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("JSON data saved successfully!");
    });
  
  })











}




