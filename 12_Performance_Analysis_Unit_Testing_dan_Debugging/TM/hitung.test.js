import { test } from 'node:test';
import assert from 'node:assert';
import pkg from './hitung.js';
const { tambahPengitung, reset } = pkg;

test('mulai dari 0, tambah 3 jadi 3', () => {
  reset();
  assert.strictEqual(tambahPengitung(3), 3);
});

test('lanjut tambah 5 jadi 8', () => {
  assert.strictEqual(tambahPengitung(5), 8);
});