module.exports = {
    sass: {
      files: 'sass/*.sass',
      tasks: ['sass:dist']
    },
    template: {
      files: 'application/views/static/*',
      tasks: ['ngtemplates:site']
    }    
};
