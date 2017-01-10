const exec = require('child_process').exec

module.exports = (pluginContext) => {
    return (command) => {
        return new Promise((resolve, reject) => {
            exec(command, (err, stdout, stderr) => {
                resolve(stdout)
            })
        })
    }
}
