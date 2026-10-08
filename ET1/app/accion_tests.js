// ===============================================================
// DEFINICION DE TESTS: accion_def_tests (9 columnas)
// ===============================================================

let accion_def_tests = Array(
    // -- ID_ACCION ADD -- //
    ['accion', 'id_accion', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 3, 'cumple formato', 'format', 'ADD', 'id_accion_format_ko', 'Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion', 'id_accion', 'input', 4, 'es correcto', 'valid', 'ADD', true, 'ID acción es correcto'],

    // -- ID_ACCION EDIT -- //
    ['accion', 'id_accion', 'input', 5, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 6, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 7, 'cumple formato', 'format', 'EDIT', 'id_accion_format_ko', 'Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion', 'id_accion', 'input', 8, 'es correcto', 'valid', 'EDIT', true, 'ID acción es correcto'],

    // -- ID_ACCION SEARCH -- //
    ['accion', 'id_accion', 'input', 9, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion', 'id_accion', 'input', 10, 'cumple formato', 'format', 'SEARCH', 'id_accion_format_ko', 'Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion', 'id_accion', 'input', 11, 'es correcto', 'valid', 'SEARCH', true, 'ID acción es correcto'],

    // -- NOMBRE_ACCION ADD -- //
    ['accion', 'nombre_accion', 'input', 12, 'cumple tamaño minimo', 'min_size', 'ADD', 'nombre_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 13, 'cumple tamaño maximo', 'max_size', 'ADD', 'nombre_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 14, 'cumple formato', 'format', 'ADD', 'nombre_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion', 'nombre_accion', 'input', 15, 'es correcto', 'valid', 'ADD', true, 'Nombre acción es correcto'],

    // -- NOMBRE_ACCION EDIT -- //
    ['accion', 'nombre_accion', 'input', 16, 'cumple tamaño minimo', 'min_size', 'EDIT', 'nombre_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 17, 'cumple tamaño maximo', 'max_size', 'EDIT', 'nombre_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 18, 'cumple formato', 'format', 'EDIT', 'nombre_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion', 'nombre_accion', 'input', 19, 'es correcto', 'valid', 'EDIT', true, 'Nombre acción es correcto'],

    // -- NOMBRE_ACCION SEARCH -- //
    ['accion', 'nombre_accion', 'input', 20, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'nombre_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 21, 'cumple formato', 'format', 'SEARCH', 'nombre_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion', 'nombre_accion', 'input', 22, 'es correcto', 'valid', 'SEARCH', true, 'Nombre acción es correcto'],

    // -- DESCRIP_ACCION ADD -- //
    ['accion', 'descrip_accion', 'textarea', 23, 'cumple tamaño minimo', 'min_size', 'ADD', 'descrip_accion_min_size_ko', 'Tamño muy corto. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion', 'descrip_accion', 'textarea', 24, 'cumple tamaño maximo', 'max_size', 'ADD', 'descrip_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion', 'descrip_accion', 'textarea', 25, 'cumple formato', 'format', 'ADD', 'descrip_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos (ñ, espacio y signos de puntuación son válidos)'],
    ['accion', 'descrip_accion', 'textarea', 26, 'es correcto', 'valid', 'ADD', true, 'Descripcion de accion es correcto'],

    // -- DESCRIP_ACCION EDIT -- //
    ['accion', 'descrip_accion', 'textarea', 27, 'cumple tamaño minimo', 'min_size', 'EDIT', 'descrip_accion_min_size_ko', 'Tamaño muy corto. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion', 'descrip_accion', 'textarea', 28, 'cumple tamaño maximo', 'max_size', 'EDIT', 'descrip_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion', 'descrip_accion', 'textarea', 29, 'cumple formato', 'format', 'EDIT', 'descrip_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos (ñ, espacio y signos de puntuación son válidos)'],
    ['accion', 'descrip_accion', 'textarea', 30, 'es correcto', 'valid', 'EDIT', true, 'Descripcion de accion es correcto'],

    // -- DESCRIP_ACCION SEARCH -- //
    ['accion', 'descrip_accion', 'textarea', 31, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'descrip_accion_max_size_ko', 'Tamaño muy grande. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion', 'descrip_accion', 'textarea', 32, 'cumple formato', 'format', 'SEARCH', 'descrip_accion_format_ko', 'Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos (ñ, espacio y signos de puntuación son válidos)'],
    ['accion', 'descrip_accion', 'textarea', 33, 'es correcto', 'valid', 'SEARCH', true, 'Descripcion de accion es correcto']
);

// ===============================================================
// BATERIA DE PRUEBAS: accion_pruebas (7 columnas)
// ===============================================================

let accion_pruebas = Array(
    // -- ID_ACCION ADD -- //
    ['accion', 'id_accion', 1, 1, 'ADD', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['accion', 'id_accion', 2, 2, 'ADD', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 3, 3, 'ADD', { id_accion: '1a1b1c' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 3, 4, 'ADD', { id_accion: '?-1' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 4, 5, 'ADD', { id_accion: '99999999999' }, true],

    // -- ID_ACCION EDIT -- //
    ['accion', 'id_accion', 5, 6, 'EDIT', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['accion', 'id_accion', 6, 7, 'EDIT', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 7, 8, 'EDIT', { id_accion: '2A2B2c' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 7, 9, 'EDIT', { id_accion: '!-1.,' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 8, 10, 'EDIT', { id_accion: '88888888888' }, true],

    // -- ID_ACCION SEARCH -- //
    ['accion', 'id_accion', 9, 11, 'SEARCH', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 10, 12, 'SEARCH', { id_accion: 'a'.repeat(11) }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 10, 13, 'SEARCH', { id_accion: '1ab' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 11, 14, 'SEARCH', { id_accion: '123456789' }, true],

    // -- NOMBRE_ACCION ADD -- //
    ['accion', 'nombre_accion', 12, 15, 'ADD', { nombre_accion: 'aaaa' }, 'nombre_accion_min_size_ko'],
    ['accion', 'nombre_accion', 13, 16, 'ADD', { nombre_accion: 'a'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 14, 17, 'ADD', { nombre_accion: '1añadir' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 15, 18, 'ADD', { nombre_accion: 'añadir' }, true],

    // -- NOMBRE_ACCION EDIT -- //
    ['accion', 'nombre_accion', 16, 19, 'EDIT', { nombre_accion: '' }, 'nombre_accion_min_size_ko'],
    ['accion', 'nombre_accion', 17, 20, 'EDIT', { nombre_accion: 'b'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 18, 21, 'EDIT', { nombre_accion: '2añadir' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 19, 22, 'EDIT', { nombre_accion: 'validar' }, true],

    // -- NOMBRE_ACCION SEARCH -- //
    ['accion', 'nombre_accion', 20, 23, 'SEARCH', { nombre_accion: 'c'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 21, 24, 'SEARCH', { nombre_accion: '3añadir' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 22, 25, 'SEARCH', { nombre_accion: 'buscar' }, true],

    // -- DESCRIP_ACCION ADD -- //
    ['accion', 'descrip_accion', 23, 26, 'ADD', { descrip_accion: 'cccc' }, 'descrip_accion_min_size_ko'],
    ['accion', 'descrip_accion', 24, 27, 'ADD', { descrip_accion: 'c'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 25, 28, 'ADD', { descrip_accion: 'añadir accion $#' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 26, 29, 'ADD', { descrip_accion: 'Acción para editar registros del sistema.' }, true],

    // -- DESCRIP_ACCION EDIT -- //
    ['accion', 'descrip_accion', 27, 30, 'EDIT', { descrip_accion: 'dddd' }, 'descrip_accion_min_size_ko'],
    ['accion', 'descrip_accion', 28, 31, 'EDIT', { descrip_accion: 'd'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 29, 32, 'EDIT', { descrip_accion: 'eliminar registro %&' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 30, 33, 'EDIT', { descrip_accion: 'Acción para eliminar registros.' }, true],

    // -- DESCRIP_ACCION SEARCH -- //
    ['accion', 'descrip_accion', 31, 34, 'SEARCH', { descrip_accion: 'e'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 32, 35, 'SEARCH', { descrip_accion: 'buscar accion ^!' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 33, 36, 'SEARCH', { descrip_accion: '' }, true]
);