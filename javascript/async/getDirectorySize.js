// @ts-check
/* eslint-disable import/prefer-default-export */

import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN (write your solution here)
export const getDirectorySize = (dirpath, callback) => {
  fs.readdir(dirpath, (err1, filenames) => {
    if (err1) {
      callback(err1);
      return;
    }

    const getFilesSize = (file, cb) => {
      const filepath = path.join(dirpath, file);
      fs.stat(filepath, (err3, stat) => {
        if (err3) {
          cb(err3);
          return;
        }
        if (!stat.isFile()) {
          cb(null, 0);
          return;
        }
        cb(null, stat.size);
      });
    };

    async.map(filenames, getFilesSize, (err2, results) => {
      if (err2) {
        callback(err2);
        return;
      }
      const sum = _.sum(results);
      console.log(`Files: ${filenames}\n`, 'RESULTS ARRAY: ', results, sum);
      callback(null, sum);
    });
  });
};
// END

/* 
Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории не включая поддиректории. Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой async
*/