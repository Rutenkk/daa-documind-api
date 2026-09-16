const registros = [
  {
    full_name: "  Lucía Pérez  ",
    email: "LUCIA@USAL.ES",
    role: "admin",
    active: "true",
  },
  {
    full_name: "Marcos Soto",
    email: "marcos@gmail.com",
    role: "user",
    active: "false",
  },
  {
    full_name: " Sofia Vega ",
    email: "sofia@usal.es",
    role: "editor",
    active: "true",
  },
  {
    full_name: "Raúl Blanco",
    email: "raul@hotmail.com",
    role: "user",
    active: "true",
  },
];

// funcion tradicional

/*function limpiarUsuarios(registros) {
  const usuariosLimpios = registros
    .filter((c) => c.active === "true")
    .filter((c) => c.email.toLowerCase().includes("@usal.es"))
    .map((c, contador) => ({
      ...c,
      full_name: c.full_name.trim(),
      email: c.email.toLowerCase(),
      id: ++contador,
    }));

  console.log(usuariosLimpios);
}

limpiarUsuarios(registros);*/

// funcion flecha

const limpiarUsuarios = (usuariosLimpios) => {
  return usuariosLimpios
    .filter((c) => c.active === "true")
    .filter((c) => c.email.toLowerCase().includes("@usal.es"))
    .map((c, contador) => ({
      ...c,
      full_name: c.full_name.trim(),
      email: c.email.toLowerCase(),
      id: ++contador,
    }));
};

console.log(limpiarUsuarios(registros));
