// Definicion de tests: usuario_def_tests (9 columnas)

var usuario_def_tests = [

    // -------------------------------------------------------------
    // ATRIBUTO: dni (input, 8 digitos y 1 letra)
    // -------------------------------------------------------------
    // --------- DNI ADD, EDIT, SEARCH -----------------------------
    ['usuario', 'dni', 'input', 1, 'Validar formato dni en ADD', 'format', 'ADD', 'dni_format_ko', 'El Formato del DNI debe ser 8 numeros y una letra'],
    ['usuario', 'dni', 'input', 2, 'Validar letra dni en ADD (modulo 23)', 'format', 'ADD', 'dni_letra_ko', 'La letra del DNI no se corresponde con los numeros'],
    ['usuario', 'dni', 'input', 3, 'Validar dni correcto en ADD', 'valid', 'ADD', true, 'DNI correcto'],
    ['usuario', 'dni', 'input', 4, 'Validar formato dni en EDIT', 'format', 'EDIT', 'dni_format_ko', 'El Formato del DNI debe ser 8 numeros y una letra'],
    ['usuario', 'dni', 'input', 5, 'Validar letra dni en EDIT (modulo 23)', 'format', 'EDIT', 'dni_letra_ko', 'La letra del DNI no se corresponde con los numeros'],
    ['usuario', 'dni', 'input', 6, 'Validar dni correcto en EDIT', 'valid', 'EDIT', true, 'DNI correcto en EDIT'],
    ['usuario', 'dni', 'input', 7, 'Validar formato dni en SEARCH', 'format', 'SEARCH', 'dni_format_ko', 'Formato de DNI no valido en SEARCH'],
    ['usuario', 'dni', 'input', 8, 'Validar dni correcto en SEARCH', 'valid', 'SEARCH', true, 'Busqueda por DNI correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: usuario (input, min 5 max 45, alfabetico sin ñ ni acentos)
    // -------------------------------------------------------------
    // --------- USUARIO ADD, EDIT, SEARCH -------------------------
    ['usuario', 'usuario', 'input', 9, 'Validar min size usuario en ADD (min 5)', 'min_size', 'ADD', 'usuario_min_size_ko', 'El nombre de usuario es demasiado corto (minimo 5)'],
    ['usuario', 'usuario', 'input', 10, 'Validar max size usuario en ADD (max 45)', 'max_size', 'ADD', 'usuario_max_size_ko', 'El nombre de usuario es demasiado largo (maximo 45)'],
    ['usuario', 'usuario', 'input', 11, 'Validar format usuario en ADD (solo letras sin acentos ni ñ)', 'format', 'ADD', 'usuario_format_ko', 'El usuario solo permite caracteres alfabeticos sin acentos ni ñ'],
    ['usuario', 'usuario', 'input', 12, 'Validar usuario correcto en ADD', 'valid', 'ADD', true, 'Usuario correcto'],
    ['usuario', 'usuario', 'input', 13, 'Validar min size usuario en EDIT (min 5)', 'min_size', 'EDIT', 'usuario_min_size_ko', 'El nombre de usuario es demasiado corto en EDIT (minimo 5)'],
    ['usuario', 'usuario', 'input', 14, 'Validar max size usuario en EDIT (max 45)', 'max_size', 'EDIT', 'usuario_max_size_ko', 'El nombre de usuario es demasiado largo en EDIT (maximo 45)'],
    ['usuario', 'usuario', 'input', 15, 'Validar format usuario en EDIT', 'format', 'EDIT', 'usuario_format_ko', 'Caracteres no permitidos en usuario en EDIT'],
    ['usuario', 'usuario', 'input', 16, 'Validar usuario correcto en EDIT', 'valid', 'EDIT', true, 'Usuario correcto en EDIT'],
    ['usuario', 'usuario', 'input', 17, 'Validar max size usuario en SEARCH (max 45)', 'max_size', 'SEARCH', 'usuario_max_size_ko', 'El usuario excede el maximo permitido en SEARCH'],
    ['usuario', 'usuario', 'input', 18, 'Validar format usuario en SEARCH', 'format', 'SEARCH', 'usuario_format_ko', 'Caracteres no permitidos en SEARCH'],
    ['usuario', 'usuario', 'input', 19, 'Validar usuario correcto en SEARCH', 'valid', 'SEARCH', true, 'Busqueda de usuario correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: contrasena (input, min 8 max 45, alfabetico sin ñ ni acentos)
    // -------------------------------------------------------------
    // --------- CONTRASENA ADD, EDIT ------------------------------
    ['usuario', 'contrasena', 'input', 20, 'Validar min size contrasena en ADD (min 8)', 'min_size', 'ADD', 'contrasena_min_size_ko', 'La contrasena es demasiado corta (minimo 8)'],
    ['usuario', 'contrasena', 'input', 21, 'Validar max size contrasena en ADD (max 45)', 'max_size', 'ADD', 'contrasena_max_size_ko', 'La contrasena es demasiado larga (maximo 45)'],
    ['usuario', 'contrasena', 'input', 22, 'Validar format contrasena en ADD (solo letras sin acentos ni n)', 'format', 'ADD', 'contrasena_format_ko', 'La contrasena solo permite caracteres alfabeticos sin acentos ni n'],
    ['usuario', 'contrasena', 'input', 23, 'Validar contrasena correcta en ADD', 'valid', 'ADD', true, 'Contrasena correcta'],
    ['usuario', 'contrasena', 'input', 24, 'Validar min size contrasena en EDIT (min 8)', 'min_size', 'EDIT', 'contrasena_min_size_ko', 'La contrasena es demasiado corta en EDIT (minimo 8)'],
    ['usuario', 'contrasena', 'input', 25, 'Validar max size contrasena en EDIT (max 45)', 'max_size', 'EDIT', 'contrasena_max_size_ko', 'La contrasena es demasiado larga en EDIT (maximo 45)'],
    ['usuario', 'contrasena', 'input', 26, 'Validar format contrasena en EDIT', 'format', 'EDIT', 'contrasena_format_ko', 'Caracteres no permitidos en la contrasena en EDIT'],
    ['usuario', 'contrasena', 'input', 27, 'Validar contrasena correcta en EDIT', 'valid', 'EDIT', true, 'Contrasena correcta en EDIT'],

    // -------------------------------------------------------------
    // ATRIBUTO: id_rol (select, max 11 digitos)
    // -------------------------------------------------------------
    // --------- ID_ROL ADD, EDIT, SEARCH --------------------------
    ['usuario', 'id_rol', 'select', 28, 'Validar format numerico id_rol en ADD', 'format', 'ADD', 'id_rol_format_ko', 'El identificador de rol debe ser numerico'],
    ['usuario', 'id_rol', 'select', 29, 'Validar max size id_rol en ADD (max 11 digitos)', 'max_size', 'ADD', 'id_rol_max_size_ko', 'El identificador de rol no puede superar 11 digitos'],
    ['usuario', 'id_rol', 'select', 30, 'Validar id_rol correcto en ADD', 'valid', 'ADD', true, 'Rol correcto'],
    ['usuario', 'id_rol', 'select', 31, 'Validar format numerico id_rol en EDIT', 'format', 'EDIT', 'id_rol_format_ko', 'El rol seleccionado no es numerico en EDIT'],
    ['usuario', 'id_rol', 'select', 32, 'Validar max size id_rol en EDIT (max 11 digitos)', 'max_size', 'EDIT', 'id_rol_max_size_ko', 'El rol excede el tamano maximo en EDIT'],
    ['usuario', 'id_rol', 'select', 33, 'Validar id_rol correcto en EDIT', 'valid', 'EDIT', true, 'Rol correcto en EDIT'],
    ['usuario', 'id_rol', 'select', 34, 'Validar format numerico id_rol en SEARCH', 'format', 'SEARCH', 'id_rol_format_ko', 'Rol invalido en SEARCH'],
    ['usuario', 'id_rol', 'select', 35, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'Busqueda por rol correcta']
];


// ===============================================================
// BATERIA DE PRUEBAS: usuario_pruebas (7 columnas)
// ===============================================================

var usuario_pruebas = [

    // -------------------------------------------------------------
    // ATRIBUTO: dni (input, 8 digitos y 1 letra)
    // -------------------------------------------------------------
    // --------- DNI ADD, EDIT, SEARCH -----------------------------
    ['usuario', 'dni', 1, 1, 'ADD', { 'dni': '1234567' }, 'dni_format_ko'],
    ['usuario', 'dni', 1, 2, 'ADD', { 'dni': '1234567890' }, 'dni_format_ko'],
    ['usuario', 'dni', 1, 3, 'ADD', { 'dni': '12345678-A' }, 'dni_format_ko'],
    ['usuario', 'dni', 1, 4, 'ADD', { 'dni': '53912456L' }, true],
    ['usuario', 'dni', 2, 5, 'ADD', { 'dni': '53912456Z' }, 'dni_letra_ko'],
    ['usuario', 'dni', 2, 6, 'ADD', { 'dni': '53912456L' }, true],
    ['usuario', 'dni', 3, 7, 'ADD', { 'dni': '53912456L' }, true],
    ['usuario', 'dni', 3, 8, 'ADD', { 'dni': '' }, 'dni_format_ko'],
    ['usuario', 'dni', 4, 9, 'EDIT', { 'dni': '1234' }, 'dni_format_ko'],
    ['usuario', 'dni', 4, 10, 'EDIT', { 'dni': '53912456L' }, true],
    ['usuario', 'dni', 5, 11, 'EDIT', { 'dni': '53912456Z' }, 'dni_letra_ko'],
    ['usuario', 'dni', 5, 12, 'EDIT', { 'dni': '53912456L' }, true],
    ['usuario', 'dni', 6, 13, 'EDIT', { 'dni': '53912456L' }, true],
    ['usuario', 'dni', 7, 14, 'SEARCH', { 'dni': '123456789A_LARGO' }, 'dni_format_ko'],
    ['usuario', 'dni', 7, 15, 'SEARCH', { 'dni': '53912456L' }, true],
    ['usuario', 'dni', 8, 16, 'SEARCH', { 'dni': '' }, true],
    ['usuario', 'dni', 8, 17, 'SEARCH', { 'dni': '53912456L' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: usuario (input, min 5 max 45, alfabetico sin ñ ni acentos)
    // -------------------------------------------------------------
    // --------- USUARIO ADD, EDIT, SEARCH -------------------------
    ['usuario', 'usuario', 9, 18, 'ADD', { 'usuario': 'a' }, 'usuario_min_size_ko'],
    ['usuario', 'usuario', 9, 19, 'ADD', { 'usuario': 'abcd' }, 'usuario_min_size_ko'],
    ['usuario', 'usuario', 9, 20, 'ADD', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 10, 21, 'ADD', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_ko'],
    ['usuario', 'usuario', 10, 22, 'ADD', { 'usuario': 'a'.repeat(45) }, true],
    ['usuario', 'usuario', 11, 23, 'ADD', { 'usuario': 'usuariño' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 11, 24, 'ADD', { 'usuario': 'usuarió' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 11, 25, 'ADD', { 'usuario': 'user123' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 11, 26, 'ADD', { 'usuario': 'user space' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 11, 27, 'ADD', { 'usuario': 'validuser' }, true],
    ['usuario', 'usuario', 12, 28, 'ADD', { 'usuario': 'gestorvalido' }, true],
    ['usuario', 'usuario', 12, 29, 'ADD', { 'usuario': '' }, 'usuario_min_size_ko'],
    ['usuario', 'usuario', 13, 30, 'EDIT', { 'usuario': 'test' }, 'usuario_min_size_ko'],
    ['usuario', 'usuario', 13, 31, 'EDIT', { 'usuario': 'abcde' }, true],
    ['usuario', 'usuario', 14, 32, 'EDIT', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_ko'],
    ['usuario', 'usuario', 14, 33, 'EDIT', { 'usuario': 'a'.repeat(45) }, true],
    ['usuario', 'usuario', 15, 34, 'EDIT', { 'usuario': 'user_edit!' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 15, 35, 'EDIT', { 'usuario': 'usuariomod' }, true],
    ['usuario', 'usuario', 16, 36, 'EDIT', { 'usuario': 'usuarioeditadook' }, true],
    ['usuario', 'usuario', 17, 37, 'SEARCH', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_ko'],
    ['usuario', 'usuario', 17, 38, 'SEARCH', { 'usuario': 'a'.repeat(45) }, true],
    ['usuario', 'usuario', 18, 39, 'SEARCH', { 'usuario': 'user#1' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 18, 40, 'SEARCH', { 'usuario': 'user' }, true],
    ['usuario', 'usuario', 19, 41, 'SEARCH', { 'usuario': '' }, true],
    ['usuario', 'usuario', 19, 42, 'SEARCH', { 'usuario': 'admin' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: contrasena (input, min 8 max 45, alfabetico sin ñ ni acentos)
    // -------------------------------------------------------------
    // --------- CONTRASENA ADD, EDIT ------------------------------
    ['usuario', 'contrasena', 20, 43, 'ADD', { 'contrasena': 'corta' }, 'contrasena_min_size_ko'],
    ['usuario', 'contrasena', 20, 44, 'ADD', { 'contrasena': 'abcdefg' }, 'contrasena_min_size_ko'],
    ['usuario', 'contrasena', 20, 45, 'ADD', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 21, 46, 'ADD', { 'contrasena': 'p'.repeat(46) }, 'contrasena_max_size_ko'],
    ['usuario', 'contrasena', 21, 47, 'ADD', { 'contrasena': 'p'.repeat(45) }, true],
    ['usuario', 'contrasena', 22, 48, 'ADD', { 'contrasena': 'usuariño' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 22, 49, 'ADD', { 'contrasena': 'usuarió' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 22, 50, 'ADD', { 'contrasena': 'pass1234' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 22, 51, 'ADD', { 'contrasena': 'pass word' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 22, 52, 'ADD', { 'contrasena': 'passwordsegura' }, true],
    ['usuario', 'contrasena', 23, 53, 'ADD', { 'contrasena': 'clavedificil' }, true],
    ['usuario', 'contrasena', 23, 54, 'ADD', { 'contrasena': '' }, 'contrasena_min_size_ko'],
    ['usuario', 'contrasena', 24, 55, 'EDIT', { 'contrasena': 'pass' }, 'contrasena_min_size_ko'],
    ['usuario', 'contrasena', 24, 56, 'EDIT', { 'contrasena': 'abcdefgh' }, true],
    ['usuario', 'contrasena', 25, 57, 'EDIT', { 'contrasena': 'p'.repeat(46) }, 'contrasena_max_size_ko'],
    ['usuario', 'contrasena', 25, 58, 'EDIT', { 'contrasena': 'p'.repeat(45) }, true],
    ['usuario', 'contrasena', 26, 59, 'EDIT', { 'contrasena': 'passw@rd' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 26, 60, 'EDIT', { 'contrasena': 'nuevapassword' }, true],
    ['usuario', 'contrasena', 27, 61, 'EDIT', { 'contrasena': 'modificadacorrecta' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: id_rol (select, max 11 digitos)
    // -------------------------------------------------------------
    // --------- ID_ROL ADD, EDIT, SEARCH --------------------------
    ['usuario', 'id_rol', 28, 62, 'ADD', { 'id_rol': 'abc' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 28, 63, 'ADD', { 'id_rol': '12a' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 28, 64, 'ADD', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 29, 65, 'ADD', { 'id_rol': '123456789012' }, 'id_rol_max_size_ko'],
    ['usuario', 'id_rol', 29, 66, 'ADD', { 'id_rol': '12345678901' }, true],
    ['usuario', 'id_rol', 29, 67, 'ADD', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 30, 68, 'ADD', { 'id_rol': '2' }, true],
    ['usuario', 'id_rol', 30, 69, 'ADD', { 'id_rol': '' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 31, 70, 'EDIT', { 'id_rol': 'texto' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 31, 71, 'EDIT', { 'id_rol': '3' }, true],
    ['usuario', 'id_rol', 32, 72, 'EDIT', { 'id_rol': '123456789012' }, 'id_rol_max_size_ko'],
    ['usuario', 'id_rol', 32, 73, 'EDIT', { 'id_rol': '12345678901' }, true],
    ['usuario', 'id_rol', 33, 74, 'EDIT', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 34, 75, 'SEARCH', { 'id_rol': 'rolErroneo' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 34, 76, 'SEARCH', { 'id_rol': '1' }, true],
    ['usuario', 'id_rol', 35, 77, 'SEARCH', { 'id_rol': '' }, true],
    ['usuario', 'id_rol', 35, 78, 'SEARCH', { 'id_rol': '2' }, true]
];