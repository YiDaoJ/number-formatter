# Setup

Install and run project

```
npm install

npm run dev
```

### Test

```
npm run test
```

### Analyse

```js
/*
    Entwickle eine Lösung, die bei jedem der Fälle true zurück liefert.
    Strukturiere und dokumentiere den Code so, wie Du ihn in der Produktion
    einsetzen würdest. Die Wahl der Technologie ist frei.
*/

assert.equal('0,00', format(undefined));

assert.equal('2,56', format(2.555));
assert.equal('10.000,556', format(10000.5555, 3));
assert.equal('100.000,28', format(100000.28374, 2, ',', '.'));

assert.equal('100,000.6', format(100000.55555, 1, '.', ','));
assert.equal('1,5550000000', format(1.555, 10, ',', '.'));
// need minimumFractionDigits
assert.equal('-1,5555', format(-1.55555, 4));
assert.equal('-1,5555', format('-1.55555', 4));
assert.equal('1,555', format(1.55555, 3, ',', '.', false));
assert.equal('1,56', format('1.5555', 2));
```

Programmierungssprache: Typescript

Einsetzen in der Produktion:

- Einführung in README
- nötige Kommentare
- Unit Test
- Optimierung: types / statische Daten / util Functionen auslagern

| input / param1             | param2     | param3<br />decimal | param4<br />thausend | param5        | output (must be string) |
| -------------------------- | ---------- | ------------------- | -------------------- | ------------- | ----------------------- |
| undefined                  |            |                     |                      |               | 0,00                    |
| 2.555<br />en              |            |                     |                      |               | 2,56<br />de            |
| 10000.5555<br />en         | 3          |                     |                      |               | 10.000,556<br />de      |
| 100000.28374<br />en       | 2          | ,                   | .                    |               | 100.000,28<br />de      |
| 100000.55555<br />en       | 1          | .                   | ,                    |               | 100,000.6<br />en       |
| 1.555<br />en              | 10         | ,                   | .                    |               | 1,5550000000<br />de    |
| -1.55555<br />en           | 4          |                     |                      |               | -1,5555<br />de         |
| "-1.55555"<br />string, en | 4          |                     |                      |               | -1,5555<br />de         |
| 1.55555<br />en            | 3          | ,                   | .                    | false         | 1,555<br />de           |
| "1.5555"<br />en           | 2          |                     |                      |               | 1,56<br />de            |
|                            | Default: 2 | Default: ,          | Default: .           | Default: true |                         |
