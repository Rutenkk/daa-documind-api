class ContactStore {
  constructor() {
    this.contactos = [];
  }

  obtenerTodos() {
    return [...this.contactos];
  }

  obtenerPorId(id) {
    const resultado = this.contactos.find((c) => c.id === id);
    return resultado || null;
  }

  crear(datos) {
    const nuevo = {
      ...datos,
      id: Date.now().toString(),
      creadoEn: new Date().toISOString(),
    };
    this.contactos.push(nuevo);
    return nuevo;
  }

  eliminar(id) {
    const longitudInicial = this.contactos.length;
    this.contactos = this.contactos.filter((c) => c.id !== id);
    return this.contactos.length < longitudInicial;
  }
}
