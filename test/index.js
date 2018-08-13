import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

import HtmlWebpackNewRelicPlugin from '../src/index';

const OUTPUT_DIR = path.join(__dirname, '../dist');

describe('HtmlWebpackNewRelicPlugin', () => {
  beforeEach(done => {
    rimraf(OUTPUT_DIR, done);
  });

  it('should append new relic script to body', done => {
    const compiler = webpack(
      {
        entry: path.resolve(__dirname, 'fixtures', 'entry.js'),
        output: {
          path: path.resolve(__dirname, '../dist'),
        },
        plugins: [
          new HtmlWebpackPlugin(),
          new HtmlWebpackNewRelicPlugin({ license: 123456, applicationID: 654321 }),
        ],
      },
      (err, stats) => {
        const htmlFile = path.resolve(OUTPUT_DIR, 'index.html');
        expect(err).to.be.null;
        expect(fs.existsSync(htmlFile)).to.be.true;
        

        const file = fs.readFileSync(
          path.resolve(OUTPUT_DIR, htmlFile),
          { encoding: 'utf-8' },
          (err, data) => {
            return data.toString();
          },
        );

        expect(file).include('licenseKey');
        expect(file).include('applicationID');
        done();
      },
    );
  });

  describe('when its missing configuration variables', () => {
    it('should throw error if license is missing', done => {
      const compiler = webpack({
        entry: path.resolve(__dirname, 'fixtures', 'entry.js'),
        output: {
          path: path.resolve(__dirname, '../dist'),
        },
        plugins: [new HtmlWebpackPlugin()],
      });
      expect(() => compiler.options.plugins.push(new HtmlWebpackNewRelicPlugin())).to.throw(
        'license argument is required',
      );

      done();
    });

    it('should throw error if license is present but applicationID is missing', done => {
      const compiler = webpack({
        entry: path.resolve(__dirname, 'fixtures', 'entry.js'),
        output: {
          path: path.resolve(__dirname, '../dist'),
        },
        plugins: [new HtmlWebpackPlugin()],
      });
      expect(() =>
        compiler.options.plugins.push(
          new HtmlWebpackNewRelicPlugin({
            license: '123456',
          }),
        ),
      ).to.throw('applicationID argument is required');

      done();
    });
  });
});
