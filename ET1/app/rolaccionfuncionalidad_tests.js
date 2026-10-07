// DEFINICION DE TESTS: rolaccionfuncionalidad_def_tests


var rolaccionfuncionalidad_def_tests = [

   // -------------------------------------------------------------
  // ATRIBUTO: id_funcionalidad (numerico, max 11 digitos)
   // -------------------------------------------------------------
  
  // ---- id_funcionalidad ADD ----
  ["rolaccionfuncionalidad", "id_funcionalidad", "input", 1, "Validar format numerico id_funcionalidad en ADD", "ADD", "id_funcionalidad_format_KO", "El identificador de funcionalidad debe ser numerico"],
  ["rolaccionfuncionalidad", "id_funcionalidad", "input", 2, "Validar max size id_funcionalidad en ADD (max 11 digitos)", "ADD", "id_funcionalidad_max_size_KO", "El identificador de funcionalidad excede el tamano maximo"],
  ["rolaccionfuncionalidad", "id_funcionalidad", "input", 3, "Validar id_funcionalidad correcto en ADD", "ADD", true, "Identificador de funcionalidad correcto"],

  // ---- id_funcionalidad EDIT ----
  ["rolaccionfuncionalidad", "id_funcionalidad", "input", 4, "Validar format numerico id_funcionalidad en EDIT", "EDIT", "id_funcionalidad_format_KO", "El identificador de funcionalidad debe ser numerico en EDIT"],
  ["rolaccionfuncionalidad", "id_funcionalidad", "input", 5, "Validar max size id_funcionalidad en EDIT (max 11 digitos)", "EDIT", "id_funcionalidad_max_size_KO", "El identificador de funcionalidad excede el tamano maximo en EDIT"],
  ["rolaccionfuncionalidad", "id_funcionalidad", "input", 6, "Validar id_funcionalidad correcto en EDIT", "EDIT", true, "Identificador de funcionalidad correcto en EDIT"],

  // ---- id_funcionalidad SEARCH ----
  ["rolaccionfuncionalidad", "id_funcionalidad", "input", 7, "Validar format numerico id_funcionalidad en SEARCH", "SEARCH", "id_funcionalidad_format_KO", "El identificador de funcionalidad no es valido en SEARCH"],
  ["rolaccionfuncionalidad", "id_funcionalidad", "input", 8, "Validar id_funcionalidad correcto en SEARCH", "SEARCH", true, "Busqueda por identificador de funcionalidad correcta"],

  // -------------------------------------------------------------
  // ATRIBUTO: id_accion (numerico, max 11 digitos)
  // -------------------------------------------------------------
  
  // ---- id_accion ADD ----
  ["rolaccionfuncionalidad", "id_accion", "input", 9, "Validar format numerico id_accion en ADD", "ADD", "id_accion_format_KO", "El identificador de accion debe ser numerico"],
  ["rolaccionfuncionalidad", "id_accion", "input", 10, "Validar max size id_accion en ADD (max 11 digitos)", "ADD", "id_accion_max_size_KO", "El identificador de accion excede el tamano maximo"],
  ["rolaccionfuncionalidad", "id_accion", "input", 11, "Validar id_accion correcto en ADD", "ADD", true, "Identificador de accion correcto"],

  // ---- id_accion EDIT ----
  ["rolaccionfuncionalidad", "id_accion", "input", 12, "Validar format numerico id_accion en EDIT", "EDIT", "id_accion_format_KO", "El identificador de accion debe ser numerico en EDIT"],
  ["rolaccionfuncionalidad", "id_accion", "input", 13, "Validar max size id_accion en EDIT (max 11 digitos)", "EDIT", "id_accion_max_size_KO", "El identificador de accion excede el tamano maximo en EDIT"],
  ["rolaccionfuncionalidad", "id_accion", "input", 14, "Validar id_accion correcto en EDIT", "EDIT", true, "Identificador de accion correcto en EDIT"],

  // ---- id_accion SEARCH ----
  ["rolaccionfuncionalidad", "id_accion", "input", 15, "Validar format numerico id_accion en SEARCH", "SEARCH", "id_accion_format_KO", "El identificador de accion no es valido en SEARCH"],
  ["rolaccionfuncionalidad", "id_accion", "input", 16, "Validar id_accion correcto en SEARCH", "SEARCH", true, "Busqueda por identificador de accion correcta"],

  // -------------------------------------------------------------
  // ATRIBUTO: id_rol (numerico, max 11 digitos)
  // -------------------------------------------------------------
  
  // ---- id_rol ADD ----
  ["rolaccionfuncionalidad", "id_rol", "input", 17, "Validar format numerico id_rol en ADD", "ADD", "id_rol_format_KO", "El identificador de rol debe ser numerico"],
  ["rolaccionfuncionalidad", "id_rol", "input", 18, "Validar max size id_rol en ADD (max 11 digitos)", "ADD", "id_rol_max_size_KO", "El identificador de rol excede el tamano maximo"],
  ["rolaccionfuncionalidad", "id_rol", "input", 19, "Validar id_rol correcto en ADD", "ADD", true, "Identificador de rol correcto"],

  // ---- id_rol EDIT ----
  ["rolaccionfuncionalidad", "id_rol", "input", 20, "Validar format numerico id_rol en EDIT", "EDIT", "id_rol_format_KO", "El identificador de rol debe ser numerico en EDIT"],
  ["rolaccionfuncionalidad", "id_rol", "input", 21, "Validar max size id_rol en EDIT (max 11 digitos)", "EDIT", "id_rol_max_size_KO", "El identificador de rol excede el tamano maximo en EDIT"],
  ["rolaccionfuncionalidad", "id_rol", "input", 22, "Validar id_rol correcto en EDIT", "EDIT", true, "Identificador de rol correcto en EDIT"],

  // ---- id_rol SEARCH ----
  ["rolaccionfuncionalidad", "id_rol", "input", 23, "Validar format numerico id_rol en SEARCH", "SEARCH", "id_rol_format_KO", "El identificador de rol no es valido en SEARCH"],
  ["rolaccionfuncionalidad", "id_rol", "input", 24, "Validar id_rol correcto en SEARCH", "SEARCH", true, "Busqueda por identificador de rol correcta"]
];

