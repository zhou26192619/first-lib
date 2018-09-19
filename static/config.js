const config = {
  Host: 'http://192.169.1.32',
  Port: '8080',
};
config['urls'] = {
  deviceCompanyList: config.Host + '/' + config.Port + '/' + "api/list/devicecompany/getDeviceCompanyList",
  login: config.Host + '/' + config.Port + '/' + "cloudMonitor/loginEMA.action",
}
