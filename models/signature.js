const mongoose = require('mongoose');

var signatureSchema = new mongoose.Schema({
  guestSignature: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  message: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})

module.exports = mongoose.model('Signature', signatureSchema);
