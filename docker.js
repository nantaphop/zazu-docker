const exec = require('child_process').exec
const path = require('path')

module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return query.match(/docker.*/)
    },
    search: (query, env = {}) => {

      value = "/usr/local/bin/"+query
      return new Promise((resolve, reject) => {
        resolve([
          {
            icon: path.join("assets","docker.png"),
            title: query,
            value,
            subtitle: 'Run docker command',
          },
        ])
      })
    },
  }
}
