const log = require('../lib/utils/log')
const utils = require('../lib/utils/utils')
const Find = require('../lib/commands/find')
const program = require('../lib/utils/log-commander')
const DEFAULT_TIMEOUT = 5

program
  .arguments('[id]')
  .option('-t, --timeout <seconds>', 'Time to scan in seconds')
  .parse(process.argv)


if (program.args.length == 0) {
  let timeout = program['timeout'] ? program.timeout : DEFAULT_TIMEOUT

  let findClass = new Find()

  findClass.scan(timeout, ipAddress => {
    utils.getDeviceInfo(ipAddress, device => {
        log.info(`found ${device['model-name']} : ${device['serial-number']} : ${ipAddress}`)
    })
  })
} else {
  find.findDeviceBySerialNo(program.args[0], t)
}
