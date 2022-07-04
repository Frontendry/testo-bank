const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/** Create UserSchema */
const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    telPrefix: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Decrypt Password
userSchema.methods.matchPassword = async function (enteredPassword) {
  // compare entered password with db's
  return await bcrypt.compareSync(enteredPassword, this.password);
};

// Encrypt Password before 'modelling' and sending to db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hashSync(this.password, salt);
});

/** Create Model based on schema */
const User = mongoose.model("User", userSchema);

module.exports = User;
