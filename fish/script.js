document.getElementById('uuidConverter').addEventListener('submit', function(event) {
    event.preventDefault();
    var minecraftName = document.getElementById('minecraftName').value;
    var url = `https://playerdb.co/api/player/minecraft/${minecraftName}`;
  
    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(data) {
        if (data.error) {
          throw new Error(data.error);
        }
        document.getElementById('result').textContent = `UUID: ${data.data.player.id}`;
        var uuidreal = data.data.player.id
      })
      .catch(function(error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
      });
  });