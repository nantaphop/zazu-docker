const expect = require('chai').expect
const docker = require('../docker')()

describe('Docker', () => {
  describe('.respondsTo', () => {
    it('responds to "docker"', () => {
      expect(docker.respondsTo('docker')).to.be.ok
    })
  })
})
