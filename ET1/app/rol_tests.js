// ===============================================================
// Definicion de tests: rol_def_tests
// ===============================================================
var rol_def_tests = [
  // -------------------------------------------------------------
  // ATRIBUTO: id_rol (numerico min 1 max 11 digitos)
  // -------------------------------------------------------------

  // === id_rol ADD ===
  ["rol", "id_rol", "input", 1, "Validar format numerico id_rol en ADD", "ADD", "id_rol_format_KO", "El identificador de rol debe ser numerico"],
  ["rol", "id_rol", "input", 2, "Validar max size id_rol en ADD (max 11 digitos)", "ADD", "id_rol_max_size_KO", "El identificador de rol excede el tamano maximo"],
  ["rol", "id_rol", "input", 3, "Validar id_rol correcto en ADD", "ADD", true, "Identificador de rol correcto"],

  // === id_rol EDIT ===
  ["rol", "id_rol", "input", 4, "Validar format numerico id_rol en EDIT", "EDIT", "id_rol_format_KO", "El identificador de rol debe ser numerico en EDIT"],
  ["rol", "id_rol", "input", 5, "Validar max size id_rol en EDIT (max 11 digitos)", "EDIT", "id_rol_max_size_KO", "El identificador de rol excede el tamano maximo en EDIT"],
  ["rol", "id_rol", "input", 6, "Validar id_rol correcto en EDIT", "EDIT", true, "Identificador de rol correcto en EDIT"],

  // === id_rol SEARCH ===
  ["rol", "id_rol", "input", 7, "Validar format numerico id_rol en SEARCH", "SEARCH", "id_rol_format_KO", "El identificador de rol no es valido en SEARCH"],
  ["rol", "id_rol", "input", 8, "Validar id_rol correcto en SEARCH", "SEARCH", true, "Busqueda por identificador de rol correcta"],

  // -------------------------------------------------------------
  // ATRIBUTO: rol_name (alfabetico sin n, min 5 max 48)
  // -------------------------------------------------------------
  
  // === rol_name ADD ===
  ["rol", "rol_name", "input", 9, "Validar min size rol_name en ADD (min 5)", "ADD", "rol_name_min_size_KO", "El nombre de rol es demasiado corto (minimo 5)"],
  ["rol", "rol_name", "input", 10, "Validar max size rol_name en ADD (max 48)", "ADD", "rol_name_max_size_KO", "El nombre de rol es demasiado largo (maximo 48)"],
  ["rol", "rol_name", "input", 11, "Validar format rol_name en ADD (solo letras sin n ni acentos)", "ADD", "rol_name_format_KO", "El nombre de rol contiene caracteres no permitidos"],
  ["rol", "rol_name", "input", 12, "Validar rol_name correcto en ADD", "ADD", true, "Nombre de rol correcto"],

  // === rol_name EDIT ===
  ["rol", "rol_name", "input", 13, "Validar min size rol_name en EDIT (min 5)", "EDIT", "rol_name_min_size_KO", "El nombre de rol es demasiado corto en EDIT (minimo 5)"],
  ["rol", "rol_name", "input", 14, "Validar max size rol_name en EDIT (max 48)", "EDIT", "rol_name_max_size_KO", "El nombre de rol es demasiado largo en EDIT (maximo 48)"],
  ["rol", "rol_name", "input", 15, "Validar format rol_name en EDIT", "EDIT", "rol_name_format_KO", "El nombre de rol contiene caracteres no permitidos en EDIT"],
  ["rol", "rol_name", "input", 16, "Validar rol_name correcto en EDIT", "EDIT", true, "Nombre de rol correcto en EDIT"],

  // === rol_name SEARCH ===
  ["rol", "rol_name", "input", 17, "Validar max size rol_name en SEARCH (max 48)", "SEARCH", "rol_name_max_size_KO", "Nombre de rol demasiado largo en SEARCH"],
  ["rol", "rol_name", "input", 18, "Validar format rol_name en SEARCH", "SEARCH", "rol_name_format_KO", "Caracteres no permitidos en la busqueda de nombre de rol"],
  ["rol", "rol_name", "input", 19, "Validar rol_name correcto en SEARCH", "SEARCH", true, "Busqueda de nombre de rol correcta"],

  // -------------------------------------------------------------
  // ATRIBUTO: rol_description (alfabetico con n y signos, min 5 max 200)
  // -------------------------------------------------------------
  
  // === rol_description ADD ===
  ["rol", "rol_description", "textarea", 20, "Validar min size rol_description en ADD (min 5)", "ADD", "rol_description_min_size_KO", "La descripcion es demasiado corta (minimo 5)"],
  ["rol", "rol_description", "textarea", 21, "Validar max size rol_description en ADD (max 200)", "ADD", "rol_description_max_size_KO", "La descripcion es demasiado larga (maximo 200)"],
  ["rol", "rol_description", "textarea", 22, "Validar format rol_description en ADD (letras, n y puntuacion)", "ADD", "rol_description_format_KO", "La descripcion contiene caracteres no permitidos"],
  ["rol", "rol_description", "textarea", 23, "Validar rol_description correcta en ADD", "ADD", true, "Descripcion de rol correcta"],

  // === rol_description EDIT ===
  ["rol", "rol_description", "textarea", 24, "Validar min size rol_description en EDIT (min 5)", "EDIT", "rol_description_min_size_KO", "La descripcion es demasiado corta en EDIT (minimo 5)"],
  ["rol", "rol_description", "textarea", 25, "Validar max size rol_description en EDIT (max 200)", "EDIT", "rol_description_max_size_KO", "La descripcion es demasiado larga en EDIT (maximo 200)"],
  ["rol", "rol_description", "textarea", 26, "Validar format rol_description en EDIT", "EDIT", "rol_description_format_KO", "Caracteres no permitidos en la descripcion en EDIT"],
  ["rol", "rol_description", "textarea", 27, "Validar rol_description correcta en EDIT", "EDIT", true, "Descripcion de rol correcta en EDIT"],

  // === rol_description SEARCH ===
  ["rol", "rol_description", "textarea", 28, "Validar max size rol_description en SEARCH (max 200)", "SEARCH", "rol_description_max_size_KO", "Descripcion demasiado larga en SEARCH"],
  ["rol", "rol_description", "textarea", 29, "Validar format rol_description en SEARCH", "SEARCH", "rol_description_format_KO", "Caracteres no permitidos en la busqueda de descripcion"],
  ["rol", "rol_description", "textarea", 30, "Validar rol_description correcta en SEARCH", "SEARCH", true, "Busqueda de descripcion correcta"]
];

