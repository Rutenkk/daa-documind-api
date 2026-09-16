const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const obtenerUsuario = async (id) => {
  await delay(500);
  if (id <= 0) {
    throw new Error("Identificador de usuario inválido");
  }
  return { id, nombre: "Estudiante USAL", plan: id === 99 ? "pro" : "free" };
};

const verificarPermisos = async (plan) => {
  await delay(300);
  return plan === "pro" || plan === "premium";
};

const autorizarAcceso = async (id) => {
  try {
    console.log(`\nVerificando usuario con ID: ${id}...`);
    const usuario = await obtenerUsuario(id);
    const tienePermiso = await verificarPermisos(usuario.plan);

    if (tienePermiso) {
      console.log(
        ` Acceso CONCEDIDO a ${usuario.nombre} (Plan ${usuario.plan})`,
      );
    } else {
      console.log(
        ` Acceso DENEGADO a ${usuario.nombre}: Plan ${usuario.plan} insuficiente`,
      );
    }
  } catch (err) {
    console.error(` Error en autorización: ${err.message}`);
  }
};

// Ejecutar pruebas:
await autorizarAcceso(1); // Acceso denegado (plan free)
await autorizarAcceso(99); // Acceso concedido (plan pro)
await autorizarAcceso(-5); // Error en autorización
