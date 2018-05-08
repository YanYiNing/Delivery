function makeCode() {
  var text = getData()
  if (text) qrCode(text);
}

function qrCode(text) {
  $('#qrcode').html("")
  var qrcode = new QRCode('qrcode', {
  text: text,
  width: 256,
  height: 256,
  colorDark : '#000000',
  colorLight : '#ffffff',
  correctLevel : QRCode.CorrectLevel.H
  });
}

function getData() {
  var name = $("#name").val();
  var city = $("#city").val();
  var address = $("#address").val();
  var phone = $("#phone").val();

  if(!name || !city || !address || !phone) {
    return '';
  } else {
    var text = {
      name: name,
      city: city,
      address: address,
      phone: phone
    }
    console.log(text);
    return JSON.stringify(text);
  }

}
