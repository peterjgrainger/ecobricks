Ecobricks UK site
=================

Simple static site, no fancy stuff 🎩going on 

Map
===

The map is created using a [public spreadsheet](https://docs.google.com/spreadsheets/d/1rjTkOAwDVe1-FD9IyHsaymXP-LfNFp9TS433uRKtxaM/edit#gid=381845616)

It's open for viewing but not editing.  

When the form value is submitted a [google script](https://script.google.com/macros/d/MAQ4s-6sXPGtiRg69fAn938sQcOIUAxQR/edit?uiv=2&mid=ACjPJvEiCsXCcfIV77gqWSJxaBqtfvaB9gIsZgobWcTCxK1xvVfnruMjzIjyAvOcHohoC2_-nJvp45rov8XwUheS0pCEUQwY8ptQ7lhjIMQttx4IkwKZPc4A27qIfMt07_b0hXX06cLxlfWb) is ran to update the long and lat coordinates:


The contents of the script are:

```javascript
function myFunction() {
  // Get the current sheet we are working on.
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  const coordinates = geoCodeAddress(data)
  
  // Update the lat / long columns in the spreadsheet with the ones got from maps.
  const latCell = sheet.getRange(data.length, 6)
  const longCell = sheet.getRange(data.length, 7)
  latCell.setValue(coordinates.lat);
  longCell.setValue(coordinates.lng)
  
  Logger.log('Added cordincates lat: '+coordinates.lat+', long '+coordinates.lng)

  
}

function geoCodeAddress(data) {
  
  const location = data[data.length-1][2]
  
  return Maps.newGeocoder()
     // The latitudes and longitudes of United kingdom off some forum so it might not work :).
    .setBounds(49.383639452689664, -17.39866406249996, 59.53530451232491,8.968523437500039)
    .geocode(location)
    .results[0]
    .geometry
    .location
}

```

With a trigger to run on form submit

It is updated by adding a value to a [form](https://docs.google.com/forms/d/1_HIWz2c5ZVsE7eTKGi6lnflGPdwN55XI5Gz5T3aUgEA/edit)

### Map display

The map is powered by [sheetsee](http://jlord.us/sheetsee.js/) plus messing around with the `sheetsee.js` file include in this repo to set the markers to custom icons

### Script.js

This loads the map, that is all.



