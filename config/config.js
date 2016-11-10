//exportando objeto configurador

module.exports={
//evirometn entorno, nos permite acceder a las variables
  "IP": process.env.IP||'127.0.0.1', 
  "Port": process.env.Port||3030,
      "colorTheme":
       {
         'data': 'red', 
         'info': 'rainbow',
         'ready': 'cyan',
           'error': 'red'

      }
};