// BATERIA DE PRUEBAS: rolaccionfuncionalidad_pruebas (7 columnas)

var rolaccionfuncionalidad_pruebas = [
  // --- ID_FUNCIONALIDAD ADD ---
  // Tests 1-7: id_funcionalidad
  ["rolaccionfuncionalidad", "id_funcionalidad", 1, 1, "ADD", {"id_funcionalidad": "abc"}, "id_funcionalidad_format_KO"],
  ["rolaccionfuncionalidad", "id_funcionalidad", 1, 2, "ADD", {"id_funcionalidad": "12a"}, "id_funcionalidad_format_KO"],
  ["rolaccionfuncionalidad", "id_funcionalidad", 1, 3, "ADD", {"id_funcionalidad": "1"}, true],
  ["rolaccionfuncionalidad", "id_funcionalidad", 2, 4, "ADD", {"id_funcionalidad": "123456789012"}, "id_funcionalidad_max_size_KO"], // 12 digitos (KO)
  ["rolaccionfuncionalidad", "id_funcionalidad", 2, 5, "ADD", {"id_funcionalidad": "12345678901"}, true],                      // 11 digitos (Frontera OK)
  ["rolaccionfuncionalidad", "id_funcionalidad", 3, 6, "ADD", {"id_funcionalidad": "5"}, true],
  ["rolaccionfuncionalidad", "id_funcionalidad", 3, 7, "ADD", {"id_funcionalidad": ""}, "id_funcionalidad_format_KO"],

  // --- ID_FUNCIONALIDAD EDIT ---
  // Tests 8-12: id_funcionalidad
  ["rolaccionfuncionalidad", "id_funcionalidad", 4, 8, "EDIT", {"id_funcionalidad": "invalido"}, "id_funcionalidad_format_KO"],
  ["rolaccionfuncionalidad", "id_funcionalidad", 4, 9, "EDIT", {"id_funcionalidad": "2"}, true],
  ["rolaccionfuncionalidad", "id_funcionalidad", 5, 10, "EDIT", {"id_funcionalidad": "123456789012"}, "id_funcionalidad_max_size_KO"],
  ["rolaccionfuncionalidad", "id_funcionalidad", 5, 11, "EDIT", {"id_funcionalidad": "12345678901"}, true],
  ["rolaccionfuncionalidad", "id_funcionalidad", 6, 12, "EDIT", {"id_funcionalidad": "3"}, true],

  
  // --- ID_FUNCIONALIDAD SEARCH ---
  // Tests 13-16: id_funcionalidad
  ["rolaccionfuncionalidad", "id_funcionalidad", 7, 13, "SEARCH", {"id_funcionalidad": "error"}, "id_funcionalidad_format_KO"],
  ["rolaccionfuncionalidad", "id_funcionalidad", 7, 14, "SEARCH", {"id_funcionalidad": "1"}, true],
  ["rolaccionfuncionalidad", "id_funcionalidad", 8, 15, "SEARCH", {"id_funcionalidad": ""}, true],
  ["rolaccionfuncionalidad", "id_funcionalidad", 8, 16, "SEARCH", {"id_funcionalidad": "4"}, true],

  // --- ID_ACCION ADD ---
  // Tests 17-22: id_accion
  ["rolaccionfuncionalidad", "id_accion", 9, 17, "ADD", {"id_accion": "abc"}, "id_accion_format_KO"],
  ["rolaccionfuncionalidad", "id_accion", 9, 18, "ADD", {"id_accion": "12a"}, "id_accion_format_KO"],
  ["rolaccionfuncionalidad", "id_accion", 9, 19, "ADD", {"id_accion": "1"}, true],
  ["rolaccionfuncionalidad", "id_accion", 10, 20, "ADD", {"id_accion": "123456789012"}, "id_accion_max_size_KO"], // 12 digitos (KO)
  ["rolaccionfuncionalidad", "id_accion", 10, 21, "ADD", {"id_accion": "12345678901"}, true],                      // 11 digitos (Frontera OK)
  ["rolaccionfuncionalidad", "id_accion", 11, 22, "ADD", {"id_accion": "5"}, true],
  ["rolaccionfuncionalidad", "id_accion", 11, 23, "ADD", {"id_accion": ""}, "id_accion_format_KO"],

  // --- ID_ACCION EDIT ---
  // Tests 24-28: id_accion
  ["rolaccionfuncionalidad", "id_accion", 12, 24, "EDIT", {"id_accion": "invalido"}, "id_accion_format_KO"],
  ["rolaccionfuncionalidad", "id_accion", 12, 25, "EDIT", {"id_accion": "2"}, true],
  ["rolaccionfuncionalidad", "id_accion", 13, 26, "EDIT", {"id_accion": "123456789012"}, "id_accion_max_size_KO"],
  ["rolaccionfuncionalidad", "id_accion", 13, 27, "EDIT", {"id_accion": "12345678901"}, true],
  ["rolaccionfuncionalidad", "id_accion", 14, 28, "EDIT", {"id_accion": "3"}, true],

  // --- ID_ACCION SEARCH ---
   // Tests 29-32: id_funcionalidad
  ["rolaccionfuncionalidad", "id_accion", 15, 29, "SEARCH", {"id_accion": "error"}, "id_accion_format_KO"],
  ["rolaccionfuncionalidad", "id_accion", 15, 30, "SEARCH", {"id_accion": "1"}, true],
  ["rolaccionfuncionalidad", "id_accion", 16, 31, "SEARCH", {"id_accion": ""}, true],
  ["rolaccionfuncionalidad", "id_accion", 16, 32, "SEARCH", {"id_accion": "4"}, true],

  // --- ID_ROL ADD ---
   // Tests 33-39: id_rol
  ["rolaccionfuncionalidad", "id_rol", 17, 33, "ADD", {"id_rol": "abc"}, "id_rol_format_KO"],
  ["rolaccionfuncionalidad", "id_rol", 17, 34, "ADD", {"id_rol": "12a"}, "id_rol_format_KO"],
  ["rolaccionfuncionalidad", "id_rol", 17, 35, "ADD", {"id_rol": "1"}, true],
  ["rolaccionfuncionalidad", "id_rol", 18, 36, "ADD", {"id_rol": "123456789012"}, "id_rol_max_size_KO"], // 12 digitos (KO)
  ["rolaccionfuncionalidad", "id_rol", 18, 37, "ADD", {"id_rol": "12345678901"}, true],                   // 11 digitos (Frontera OK)
  ["rolaccionfuncionalidad", "id_rol", 19, 38, "ADD", {"id_rol": "5"}, true],
  ["rolaccionfuncionalidad", "id_rol", 19, 39, "ADD", {"id_rol": ""}, "id_rol_format_KO"],

  // Tests 40-44: id_rol
  ["rolaccionfuncionalidad", "id_rol", 20, 40, "EDIT", {"id_rol": "invalido"}, "id_rol_format_KO"],
  ["rolaccionfuncionalidad", "id_rol", 20, 41, "EDIT", {"id_rol": "2"}, true],
  ["rolaccionfuncionalidad", "id_rol", 21, 42, "EDIT", {"id_rol": "123456789012"}, "id_rol_max_size_KO"],
  ["rolaccionfuncionalidad", "id_rol", 21, 43, "EDIT", {"id_rol": "12345678901"}, true],
  ["rolaccionfuncionalidad", "id_rol", 22, 44, "EDIT", {"id_rol": "3"}, true],

  // --- ID_ROL SEARCH ---
  // Tests 45-48: id_rol
  ["rolaccionfuncionalidad", "id_rol", 23, 45, "SEARCH", {"id_rol": "error"}, "id_rol_format_KO"],
  ["rolaccionfuncionalidad", "id_rol", 23, 46, "SEARCH", {"id_rol": "1"}, true],
  ["rolaccionfuncionalidad", "id_rol", 24, 47, "SEARCH", {"id_rol": ""}, true],
  ["rolaccionfuncionalidad", "id_rol", 24, 48, "SEARCH", {"id_rol": "4"}, true]
];
