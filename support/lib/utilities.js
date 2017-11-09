'use strict';

const KlawSync = require('klaw-sync');
const Path = require('path');

module.exports = {
    /**
     * Create an array containing an explicit list of step files.
     */
    findStepFiles: (dir) => {
        try {
            return KlawSync(dir, {
                filter: item => Path.extname(item.path) === '.js',
                nodir: true
            }).map(p => p.path);
        } catch (err) {
            throw new Error('Cannot find step definitions');
        }
    }
};
