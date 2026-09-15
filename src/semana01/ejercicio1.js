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

function limpiarUsuarios(registros) {
  const usuariosLimpios = registros
    .filter((c) => c.active === "true")
    .filter((c) => c.email.toLowerCase().includes("@usal.es"));

  console.log(usuariosLimpios);
  console.log("\n\n\n\n");

  let contador = 1;
  const usuariosFinal = usuariosLimpios.map((c) => ({
    ...c,
    full_name: c.full_name.trim(),
    email: c.email.toLowerCase(),
    id: contador++,
  }));

  console.log(usuariosFinal);
}

limpiarUsuarios(registros);