// ===============================================================
// BATERIA DE PRUEBAS: rol_pruebas
// ===============================================================

var rol_pruebas = [
  // --- ID_ROL ADD ---
  //Test56-61: id_rol ADD
  ["rol", "id_rol", 1, 1, "ADD", {"id_rol": "abc"}, "id_rol_format_KO"],
  ["rol", "id_rol", 1, 2, "ADD", {"id_rol": "12a"}, "id_rol_format_KO"],
  ["rol", "id_rol", 1, 3, "ADD", {"id_rol": "1"}, true],

  ["rol", "id_rol", 2, 4, "ADD", {"id_rol": "123456789012"}, "id_rol_max_size_KO"],
  ["rol", "id_rol", 2, 5, "ADD", {"id_rol": "12345678901"}, true],  
  ["rol", "id_rol", 2, 6, "ADD", {"id_rol": "1"}, true],

  ["rol", "id_rol", 3, 7, "ADD", {"id_rol": "5"}, true],
  ["rol", "id_rol", 3, 8, "ADD", {"id_rol": ""}, "id_rol_format_KO"],

  // --- ID_ROL EDIT ---
  //Test9-13: id_rol EDIT
  ["rol", "id_rol", 4, 9, "EDIT", {"id_rol": "invalido"}, "id_rol_format_KO"],
  ["rol", "id_rol", 4, 10, "EDIT", {"id_rol": "2"}, true],
  ["rol", "id_rol", 5, 11, "EDIT", {"id_rol": "123456789012"}, "id_rol_max_size_KO"],
  ["rol", "id_rol", 5, 12, "EDIT", {"id_rol": "12345678901"}, true],
  ["rol", "id_rol", 6, 13, "EDIT", {"id_rol": "3"}, true],

  // --- ID_ROL SEARCH ---
  //Test14-17: id_rol SEARCH
  ["rol", "id_rol", 7, 14, "SEARCH", {"id_rol": "error"}, "id_rol_format_KO"],
  ["rol", "id_rol", 7, 15, "SEARCH", {"id_rol": "1"}, true],
  ["rol", "id_rol", 8, 16, "SEARCH", {"id_rol": ""}, true],
  ["rol", "id_rol", 8, 17, "SEARCH", {"id_rol": "4"}, true],

  // --- ROL_NAME ADD ---
  //Test18-26: rol_name ADD
  ["rol", "rol_name", 9, 18, "ADD", {"rol_name": "user"}, "rol_name_min_size_KO"],
  ["rol", "rol_name", 9, 19, "ADD", {"rol_name": "admin"}, true],
  ["rol", "rol_name", 10, 20, "ADD", {"rol_name": "a".repeat(49)}, "rol_name_max_size_KO"], 
  ["rol", "rol_name", 10, 21, "ADD", {"rol_name": "a".repeat(48)}, true],
  ["rol", "rol_name", 11, 22, "ADD", {"rol_name": "rol_con_n\u00f1"}, "rol_name_format_KO"],
  ["rol", "rol_name", 11, 23, "ADD", {"rol_name": "rol123"}, "rol_name_format_KO"],
  ["rol", "rol_name", 11, 24, "ADD", {"rol_name": "administrador"}, true],
  ["rol", "rol_name", 12, 25, "ADD", {"rol_name": "coordinador"}, true],
  ["rol", "rol_name", 12, 26, "ADD", {"rol_name": ""}, "rol_name_min_size_KO"],

  // --- ROL_NAME EDIT ---
  //Test27-33: rol_name EDIT
  ["rol", "rol_name", 13, 27, "EDIT", {"rol_name": "abc"}, "rol_name_min_size_KO"],
  ["rol", "rol_name", 13, 28, "EDIT", {"rol_name": "admin"}, true],
  ["rol", "rol_name", 14, 29, "EDIT", {"rol_name": "a".repeat(49)}, "rol_name_max_size_KO"],
  ["rol", "rol_name", 14, 30, "EDIT", {"rol_name": "a".repeat(48)}, true],
  ["rol", "rol_name", 15, 31, "EDIT", {"rol_name": "rol con espacio"}, "rol_name_format_KO"],
  ["rol", "rol_name", 15, 32, "EDIT", {"rol_name": "supervisor"}, true],
  ["rol", "rol_name", 16, 33, "EDIT", {"rol_name": "moderador"}, true],

  // --- ROL_NAME SEARCH ---
  //Test34-39: rol_name SEARCH
  ["rol", "rol_name", 17, 34, "SEARCH", {"rol_name": "a".repeat(49)}, "rol_name_max_size_KO"],
  ["rol", "rol_name", 17, 35, "SEARCH", {"rol_name": "a".repeat(48)}, true],
  ["rol", "rol_name", 18, 36, "SEARCH", {"rol_name": "rol%erroneo"}, "rol_name_format_KO"],
  ["rol", "rol_name", 18, 37, "SEARCH", {"rol_name": "adm"}, true],
  ["rol", "rol_name", 19, 38, "SEARCH", {"rol_name": ""}, true],
  ["rol", "rol_name", 19, 39, "SEARCH", {"rol_name": "admin"}, true],

  // --- ROL_DESCRIPTION ADD ---
  //Test40-28: rol description ADD
  ["rol", "rol_description", 20, 40, "ADD", {"rol_description": "desc"}, "rol_description_min_size_KO"],
  ["rol", "rol_description", 20, 41, "ADD", {"rol_description": "roles"}, true],
  ["rol", "rol_description", 21, 42, "ADD", {"rol_description": "d".repeat(201)}, "rol_description_max_size_KO"],
  ["rol", "rol_description", 21, 43, "ADD", {"rol_description": "d".repeat(200)}, true],
  ["rol", "rol_description", 22, 44, "ADD", {"rol_description": "rol con numeros 123"}, "rol_description_format_KO"],
  ["rol", "rol_description", 22, 45, "ADD", {"rol_description": "Permite ano, punto y coma; total."}, true],
  ["rol", "rol_description", 22, 46, "ADD", {"rol_description": "Descripcion de administrador."}, true],
  ["rol", "rol_description", 23, 47, "ADD", {"rol_description": "Gestion completa de usuarios."}, true],
  ["rol", "rol_description", 23, 48, "ADD", {"rol_description": ""}, "rol_description_min_size_KO"],

  // --- ROL_DESCRIPTION EDIT ---
  //Test49-55: rol description EDIT
  ["rol", "rol_description", 24, 49, "EDIT", {"rol_description": "abc"}, "rol_description_min_size_KO"],
  ["rol", "rol_description", 24, 50, "EDIT", {"rol_description": "roles"}, true],
  ["rol", "rol_description", 25, 51, "EDIT", {"rol_description": "d".repeat(201)}, "rol_description_max_size_KO"],
  ["rol", "rol_description", 25, 52, "EDIT", {"rol_description": "d".repeat(200)}, true],
  ["rol", "rol_description", 26, 53, "EDIT", {"rol_description": "Descripcion con digito 9"}, "rol_description_format_KO"],
  ["rol", "rol_description", 26, 54, "EDIT", {"rol_description": "Edicion valida con signos, punto."}, true],
  ["rol", "rol_description", 27, 55, "EDIT", {"rol_description": "Descripcion modificada con exito."}, true],

  // --- ROL_DESCRIPTION SEARCH ---
  //Test56-61: rol description SEARCH
  ["rol", "rol_description", 28, 56, "SEARCH", {"rol_description": "d".repeat(201)}, "rol_description_max_size_KO"],
  ["rol", "rol_description", 28, 57, "SEARCH", {"rol_description": "d".repeat(200)}, true],
  ["rol", "rol_description", 29, 58, "SEARCH", {"rol_description": "desc#invalida"}, "rol_description_format_KO"],
  ["rol", "rol_description", 29, 59, "SEARCH", {"rol_description": "admin"}, true],
  ["rol", "rol_description", 30, 60, "SEARCH", {"rol_description": ""}, true],
  ["rol", "rol_description", 30, 61, "SEARCH", {"rol_description": "descripcion valida"}, true]
];
