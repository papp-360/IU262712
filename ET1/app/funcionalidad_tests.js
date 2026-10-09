// ===============================================================
// Definición de tests: funcionalidad_def_tests (9 columnas)
// ===============================================================

let funcionalidad_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_funcionalidad (input, numerico min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD -----------------------------
    ['funcionalidad', 'id_funcionalidad', 'input', 1, 'cumple tamaño mínimo', 'min_size', 'ADD', 'id_funcionalidad_min_size_ko', 'Tamaño muy corto. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 2, 'cumple tamaño máximo', 'max_size', 'ADD', 'id_funcionalidad_max_size_ko', 'Tamaño muy grande. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 3, 'cumple formato', 'format', 'ADD', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 4, 'es correcto', 'valid', 'ADD', true, 'El identificador de funcionalidad correcto'],

    // ---------EDIT-----------------------------
    ['funcionalidad', 'id_funcionalidad', 'input', 5, 'cumple tamaño mínimo', 'min_size', 'EDIT', 'id_funcionalidad_min_size_ko', 'Tamaño muy corto. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 6, 'cumple tamaño máximo', 'max_size', 'EDIT', 'id_funcionalidad_max_size_ko', 'Tamaño muy grande. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 7, 'cumple formato', 'format', 'EDIT', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 8, 'es correcto', 'valid', 'EDIT', true, 'El identificador de funcionalidad correcto'],

    // ---------SEARCH --------------------------
    ['funcionalidad', 'id_funcionalidad', 'input', 9, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_ko', 'Tamaño muy grande. El identificador de funcionalidad debe tener como maximo 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 10, 'cumple formato', 'format', 'SEARCH', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 11, 'es correcto', 'valid', 'SEARCH', true, 'El identificador de funcionalidad correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_funcionalidad (input, min 5 max 48, alfabetico con ñ sin acentos ni espacios)
    // -------------------------------------------------------------
    // ---------ADD---------------------------------------
    ['funcionalidad', 'nombre_funcionalidad', 'input', 12, 'cumple tamaño mínimo', 'min_size', 'ADD', 'nombre_funcionalidad_min_size_ko', 'Tamaño muy corto. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 13, 'cumple tamaño máximo', 'max_size', 'ADD', 'nombre_funcionalidad_max_size_ko', 'Tamaño muy grande. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 14, 'cumple formato', 'format', 'ADD', 'nombre_funcionalidad_format_ko', 'Formato inválido. Solo se permiten letras (incluida la ñ), sin espacios ni acentos'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 15, 'es correcto', 'valid', 'ADD', true, 'Nombre de funcionalidad correcto'],

    // ---------EDIT--------------------------------------
    ['funcionalidad', 'nombre_funcionalidad', 'input', 16, 'cumple tamaño mínimo', 'min_size', 'EDIT', 'nombre_funcionalidad_min_size_ko', 'Tamaño muy corto. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 17, 'cumple tamaño máximo', 'max_size', 'EDIT', 'nombre_funcionalidad_max_size_ko', 'Tamaño muy grande. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 18, 'cumple formato', 'format', 'EDIT', 'nombre_funcionalidad_format_ko', 'Formato inválido. Solo se permiten letras (incluida la ñ), sin espacios ni acentos'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 19, 'es correcto', 'valid', 'EDIT', true, 'Nombre de funcionalidad correcto'],

    // ---------SEARCH------------------------------------
    ['funcionalidad', 'nombre_funcionalidad', 'input', 20, 'cumple tamaño máximo', 'max_size', 'SEARCH', 'nombre_funcionalidad_max_size_ko', 'Tamaño muy grande. Debe tener como maximo 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 21, 'cumple formato', 'format', 'SEARCH', 'nombre_funcionalidad_format_ko', 'Formato inválido. Solo se permiten letras (incluida la ñ), sin espacios ni acentos'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 22, 'es correcto', 'valid', 'SEARCH', true, 'Nombre de funcionalidad correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: descrip_funcionalidad (input, min 5 max 200, alfabetico con ñ, puntuacion y espacios)
    // -------------------------------------------------------------
    // ---------ADD------------------------------------
    ['funcionalidad', 'descrip_funcionalidad', 'input', 23, 'cumple tamaño mínimo', 'min_size', 'ADD', 'descrip_funcionalidad_min_size_ko', 'Tamaño muy corto. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 24, 'cumple tamaño máximo', 'max_size', 'ADD', 'descrip_funcionalidad_max_size_ko', 'Tamaño muy grande. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 25, 'cumple formato', 'format', 'ADD', 'descrip_funcionalidad_format_ko', 'Formato inválido. Solo se permiten letras (incluida la ñ), espacios y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 26, 'es correcto', 'valid', 'ADD', true, 'Descripción de funcionalidad correcta'],

    // ---------EDIT-----------------------------------
    ['funcionalidad', 'descrip_funcionalidad', 'input', 27, 'cumple tamaño mínimo', 'min_size', 'EDIT', 'descrip_funcionalidad_min_size_ko', 'Tamaño muy corto. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 28, 'cumple tamaño máximo', 'max_size', 'EDIT', 'descrip_funcionalidad_max_size_ko', 'Tamaño muy grande. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 29, 'cumple formato', 'format', 'EDIT', 'descrip_funcionalidad_format_ko', 'Formato inválido. Solo se permiten letras (incluida la ñ), espacios y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 30, 'es correcto', 'valid', 'EDIT', true, 'Descripción de funcionalidad correcta'],

    // ---------SEARCH---------------------------------
    ['funcionalidad', 'descrip_funcionalidad', 'input', 31, 'cumple tamaño máximo', 'max_size', 'SEARCH', 'descrip_funcionalidad_max_size_ko', 'Tamaño muy grande. Debe tener como maximo 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 32, 'cumple formato', 'format', 'SEARCH', 'descrip_funcionalidad_format_ko', 'Formato inválido. Solo se permiten letras (incluida la ñ), espacios y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 33, 'es correcto', 'valid', 'SEARCH', true, 'Descripción de funcionalidad correcta']
);


// ===============================================================
// BATERÍA DE PRUEBAS: funcionalidad_pruebas (7 columnas)
// ===============================================================

let funcionalidad_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_funcionalidad (input, numerico min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-------------------------------------------
    ['funcionalidad', 'id_funcionalidad', 1, 1, 'ADD', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 2, 2, 'ADD', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 3, 3, 'ADD', { id_funcionalidad: '1234567890a' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 3, 4, 'ADD', { id_funcionalidad: '123456#7890' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 4, 5, 'ADD', { id_funcionalidad: '12345678901' }, true],

    // ---------EDIT------------------------------------------
    ['funcionalidad', 'id_funcionalidad', 5, 6, 'EDIT', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 6, 7, 'EDIT', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 7, 8, 'EDIT', { id_funcionalidad: '1234567890a' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 7, 9, 'EDIT', { id_funcionalidad: '123456#7890' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 8, 10, 'EDIT', { id_funcionalidad: '12345678901' }, true],

    // ---------SEARCH----------------------------------------
    ['funcionalidad', 'id_funcionalidad', 9, 11, 'SEARCH', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 10, 12, 'SEARCH', { id_funcionalidad: '1234567890a' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 10, 13, 'SEARCH', { id_funcionalidad: '123456#7890' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 11, 14, 'SEARCH', { id_funcionalidad: '' }, true],
    ['funcionalidad', 'id_funcionalidad', 11, 15, 'SEARCH', { id_funcionalidad: '12345678901' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_funcionalidad (input, min 5 max 48, alfabetico con ñ sin acentos ni espacios)
    // -------------------------------------------------------------
    // ---------ADD---------------------------------------
    ['funcionalidad', 'nombre_funcionalidad', 12, 16, 'ADD', { nombre_funcionalidad: 'abcd' }, 'nombre_funcionalidad_min_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 13, 17, 'ADD', { nombre_funcionalidad: 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 18, 'ADD', { nombre_funcionalidad: 'abcd1' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 19, 'ADD', { nombre_funcionalidad: 'ab cd' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 20, 'ADD', { nombre_funcionalidad: 'abcdá' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 15, 21, 'ADD', { nombre_funcionalidad: 'abcdñ' }, true],

    // ---------EDIT--------------------------------------
    ['funcionalidad', 'nombre_funcionalidad', 16, 22, 'EDIT', { nombre_funcionalidad: 'abcd' }, 'nombre_funcionalidad_min_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 17, 23, 'EDIT', { nombre_funcionalidad: 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 24, 'EDIT', { nombre_funcionalidad: 'abcd1' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 25, 'EDIT', { nombre_funcionalidad: 'ab cd' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 26, 'EDIT', { nombre_funcionalidad: 'abcdá' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 19, 27, 'EDIT', { nombre_funcionalidad: 'abcdñ' }, true],

    // ---------SEARCH------------------------------------
    ['funcionalidad', 'nombre_funcionalidad', 20, 28, 'SEARCH', { nombre_funcionalidad: 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 21, 29, 'SEARCH', { nombre_funcionalidad: 'abcd1' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 21, 30, 'SEARCH', { nombre_funcionalidad: 'ab cd' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 22, 31, 'SEARCH', { nombre_funcionalidad: '' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 22, 32, 'SEARCH', { nombre_funcionalidad: 'abcdñ' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: descrip_funcionalidad (input, min 5 max 200, alfabetico con ñ, puntuacion y espacios)
    // -------------------------------------------------------------
    // ---------ADD------------------------------------
    ['funcionalidad', 'descrip_funcionalidad', 23, 33, 'ADD', { descrip_funcionalidad: 'abcd' }, 'descrip_funcionalidad_min_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 24, 34, 'ADD', { descrip_funcionalidad: 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 35, 'ADD', { descrip_funcionalidad: 'abcd1' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 36, 'ADD', { descrip_funcionalidad: 'abcd#' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 26, 37, 'ADD', { descrip_funcionalidad: 'Texto válido con signos, comas y punto.' }, true],

    // ---------EDIT-----------------------------------
    ['funcionalidad', 'descrip_funcionalidad', 27, 38, 'EDIT', { descrip_funcionalidad: 'abcd' }, 'descrip_funcionalidad_min_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 28, 39, 'EDIT', { descrip_funcionalidad: 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 29, 40, 'EDIT', { descrip_funcionalidad: 'abcd1' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 29, 41, 'EDIT', { descrip_funcionalidad: 'abcd#' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 30, 42, 'EDIT', { descrip_funcionalidad: 'Texto válido con signos, comas y punto.' }, true],

    // ---------SEARCH---------------------------------
    ['funcionalidad', 'descrip_funcionalidad', 31, 43, 'SEARCH', { descrip_funcionalidad: 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 32, 44, 'SEARCH', { descrip_funcionalidad: 'abcd1' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 32, 45, 'SEARCH', { descrip_funcionalidad: 'abcd#' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 33, 46, 'SEARCH', { descrip_funcionalidad: '' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 33, 47, 'SEARCH', { descrip_funcionalidad: 'abcdñ' }, true]
);