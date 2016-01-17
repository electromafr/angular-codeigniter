module.exports = {
    dist: {
        options: {
        //style: "compressed"
        },
        files: [{
            expand: true,
            cwd: 'sass',
            src: ['*.sass'],
            dest: 'css',
            ext : '.css'
        }]
    }
};
