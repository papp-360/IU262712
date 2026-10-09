// ===============================================================
// DEFINICION DE TESTS: persona_def_tests (9 columnas)
// ===============================================================

let persona_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: dni (input, 8 digitos y 1 letra)
    // -------------------------------------------------------------
    // ---------ADD -----------------------------
    ['persona', 'dni', 'input', 1, 'cumple formato', 'format', 'ADD', 'dni_format_ko', 'Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona', 'dni', 'input', 2, 'validar letra dni en ADD (modulo 23)', 'personalized', 'ADD', 'dni_letra_ko', 'La letra del DNI no se corresponde con los numeros'],
    ['persona', 'dni', 'input', 3, 'es correcto', 'valid', 'ADD', true, 'DNI correcto'],

    // ---------EDIT-----------------------------
    ['persona', 'dni', 'input', 4, 'cumple formato', 'format', 'EDIT', 'dni_format_ko', 'Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona', 'dni', 'input', 5, 'validar letra dni en EDIT (modulo 23)', 'personalized', 'EDIT', 'dni_letra_ko', 'La letra del DNI no se corresponde con los numeros'],
    ['persona', 'dni', 'input', 6, 'es correcto', 'valid', 'EDIT', true, 'DNI correcto'],

    // ---------SEARCH --------------------------
    ['persona', 'dni', 'input', 7, 'cumple formato', 'format', 'SEARCH', 'dni_format_ko', 'Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona', 'dni', 'input', 8, 'es correcto', 'valid', 'SEARCH', true, 'DNI correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_persona (input, min 2 max 45, alfabetico)
    // -------------------------------------------------------------
    // ---------ADD---------------------------------------
    ['persona', 'nombre_persona', 'input', 9, 'cumple tamaño minimo', 'min_size', 'ADD', 'nombre_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 10, 'cumple tamaño maximo', 'max_size', 'ADD', 'nombre_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 11, 'cumple formato', 'format', 'ADD', 'nombre_persona_format_ko', 'Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona', 'nombre_persona', 'input', 12, 'es correcto', 'valid', 'ADD', true, 'Nombre persona correcto'],

    // ---------EDIT--------------------------------------
    ['persona', 'nombre_persona', 'input', 13, 'cumple tamaño minimo', 'min_size', 'EDIT', 'nombre_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 14, 'cumple tamaño maximo', 'max_size', 'EDIT', 'nombre_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 15, 'cumple formato', 'format', 'EDIT', 'nombre_persona_format_ko', 'Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona', 'nombre_persona', 'input', 16, 'es correcto', 'valid', 'EDIT', true, 'Nombre persona correcto'],

    // ---------SEARCH------------------------------------
    ['persona', 'nombre_persona', 'input', 17, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'nombre_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 18, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'nombre_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 19, 'cumple formato', 'format', 'SEARCH', 'nombre_persona_format_ko', 'Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona', 'nombre_persona', 'input', 20, 'es correcto', 'valid', 'SEARCH', true, 'Nombre persona correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: apellidos_persona (input, min 3 max 100, alfabetico)
    // -------------------------------------------------------------
    // ---------ADD---------------------------------------
    ['persona', 'apellidos_persona', 'input', 21, 'cumple tamaño minimo', 'min_size', 'ADD', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 22, 'cumple tamaño maximo', 'max_size', 'ADD', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 23, 'cumple formato', 'format', 'ADD', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 24, 'es correcto', 'valid', 'ADD', true, 'Apellidos correctos'],

    // ---------EDIT--------------------------------------
    ['persona', 'apellidos_persona', 'input', 25, 'cumple tamaño minimo', 'min_size', 'EDIT', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 26, 'cumple tamaño maximo', 'max_size', 'EDIT', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 27, 'cumple formato', 'format', 'EDIT', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 28, 'es correcto', 'valid', 'EDIT', true, 'Apellidos correctos'],

    // ---------SEARCH------------------------------------
    ['persona', 'apellidos_persona', 'input', 29, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 30, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 31, 'cumple formato', 'format', 'SEARCH', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 32, 'es correcto', 'valid', 'SEARCH', true, 'Apellidos correctos'],

    // -------------------------------------------------------------
    // ATRIBUTO: fechaNacimiento_persona (input, dd/mm/aaaa)
    // -------------------------------------------------------------
    // ---------ADD -----------------------------
    ['persona', 'fechaNacimiento_persona', 'input', 33, 'cumple formato', 'format', 'ADD', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 34, 'fecha posible', 'personalized', 'ADD', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 35, 'fecha anterior a la actual', 'personalized', 'ADD', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 36, 'es correcto', 'valid', 'ADD', true, 'Fecha nacimiento correcta'],

    // ---------EDIT-----------------------------
    ['persona', 'fechaNacimiento_persona', 'input', 37, 'cumple formato', 'format', 'EDIT', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 38, 'fecha posible', 'personalized', 'EDIT', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 39, 'fecha anterior a la actual', 'personalized', 'EDIT', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 40, 'es correcto', 'valid', 'EDIT', true, 'Fecha nacimiento correcta'],

    // ---------SEARCH --------------------------
    ['persona', 'fechaNacimiento_persona', 'input', 41, 'cumple formato', 'format', 'SEARCH', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 42, 'fecha posible', 'personalized', 'SEARCH', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 43, 'fecha anterior a la actual', 'personalized', 'SEARCH', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 44, 'es correcto', 'valid', 'SEARCH', true, 'Fecha nacimiento correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: direccion_persona (input, min 10 max 200)
    // -------------------------------------------------------------
    // ---------ADD------------------------------------
    ['persona', 'direccion_persona', 'input', 45, 'cumple tamaño minimo', 'min_size', 'ADD', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 46, 'cumple tamaño maximo', 'max_size', 'ADD', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 47, 'cumple formato', 'format', 'ADD', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 48, 'es correcto', 'valid', 'ADD', true, 'Direccion correcta'],

    // ---------EDIT-----------------------------------
    ['persona', 'direccion_persona', 'input', 49, 'cumple tamaño minimo', 'min_size', 'EDIT', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 50, 'cumple tamaño maximo', 'max_size', 'EDIT', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 51, 'cumple formato', 'format', 'EDIT', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 52, 'es correcto', 'valid', 'EDIT', true, 'Direccion correcta'],

    // ---------SEARCH---------------------------------
    ['persona', 'direccion_persona', 'input', 53, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 54, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 55, 'cumple formato', 'format', 'SEARCH', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 56, 'es correcto', 'valid', 'SEARCH', true, 'Direccion correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: telefono_persona (input, 9 digitos)
    // -------------------------------------------------------------
    // ---------ADD -----------------------------
    ['persona', 'telefono_persona', 'input', 57, 'cumple formato', 'format', 'ADD', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 58, 'es correcto', 'valid', 'ADD', true, 'Teléfono correcto'],

    // ---------EDIT-----------------------------
    ['persona', 'telefono_persona', 'input', 59, 'cumple formato', 'format', 'EDIT', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 60, 'es correcto', 'valid', 'EDIT', true, 'Teléfono correcto'],

    // ---------SEARCH --------------------------
    ['persona', 'telefono_persona', 'input', 61, 'cumple formato', 'format', 'SEARCH', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 62, 'es correcto', 'valid', 'SEARCH', true, 'Teléfono correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: email_persona (input, formato email)
    // -------------------------------------------------------------
    // ---------ADD -----------------------------
    ['persona', 'email_persona', 'input', 63, 'cumple formato', 'format', 'ADD', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 64, 'es correcto', 'valid', 'ADD', true, 'Email correcto'],

    // ---------EDIT-----------------------------
    ['persona', 'email_persona', 'input', 65, 'cumple formato', 'format', 'EDIT', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 66, 'es correcto', 'valid', 'EDIT', true, 'Email correcto'],

    // ---------SEARCH --------------------------
    ['persona', 'email_persona', 'input', 67, 'cumple formato', 'format', 'SEARCH', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 68, 'es correcto', 'valid', 'SEARCH', true, 'Email correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: nuevo_foto_persona (file)
    // -------------------------------------------------------------
    // ---------ADD -----------------------------
    ['persona', 'nuevo_foto_persona', 'file', 69, 'Comprobar formato nombre', 'format', 'ADD', 'nuevo_foto_persona_format_name_file_ko', 'El formato del nombre es incorrecto'],
    ['persona', 'nuevo_foto_persona', 'file', 70, 'Comprobar tipo fichero', 'format', 'ADD', 'nuevo_foto_persona_type_file_ko', 'El tipo de fichero es incorrecto'],
    ['persona', 'nuevo_foto_persona', 'file', 71, 'Comprobar tamaño fichero', 'max_size', 'ADD', 'nuevo_foto_persona_max_size_file_ko', 'El tamaño del archivo es demasiado grande'],
    ['persona', 'nuevo_foto_persona', 'file', 72, 'Comprobar tamaño minimo nombre', 'min_size', 'ADD', 'nuevo_foto_persona_min_size_ko', 'El nombre del archivo es demasiado corto'],
    ['persona', 'nuevo_foto_persona', 'file', 73, 'Comprobar valor correcto', 'valid', 'ADD', true, 'Fichero correcto'],

    // ---------EDIT-----------------------------
    ['persona', 'nuevo_foto_persona', 'file', 74, 'Comprobar formato nombre', 'format', 'EDIT', 'nuevo_foto_persona_format_name_file_ko', 'El formato del nombre es incorrecto'],
    ['persona', 'nuevo_foto_persona', 'file', 75, 'Comprobar tipo fichero', 'format', 'EDIT', 'nuevo_foto_persona_type_file_ko', 'El tipo de fichero es incorrecto'],
    ['persona', 'nuevo_foto_persona', 'file', 76, 'Comprobar tamaño fichero', 'max_size', 'EDIT', 'nuevo_foto_persona_max_size_file_ko', 'El tamaño del archivo es demasiado grande'],
    ['persona', 'nuevo_foto_persona', 'file', 77, 'Comprobar tamaño minimo nombre', 'min_size', 'EDIT', 'nuevo_foto_persona_min_size_ko', 'El nombre del archivo es demasiado corto'],
    ['persona', 'nuevo_foto_persona', 'file', 78, 'Comprobar valor correcto', 'valid', 'EDIT', true, 'Fichero correcto'],

    // ---------SEARCH --------------------------
    ['persona', 'nuevo_foto_persona', 'file', 79, 'Comprobar formato nombre', 'format', 'SEARCH', 'nuevo_foto_persona_format_name_file_ko', 'El formato del nombre es incorrecto'],
    ['persona', 'nuevo_foto_persona', 'file', 80, 'Comprobar tipo fichero', 'format', 'SEARCH', 'nuevo_foto_persona_type_file_ko', 'El tipo de fichero es incorrecto'],
    ['persona', 'nuevo_foto_persona', 'file', 81, 'Comprobar tamaño fichero', 'max_size', 'SEARCH', 'nuevo_foto_persona_max_size_file_ko', 'El tamaño del archivo es demasiado grande'],
    ['persona', 'nuevo_foto_persona', 'file', 82, 'Comprobar tamaño minimo nombre', 'min_size', 'SEARCH', 'nuevo_foto_persona_min_size_ko', 'El nombre del archivo es demasiado corto'],
    ['persona', 'nuevo_foto_persona', 'file', 83, 'Comprobar valor correcto', 'valid', 'SEARCH', true, 'Fichero correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: foto_persona (file)
    // -------------------------------------------------------------
    // ---------ADD -----------------------------
    ['persona', 'foto_persona', 'file', 84, 'Comprobar formato nombre', 'format', 'ADD', 'foto_persona_format_name_file_ko', 'El formato del nombre es incorrecto'],
    ['persona', 'foto_persona', 'file', 85, 'Comprobar tipo fichero', 'format', 'ADD', 'foto_persona_type_file_ko', 'El tipo de fichero es incorrecto'],
    ['persona', 'foto_persona', 'file', 86, 'Comprobar tamaño fichero', 'max_size', 'ADD', 'foto_persona_max_size_file_ko', 'El tamaño del archivo es demasiado grande'],
    ['persona', 'foto_persona', 'file', 87, 'Comprobar tamaño minimo nombre', 'min_size', 'ADD', 'foto_persona_min_size_ko', 'El nombre del archivo es demasiado corto'],
    ['persona', 'foto_persona', 'file', 88, 'Comprobar valor correcto', 'valid', 'ADD', true, 'Fichero correcto'],

    // ---------EDIT-----------------------------
    ['persona', 'foto_persona', 'file', 89, 'Comprobar formato nombre', 'format', 'EDIT', 'foto_persona_format_name_file_ko', 'El formato del nombre es incorrecto'],
    ['persona', 'foto_persona', 'file', 90, 'Comprobar tipo fichero', 'format', 'EDIT', 'foto_persona_type_file_ko', 'El tipo de fichero es incorrecto'],
    ['persona', 'foto_persona', 'file', 91, 'Comprobar tamaño fichero', 'max_size', 'EDIT', 'foto_persona_max_size_file_ko', 'El tamaño del archivo es demasiado grande'],
    ['persona', 'foto_persona', 'file', 92, 'Comprobar tamaño minimo nombre', 'min_size', 'EDIT', 'foto_persona_min_size_ko', 'El nombre del archivo es demasiado corto'],
    ['persona', 'foto_persona', 'file', 93, 'Comprobar valor correcto', 'valid', 'EDIT', true, 'Fichero correcto'],

    // ---------SEARCH --------------------------
    ['persona', 'foto_persona', 'file', 94, 'Comprobar formato nombre', 'format', 'SEARCH', 'foto_persona_format_name_file_ko', 'El formato del nombre es incorrecto'],
    ['persona', 'foto_persona', 'file', 95, 'Comprobar tipo fichero', 'format', 'SEARCH', 'foto_persona_type_file_ko', 'El tipo de fichero es incorrecto'],
    ['persona', 'foto_persona', 'file', 96, 'Comprobar tamaño fichero', 'max_size', 'SEARCH', 'foto_persona_max_size_file_ko', 'El tamaño del archivo es demasiado grande'],
    ['persona', 'foto_persona', 'file', 97, 'Comprobar tamaño minimo nombre', 'min_size', 'SEARCH', 'foto_persona_min_size_ko', 'El nombre del archivo es demasiado corto'],
    ['persona', 'foto_persona', 'file', 98, 'Comprobar valor correcto', 'valid', 'SEARCH', true, 'Fichero correcto']
);


// ===============================================================
// BATERIA DE PRUEBAS: persona_pruebas (7 columnas)
// ===============================================================

let persona_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: dni (input, 8 digitos y 1 letra)
    // -------------------------------------------------------------
    // ---------ADD-------------------------------------------
    ['persona', 'dni', 1, 1, 'ADD', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 1, 2, 'ADD', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 1, 3, 'ADD', { dni: '555555555' }, 'dni_format_ko'],
    ['persona', 'dni', 1, 4, 'ADD', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 2, 5, 'ADD', { dni: '53912456Z' }, 'dni_letra_ko'],
    ['persona', 'dni', 2, 6, 'ADD', { dni: '53912456L' }, true],
    ['persona', 'dni', 3, 7, 'ADD', { dni: '53912456L' }, true],

    // ---------EDIT------------------------------------------
    ['persona', 'dni', 4, 8, 'EDIT', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 4, 9, 'EDIT', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 4, 10, 'EDIT', { dni: '5555_5555R' }, 'dni_format_ko'],
    ['persona', 'dni', 4, 11, 'EDIT', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 5, 12, 'EDIT', { dni: '53912456Z' }, 'dni_letra_ko'],
    ['persona', 'dni', 5, 13, 'EDIT', { dni: '53912456L' }, true],
    ['persona', 'dni', 6, 14, 'EDIT', { dni: '53912456L' }, true],

    // ---------SEARCH----------------------------------------
    ['persona', 'dni', 7, 15, 'SEARCH', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 7, 16, 'SEARCH', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 7, 17, 'SEARCH', { dni: '5555_5555R' }, 'dni_format_ko'],
    ['persona', 'dni', 7, 18, 'SEARCH', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 8, 19, 'SEARCH', { dni: '' }, true],
    ['persona', 'dni', 8, 20, 'SEARCH', { dni: '53912456L' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_persona (input, min 2 max 45, alfabetico)
    // -------------------------------------------------------------
    // ---------ADD---------------------------------------
    ['persona', 'nombre_persona', 9, 21, 'ADD', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 10, 22, 'ADD', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 11, 23, 'ADD', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 12, 24, 'ADD', { nombre_persona: 'javi' }, true],

    // ---------EDIT--------------------------------------
    ['persona', 'nombre_persona', 13, 25, 'EDIT', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 14, 26, 'EDIT', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 15, 27, 'EDIT', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 16, 28, 'EDIT', { nombre_persona: 'javi' }, true],

    // ---------SEARCH------------------------------------
    ['persona', 'nombre_persona', 17, 29, 'SEARCH', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 18, 30, 'SEARCH', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 19, 31, 'SEARCH', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 20, 32, 'SEARCH', { nombre_persona: '' }, true],
    ['persona', 'nombre_persona', 20, 33, 'SEARCH', { nombre_persona: 'javi' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: apellidos_persona (input, min 3 max 100, alfabetico)
    // -------------------------------------------------------------
    // ---------ADD---------------------------------------
    ['persona', 'apellidos_persona', 21, 34, 'ADD', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 22, 35, 'ADD', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 23, 36, 'ADD', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 24, 37, 'ADD', { apellidos_persona: 'perez' }, true],

    // ---------EDIT--------------------------------------
    ['persona', 'apellidos_persona', 25, 38, 'EDIT', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 26, 39, 'EDIT', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 27, 40, 'EDIT', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 28, 41, 'EDIT', { apellidos_persona: 'perez' }, true],

    // ---------SEARCH------------------------------------
    ['persona', 'apellidos_persona', 29, 42, 'SEARCH', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 30, 43, 'SEARCH', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 31, 44, 'SEARCH', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 32, 45, 'SEARCH', { apellidos_persona: '' }, true],
    ['persona', 'apellidos_persona', 32, 46, 'SEARCH', { apellidos_persona: 'perez' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: fechaNacimiento_persona (input, dd/mm/aaaa)
    // -------------------------------------------------------------
    // ---------ADD-------------------------------------------
    ['persona', 'fechaNacimiento_persona', 33, 47, 'ADD', { fechaNacimiento_persona: '09-10-2020' }, 'fechaNacimiento_persona_format_ko'],
    ['persona', 'fechaNacimiento_persona', 34, 48, 'ADD', { fechaNacimiento_persona: '32/11/2020' }, 'fechaNacimiento_persona_fecha_valida_ko'],
    ['persona', 'fechaNacimiento_persona', 35, 49, 'ADD', { fechaNacimiento_persona: '01/01/2099' }, 'fechaNacimiento_persona_fecha_anterior_actual_ko'],
    ['persona', 'fechaNacimiento_persona', 36, 50, 'ADD', { fechaNacimiento_persona: '07/10/2000' }, true],

    // ---------EDIT------------------------------------------
    ['persona', 'fechaNacimiento_persona', 37, 51, 'EDIT', { fechaNacimiento_persona: '03 12 2020' }, 'fechaNacimiento_persona_format_ko'],
    ['persona', 'fechaNacimiento_persona', 38, 52, 'EDIT', { fechaNacimiento_persona: '45/02/2020' }, 'fechaNacimiento_persona_fecha_valida_ko'],
    ['persona', 'fechaNacimiento_persona', 39, 53, 'EDIT', { fechaNacimiento_persona: '01/01/2099' }, 'fechaNacimiento_persona_fecha_anterior_actual_ko'],
    ['persona', 'fechaNacimiento_persona', 40, 54, 'EDIT', { fechaNacimiento_persona: '05/10/2000' }, true],

    // ---------SEARCH----------------------------------------
    ['persona', 'fechaNacimiento_persona', 41, 55, 'SEARCH', { fechaNacimiento_persona: '07.12.2020' }, 'fechaNacimiento_persona_format_ko'],
    ['persona', 'fechaNacimiento_persona', 42, 56, 'SEARCH', { fechaNacimiento_persona: '37/05/2020' }, 'fechaNacimiento_persona_fecha_valida_ko'],
    ['persona', 'fechaNacimiento_persona', 43, 57, 'SEARCH', { fechaNacimiento_persona: '01/01/2099' }, 'fechaNacimiento_persona_fecha_anterior_actual_ko'],
    ['persona', 'fechaNacimiento_persona', 44, 58, 'SEARCH', { fechaNacimiento_persona: '' }, true],
    ['persona', 'fechaNacimiento_persona', 44, 59, 'SEARCH', { fechaNacimiento_persona: '17/09/2000' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: direccion_persona (input, min 10 max 200)
    // -------------------------------------------------------------
    // ---------ADD------------------------------------
    ['persona', 'direccion_persona', 45, 60, 'ADD', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 46, 61, 'ADD', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 47, 62, 'ADD', { direccion_persona: 'aaaaaa1?' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 48, 63, 'ADD', { direccion_persona: 'Calle de la Rosa, 12' }, true],

    // ---------EDIT-----------------------------------
    ['persona', 'direccion_persona', 49, 64, 'EDIT', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 50, 65, 'EDIT', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 51, 66, 'EDIT', { direccion_persona: 'aaaaaa1?' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 52, 67, 'EDIT', { direccion_persona: 'Calle de la Rosa, 12' }, true],

    // ---------SEARCH---------------------------------
    ['persona', 'direccion_persona', 53, 68, 'SEARCH', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 54, 69, 'SEARCH', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 55, 70, 'SEARCH', { direccion_persona: 'aaaaaa1?' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 56, 71, 'SEARCH', { direccion_persona: '' }, true],
    ['persona', 'direccion_persona', 56, 72, 'SEARCH', { direccion_persona: 'Calle de la Rosa, 12' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: telefono_persona (input, 9 digitos)
    // -------------------------------------------------------------
    // ---------ADD-------------------------------------------
    ['persona', 'telefono_persona', 57, 73, 'ADD', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 57, 74, 'ADD', { telefono_persona: '123467@8' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 57, 75, 'ADD', { telefono_persona: 'a1234678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 58, 76, 'ADD', { telefono_persona: '623456789' }, true],

    // ---------EDIT------------------------------------------
    ['persona', 'telefono_persona', 59, 77, 'EDIT', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 59, 78, 'EDIT', { telefono_persona: '123467@8' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 59, 79, 'EDIT', { telefono_persona: 'a1234678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 60, 80, 'EDIT', { telefono_persona: '623456789' }, true],

    // ---------SEARCH----------------------------------------
    ['persona', 'telefono_persona', 61, 81, 'SEARCH', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 61, 82, 'SEARCH', { telefono_persona: '123467@8' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 61, 83, 'SEARCH', { telefono_persona: 'a1234678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 62, 84, 'SEARCH', { telefono_persona: '' }, true],
    ['persona', 'telefono_persona', 62, 85, 'SEARCH', { telefono_persona: '623456789' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: email_persona (input, formato email)
    // -------------------------------------------------------------
    // ---------ADD-------------------------------------------
    ['persona', 'email_persona', 63, 86, 'ADD', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 64, 87, 'ADD', { email_persona: 'javi@ejemplo.com' }, true],

    // ---------EDIT------------------------------------------
    ['persona', 'email_persona', 65, 88, 'EDIT', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 66, 89, 'EDIT', { email_persona: 'javi@ejemplo.com' }, true],

    // ---------SEARCH----------------------------------------
    ['persona', 'email_persona', 67, 90, 'SEARCH', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 68, 91, 'SEARCH', { email_persona: '' }, true],
    ['persona', 'email_persona', 68, 92, 'SEARCH', { email_persona: 'javi@ejemplo.com' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: nuevo_foto_persona (file)
    // -------------------------------------------------------------
    // ---------ADD-------------------------------------------
    ['persona', 'nuevo_foto_persona', 69, 93, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 70, 94, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 71, 95, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 72, 96, 'ADD', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 73, 97, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 20000 } }, true],

    // ---------EDIT------------------------------------------
    ['persona', 'nuevo_foto_persona', 74, 98, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 75, 99, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 76, 100, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 20000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 77, 101, 'EDIT', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 78, 102, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    // ---------SEARCH----------------------------------------
    ['persona', 'nuevo_foto_persona', 79, 103, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 80, 104, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 81, 105, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 82, 106, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 83, 107, 'SEARCH', { nuevo_foto_persona: '' }, true],
    ['persona', 'nuevo_foto_persona', 83, 108, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: foto_persona (file)
    // -------------------------------------------------------------
    // ---------ADD-------------------------------------------
    ['persona', 'foto_persona', 84, 109, 'ADD', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 85, 110, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 86, 111, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 87, 112, 'ADD', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_ko'],
    ['persona', 'foto_persona', 88, 113, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    // ---------EDIT------------------------------------------
    ['persona', 'foto_persona', 89, 114, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 90, 115, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 91, 116, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 92, 117, 'EDIT', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_ko'],
    ['persona', 'foto_persona', 93, 118, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    // ---------SEARCH----------------------------------------
    ['persona', 'foto_persona', 94, 119, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 95, 120, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 96, 121, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 97, 122, 'SEARCH', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_ko'],
    ['persona', 'foto_persona', 98, 123, 'SEARCH', { foto_persona: '' }, true],
    ['persona', 'foto_persona', 98, 124, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true]
);