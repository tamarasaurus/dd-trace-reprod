const tracer = require('dd-trace').init();

tracer.use('next', {
  hooks: {
    request: (span, req, res) => {
      console.log('request hook called')
    }
  }
})