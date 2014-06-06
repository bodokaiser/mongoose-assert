# mongoose-assert

**mongoose-assert** extends the built-in mongoose validators.

## Usage

    var mongoose = require('mongoose');

    // load plugin
    require('mongoose-assert')(mongoose);

    var schema = new mongoose.Schema({
      name: String,
      email: String,
      price: Number
    });

    schema.path('name')
      .required()
      .length(5, 30)
      .alpha()

    schema.path('email')
      .email()

    schema.path('price')
      .steps(0.01)
      .min(0)

## Install

With our lovely [npm](https://github.com/npm/npm)

    $ npm install --save mongoose-assert

## Documentation

**mongoose-assert** extends `mongoose.Schema.Types.*` with more
validation methods on the prototype.

### Number

Extends `mongoose.Schema.Types.Number` with:

#### number.zip()

Checks if the number is a valid german zip code which is in range
between `10000` and `99999`.

#### number.step(unit)

    // 2.991 will be invalid whereas 2.99 will be valid
    schema.path('price')
      .step(0.01)

Checks if the number is dividable by `unit` without rest. Useful for
validating prices or other units and setting up a precision.

### String

Extends `mongoose.Schema.Types.String` with:

#### string.email()

Checks if the string is an email.

#### string.alpha()

Checks if the string only contains alpha characters.

#### string.alphanum()

Checks if the string only contains alpha numeric characters.

#### string.length(min[, max])

Checks if the string has a length with at least `min` characters and
maximum `max` characters.

## License

Copyright 2014 Bodo Kaiser <i@bodokaiser.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
