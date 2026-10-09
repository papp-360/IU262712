// ===============================================================
// DEFINICION DE TESTS: accion_def_tests (9 columnas)
// ===============================================================

let accion_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_accion (input, numerico min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD -----------------------------
    ['accion', 'id_accion', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 3, 'cumple formato', 'format', 'ADD', 'id_accion_format_ko', 'Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion', 'id_accion', 'input', 4, 'es correcto', 'valid', 'ADD', true, 'ID acción es correcto'],

    // ---------EDIT-----------------------------
    ['accion', 'id_accion', 'input', 5, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 6, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 7, 'cumple formato', 'format', 'EDIT', 'id_accion_format_ko', 'Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion', 'id_accion', 'input', 8, 'es correcto', 'valid', 'EDIT', true, 'ID acción es correcto'],

    // ---------SEARCH --------------------------
    ['accion', 'id_accion', 'input', 9, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 10, 'cumple formato', 'format', 'SEARCH', 'id_accion_format_ko', 'Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion', 'id_accion', 'input', 11, 'es correcto', 'valid', 'SEARCH', true, 'ID acción es correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_accion (input, min 5 max 48, alfabetico)
    // -------------------------------------------------------------
    // ---------ADD---------------------------------------
    ['accion', 'nombre_accion', 'input', 12, 'cumple tamaño minimo', 'min_size', 'ADD', 'nombre_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 13, 'cumple tamaño maximo', 'max_size', 'ADD', 'nombre_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 14, 'cumple formato', 'format', 'ADD', 'nombre_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion', 'nombre_accion', 'input', 15, 'es correcto', 'valid', 'ADD', true, 'Nombre acción es correcto'],

    // ---------EDIT--------------------------------------
    ['accion', 'nombre_accion', 'input', 16, 'cumple tamaño minimo', 'min_size', 'EDIT', 'nombre_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 17, 'cumple tamaño maximo', 'max_size', 'EDIT', 'nombre_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 18, 'cumple formato', 'format', 'EDIT', 'nombre_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion', 'nombre_accion', 'input', 19, 'es correcto', 'valid', 'EDIT', true, 'Nombre acción es correcto'],

    // ---------SEARCH------------------------------------
    ['accion', 'nombre_accion', 'input', 20, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'nombre_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 21, 'cumple formato', 'format', 'SEARCH', 'nombre_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion', 'nombre_accion', 'input', 22, 'es correcto', 'valid', 'SEARCH', true, 'Nombre acción es correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: descrip_accion (textarea, min 5 max 200, alfabetico con ñ, signos y espacios)
    // -------------------------------------------------------------
    // ---------ADD------------------------------------
    ['accion', 'descrip_accion', 'textarea', 23, 'cumple tamaño minimo', 'min_size', 'ADD', 'descrip_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 24, 'cumple tamaño maximo', 'max_size', 'ADD', 'descrip_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 25, 'cumple formato', 'format', 'ADD', 'descrip_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos'],
    ['accion', 'descrip_accion', 'textarea', 26, 'es correcto', 'valid', 'ADD', true, 'Descripcion de accion es correcto'],

    // ---------EDIT-----------------------------------
    ['accion', 'descrip_accion', 'textarea', 27, 'cumple tamaño minimo', 'min_size', 'EDIT', 'descrip_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 28, 'cumple tamaño maximo', 'max_size', 'EDIT', 'descrip_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 29, 'cumple formato', 'format', 'EDIT', 'descrip_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos'],
    ['accion', 'descrip_accion', 'textarea', 30, 'es correcto', 'valid', 'EDIT', true, 'Descripcion de accion es correcto'],

    // ---------SEARCH---------------------------------
    ['accion', 'descrip_accion', 'textarea', 31, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'descrip_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'textarea', 32, 'cumple formato', 'format', 'SEARCH', 'descrip_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos'],
    ['accion', 'descrip_accion', 'textarea', 33, 'es correcto', 'valid', 'SEARCH', true, 'Descripcion de accion es correcto']
);

// ===============================================================
// BATERIA DE PRUEBAS: accion_pruebas (7 columnas)
// ===============================================================

let accion_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_accion (input, numerico min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-------------------------------------------
    ['accion', 'id_accion', 1, 1, 'ADD', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['accion', 'id_accion', 2, 2, 'ADD', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 3, 3, 'ADD', { id_accion: '1a1b1c' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 3, 4, 'ADD', { id_accion: '?-1' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 4, 5, 'ADD', { id_accion: '99999999999' }, true],

    // ---------EDIT------------------------------------------
    ['accion', 'id_accion', 5, 6, 'EDIT', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['accion', 'id_accion', 6, 7, 'EDIT', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 7, 8, 'EDIT', { id_accion: '2A2B2c' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 7, 9, 'EDIT', { id_accion: '!-1.,' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 8, 10, 'EDIT', { id_accion: '88888888888' }, true],

    // ---------SEARCH----------------------------------------
    ['accion', 'id_accion', 9, 11, 'SEARCH', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 10, 12, 'SEARCH', { id_accion: 'a'.repeat(11) }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 10, 13, 'SEARCH', { id_accion: '1ab' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 11, 14, 'SEARCH', { id_accion: '' }, true],
    ['accion', 'id_accion', 11, 15, 'SEARCH', { id_accion: '123456789' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_accion (input, min 5 max 48, alfabetico)
    // -------------------------------------------------------------
    // ---------ADD---------------------------------------
    ['accion', 'nombre_accion', 12, 16, 'ADD', { nombre_accion: 'aaaa' }, 'nombre_accion_min_size_ko'],
    ['accion', 'nombre_accion', 13, 17, 'ADD', { nombre_accion: 'a'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 14, 18, 'ADD', { nombre_accion: '1anadir' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 14, 19, 'ADD', { nombre_accion: 'anadir con espacio' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 15, 20, 'ADD', { nombre_accion: 'anadir' }, true],

    // ---------EDIT--------------------------------------
    ['accion', 'nombre_accion', 16, 21, 'EDIT', { nombre_accion: '' }, 'nombre_accion_min_size_ko'],
    ['accion', 'nombre_accion', 17, 22, 'EDIT', { nombre_accion: 'b'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 18, 23, 'EDIT', { nombre_accion: '2anadir' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 19, 24, 'EDIT', { nombre_accion: 'validar' }, true],

    // ---------SEARCH------------------------------------
    ['accion', 'nombre_accion', 20, 25, 'SEARCH', { nombre_accion: 'c'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 21, 26, 'SEARCH', { nombre_accion: '3anadir' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 22, 27, 'SEARCH', { nombre_accion: '' }, true],
    ['accion', 'nombre_accion', 22, 28, 'SEARCH', { nombre_accion: 'buscar' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: descrip_accion (textarea, min 5 max 200, alfabetico con ñ, signos y espacios)
    // -------------------------------------------------------------
    // ---------ADD------------------------------------
    ['accion', 'descrip_accion', 23, 29, 'ADD', { descrip_accion: 'cccc' }, 'descrip_accion_min_size_ko'],
    ['accion', 'descrip_accion', 24, 30, 'ADD', { descrip_accion: 'c'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 25, 31, 'ADD', { descrip_accion: 'añadir accion $#' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 26, 32, 'ADD', { descrip_accion: 'Acción para editar registros del sistema.' }, true],

    // ---------EDIT-----------------------------------
    ['accion', 'descrip_accion', 27, 33, 'EDIT', { descrip_accion: 'dddd' }, 'descrip_accion_min_size_ko'],
    ['accion', 'descrip_accion', 28, 34, 'EDIT', { descrip_accion: 'd'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 29, 35, 'EDIT', { descrip_accion: 'eliminar registro %&' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 30, 36, 'EDIT', { descrip_accion: 'Acción para eliminar registros.' }, true],

    // ---------SEARCH---------------------------------
    ['accion', 'descrip_accion', 31, 37, 'SEARCH', { descrip_accion: 'e'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 32, 38, 'SEARCH', { descrip_accion: 'buscar accion ^!' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 33, 39, 'SEARCH', { descrip_accion: '' }, true],
    ['accion', 'descrip_accion', 33, 40, 'SEARCH', { descrip_accion: 'Acción para buscar registros.' }, true]
);