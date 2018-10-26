var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1rjTkOAwDVe1-FD9IyHsaymXP-LfNFp9TS433uRKtxaM/edit?usp=sharing';
var addressColumn = 'Which town are you in? (If are frequently in more than one town, please fill out the form again for that town)'
var nameColumn = "What is your name on Facebook (this will be used for people to contact you so we don't need to share our address publically)"
var collecting = "Are you collecting or making ecobricks?"
document.addEventListener('DOMContentLoaded', function() {
        Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
      })
      function showInfo (data) {
        console.log('data', data)
        console.log('name', data[0][nameColumn])
        var popup = "<h3>{{"+collecting+"}}<br/>{{"+nameColumn+"}}<br/>{{"+addressColumn+"}}</h3>"
        var mapOptions = {
          data: data,
          mapDiv: 'map',
          geoJSONincludes: [nameColumn, collecting, addressColumn],
          template: popup,
          preferCanvas: true
        }
        Sheetsee.loadMap(mapOptions)
      }