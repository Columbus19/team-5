var db = null;

document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({
    name: 'fabfour.db',
    location: 'default',
  });
});