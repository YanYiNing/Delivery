function makeCode() {
  var qrcode = new QRCode('qrcode', {
  text: '发货地址：广东省广州市黄埔区 云埔工业区埔南路47号凌进物流中外运仓3号库 510760 蓝月亮 020-82102563 收货地址：重庆重庆市南岸区',
  width: 256,
  height: 256,
  colorDark : '#000000',
  colorLight : '#ffffff',
  correctLevel : QRCode.CorrectLevel.H
  });
}
