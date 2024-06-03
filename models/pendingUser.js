const mongoose = require("mongoose");

const pendingUserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmationCode: { type: String, required: true },
  createdAt: { type: Date, expires: "24h", default: Date.now }, // Mã xác nhận hết hạn sau 24 giờ
});

module.exports = mongoose.model("PendingUser", pendingUserSchema);
