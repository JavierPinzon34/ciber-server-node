module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      grado: String,
      correo_personal: String,
      correo_institucional: String,
      nombres: String,
      apellidos: String,
      telefono: String,
      cedula: String,
      rol: String,
      estado: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
