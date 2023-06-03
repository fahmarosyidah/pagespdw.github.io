function updateClock() {
    var now = new Date();
    var hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
    var tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    var jam = now.getHours();
    var ucapanSelamat;
  
    if (jam < 12) {
      ucapanSelamat = "Selamat pagi,";
    } else if (jam < 18) {
      ucapanSelamat = "Selamat siang,";
    } else {
      ucapanSelamat = "Selamat malam,";
    }
  
    var tgl = hari + ', ' + tanggal
    var waktu = jam + ':' + now.getMinutes() + ':' + now.getSeconds();
  
    document.getElementById('tgl').innerHTML = tgl;
    document.getElementById('waktu').innerHTML = waktu;
    document.getElementById('ucapan-selamat').innerHTML = ucapanSelamat;
  
    setTimeout(updateClock, 1000);
  }