let persona_def_tests = Array(
    //campos no ficheros
    //--------------------dni--------------------
    ['persona', 'dni', 'input', 1, 'cumple formato', 'format', 'ADD', 'dni_format_ko', 'Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona', 'dni', 'input', 2, 'es correcto', 'valid', 'ADD', true, 'DNI correcto'],
    ['persona', 'dni', 'input', 3, 'cumple formato', 'format', 'EDIT', 'dni_format_ko', 'Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona', 'dni', 'input', 4, 'es correcto', 'valid', 'EDIT', true, 'DNI correcto'],
    ['persona', 'dni', 'input', 5, 'cumple formato', 'format', 'SEARCH', 'dni_format_ko', 'Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona', 'dni', 'input', 6, 'es correcto', 'valid', 'SEARCH', true, 'DNI correcto'],

    //--------------------nombre_persona--------------------
    ['persona', 'nombre_persona', 'input', 7, 'cumple tamaño minimo', 'min_size', 'ADD', 'nombre_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 8, 'cumple tamaño maximo', 'max_size', 'ADD', 'nombre_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 9, 'cumple formato', 'format', 'ADD', 'nombre_persona_format_ko', 'Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona', 'nombre_persona', 'input', 10, 'es correcto', 'valid', 'ADD', true, 'Nombre persona correcto'],
    ['persona', 'nombre_persona', 'input', 11, 'cumple tamaño minimo', 'min_size', 'EDIT', 'nombre_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 12, 'cumple tamaño maximo', 'max_size', 'EDIT', 'nombre_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 13, 'cumple formato', 'format', 'EDIT', 'nombre_persona_format_ko', 'Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona', 'nombre_persona', 'input', 14, 'es correcto', 'valid', 'EDIT', true, 'Nombre persona correcto'],
    ['persona', 'nombre_persona', 'input', 15, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'nombre_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 16, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'nombre_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 17, 'cumple formato', 'format', 'SEARCH', 'nombre_persona_format_ko', 'Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona', 'nombre_persona', 'input', 18, 'es correcto', 'valid', 'SEARCH', true, 'Nombre persona correcto'],

    //--------------------apellidos_persona--------------------
    ['persona', 'apellidos_persona', 'input', 19, 'cumple tamaño minimo', 'min_size', 'ADD', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 20, 'cumple tamaño maximo', 'max_size', 'ADD', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 13, 'cumple formato', 'format', 'ADD', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 14, 'es correcto', 'valid', 'ADD', true, 'Apellidos correctos'],
    ['persona', 'apellidos_persona', 'input', 15, 'cumple tamaño minimo', 'min_size', 'EDIT', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 16, 'cumple tamaño maximo', 'max_size', 'EDIT', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 17, 'cumple formato', 'format', 'EDIT', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 18, 'es correcto', 'valid', 'EDIT', true, 'Apellidos corrects'],
    ['persona', 'apellidos_persona', 'input', 19, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 20, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 21, 'cumple formato', 'format', 'SEARCH', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 22, 'es correcto', 'valid', 'SEARCH', true, 'Apellidos corrects'],


    //--------------------fechaNacimiento_persona--------------------
    ['persona', 'fechaNacimiento_persona', 'input', 23, 'cumple formato', 'format', 'ADD', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 24, 'fecha posible', 'personalized', 'ADD', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 25, 'fecha anterior a la actual', 'personalized', 'ADD', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 26, 'es correcto', 'valid', 'ADD', true, 'Fecha nacimiento correcta'],
    ['persona', 'fechaNacimiento_persona', 'input', 27, 'cumple formato', 'format', 'EDIT', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 28, 'fecha posible', 'personalized', 'EDIT', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 29, 'fecha anterior a la actual', 'personalized', 'EDIT', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 30, 'es correcto', 'valid', 'EDIT', true, 'Fecha nacimiento correcta'],
    ['persona', 'fechaNacimiento_persona', 'input', 31, 'cumple formato', 'format', 'SEARCH', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 32, 'fecha posible', 'personalized', 'SEARCH', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 33, 'fecha anterior a la actual', 'personalized', 'SEARCH', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 34, 'es correcto', 'valid', 'SEARCH', true, 'Fecha nacimiento correcta'],

    //--------------------direccion_persona--------------------
    ['persona', 'direccion_persona', 'input', 35, 'cumple tamaño minimo', 'min_size', 'ADD', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 36, 'cumple tamaño maximo', 'max_size', 'ADD', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 37, 'cumple formato', 'format', 'ADD', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con  acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 38, 'es correcto', 'valid', 'ADD', true, 'Direccion correcta'],
    ['persona', 'direccion_persona', 'input', 39, 'cumple tamaño minimo', 'min_size', 'EDIT', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 40, 'cumple tamaño maximo', 'max_size', 'EDIT', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 41, 'cumple formato', 'format', 'EDIT', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con  acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 42, 'es correcto', 'valid', 'EDIT', true, 'Direccion correcta'],
    ['persona', 'direccion_persona', 'input', 43, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 44, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 45, 'cumple formato', 'format', 'SEARCH', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con  acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 46, 'es correcto', 'valid', 'SEARCH', true, 'Direccion correcta'],


    //--------------------telefono_persona--------------------
    ['persona', 'telefono_persona', 'input', 47, 'cumple formato', 'format', 'ADD', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 48, 'es correcto', 'valid', 'ADD', true, 'Teléfono correcto'],
    ['persona', 'telefono_persona', 'input', 49, 'cumple formato', 'format', 'EDIT', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 50, 'es correcto', 'valid', 'EDIT', true, 'Teléfono correcto'],
    ['persona', 'telefono_persona', 'input', 51, 'cumple formato', 'format', 'SEARCH', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 52, 'es correcto', 'valid', 'SEARCH', true, 'Teléfono correcto'],


    //--------------------email_persona--------------------
    ['persona', 'email_persona', 'input', 53, 'cumple formato', 'format', 'ADD', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 54, 'es correcto', 'valid', 'ADD', true, 'Email correcto'],
    ['persona', 'email_persona', 'input', 55, 'cumple formato', 'format', 'EDIT', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 56, 'es correcto', 'valid', 'EDIT', true, 'Email correcto'],
    ['persona', 'email_persona', 'input', 57, 'cumple formato', 'format', 'SEARCH', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 58, 'es correcto', 'valid', 'SEARCH', true, 'Email correcto'],


    //---------------------nuevo foto persona--------------------
    ['persona', 'nuevo_foto_persona', 59, 'Comprobar formato nombre', 'ADD', 'nuevo_foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 60, 'Comprobar formato fichero', 'ADD', 'nuevo_foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 61, 'Comprobar tamaño fichero', 'ADD', 'nuevo_foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 62, 'Comprobar tamaño minimo', 'ADD', 'nuevo_foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 63, 'Comprobar tamaño max nombre', 'ADD', 'nuevo_foto_persona_max_size_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 64, 'Comprobar valor correcto', 'ADD', true],
    ['persona', 'nuevo_foto_persona', 65, 'Comprobar formato nombre', 'EDIT', 'nuevo_foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 66, 'Comprobar formato fichero', 'EDIT', 'nuevo_foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 67, 'Comprobar tamaño fichero', 'EDIT', 'nuevo_foto_persona_max_size_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 68, 'Comprobar tamaño minimo', 'EDIT', 'nuevo_foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 69, 'Comprobar tamaño max nombre', 'EDIT', 'nuevo_foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 70, 'Comprobar valor correcto', 'EDIT', true],
    ['persona', 'nuevo_foto_persona', 71, 'Comprobar formato nombre', 'SEARCH', 'nuevo_foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 72, 'Comprobar formato fichero', 'SEARCH', 'nuevo_foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 73, 'Comprobar tamaño fichero', 'SEARCH', 'nuevo_foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 74, 'Comprobar tamaño minimo', 'SEARCH', 'nuevo_foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 75, 'Comprobar tamaño max nombre', 'SEARCH', 'nuevo_foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 76, 'Comprobar valor correcto', 'SEARCH', true],

    //--------------------foto persona(ADD EDIT Y SEARCH)--------------------
    ['persona', 'foto_persona', 77, 'Comprobar formato nombre', 'ADD', 'foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 78, 'Comprobar formato fichero', 'ADD', 'foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 79, 'Comprobar tamaño fichero', 'ADD', 'foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 80, 'Comprobar tamaño minimo', 'ADD', 'foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 81, 'Comprobar tamaño max nombre', 'ADD', 'foto_persona_max_size_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 82, 'Comprobar valor correcto', 'ADD', true],
    ['persona', 'foto_persona', 83, 'Comprobar formato nombre', 'EDIT', 'foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 84, 'Comprobar formato fichero', 'EDIT', 'foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 85, 'Comprobar tamaño fichero', 'EDIT', 'foto_persona_max_size_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 86, 'Comprobar tamaño minimo', 'EDIT', 'foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 87, 'Comprobar tamaño max nombre', 'EDIT', 'foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 88, 'Comprobar valor correcto', 'EDIT', true],
    ['persona', 'foto_persona', 89, 'Comprobar formato nombre', 'SEARCH', 'foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 90, 'Comprobar formato fichero', 'SEARCH', 'foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 91, 'Comprobar tamaño fichero', 'SEARCH', 'foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 92, 'Comprobar tamaño minimo', 'SEARCH', 'foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 93, 'Comprobar tamaño max nombre', 'SEARCH', 'foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 94, 'Comprobar valor correcto', 'SEARCH', true]

);

let persona_pruebas = Array(
    //--------------------dni--------------------
    ['persona', 'dni', 1, 1, 'ADD', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 2, 2, 'ADD', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 3, 3, 'ADD', { dni: '555555555' }, 'dni_format_ko'],
    ['persona', 'dni', 4, 4, 'ADD', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 5, 5, 'ADD', { dni: '99999999R' }, true],
    ['persona', 'dni', 6, 6, 'EDIT', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 7, 7, 'EDIT', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 8, 8, 'EDIT', { dni: '5555_5555R' }, 'dni_format_ko'],
    ['persona', 'dni', 9, 9, 'EDIT', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 10, 10, 'EDIT', { dni: '99999999R' }, true],
    ['persona', 'dni', 11, 11, 'SEARCH', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 12, 12, 'SEARCH', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 13, 13, 'SEARCH', { dni: '5555_5555R' }, 'dni_format_ko'],
    ['persona', 'dni', 14, 14, 'SEARCH', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 15, 15, 'SEARCH', { dni: '99999999R' }, true],

    //--------------------nombre_persona--------------------
    ['persona', 'nombre_persona', 1, 1, 'ADD', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 2, 2, 'ADD', { nombre_persona: 'a'.repeat(45) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 3, 3, 'ADD', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 4, 4, 'ADD', { nombre_persona: 'javi' }, true],
    ['persona', 'nombre_persona', 5, 5, 'EDIT', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 6, 6, 'EDIT', { nombre_persona: 'a'.repeat(45) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 7, 7, 'EDIT', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 8, 8, 'EDIT', { nombre_persona: 'javi' }, true],
    ['persona', 'nombre_persona', 9, 9, 'SEARCH', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 10, 10, 'SEARCH', { nombre_persona: 'a'.repeat(45) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 11, 11, 'SEARCH', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 12, 12, 'SEARCH', { nombre_persona: 'javi' }, true],


    //--------------------apellidos_persona--------------------
    ['persona', 'apellidos_persona', 1, 1, 'ADD', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 2, 2, 'ADD', { apellidos_persona: 'a'.repeat(45) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 3, 3, 'ADD', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 4, 4, 'ADD', { apellidos_persona: 'javi' }, true],
    ['persona', 'apellidos_persona', 5, 5, 'EDIT', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 6, 6, 'EDIT', { apellidos_persona: 'a'.repeat(45) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 7, 7, 'EDIT', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 8, 8, 'EDIT', { apellidos_persona: 'javi' }, true],
    ['persona', 'apellidos_persona', 9, 9, 'SEARCH', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 10, 10, 'SEARCH', { apellidos_persona: 'a'.repeat(45) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 11, 11, 'SEARCH', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 12, 12, 'SEARCH', { apellidos_persona: 'javi' }, true],

    //--------------------fechaNacimiento_persona--------------------

    //--------------------direccion_persona--------------------
    ['persona', 'direccion_persona', 1, 1, 'ADD', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 2, 2, 'ADD', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 3, 3, 'ADD', { direccion_persona: 'aaaaaa1' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 4, 4, 'ADD', { direccion_persona: 'Calle de la Rosa, 12' }, true],
    ['persona', 'direccion_persona', 5, 5, 'EDIT', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 6, 6, 'EDIT', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 7, 7, 'EDIT', { direccion_persona: 'aaaaaa1' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 8, 8, 'EDIT', { direccion_persona: 'Calle de la Rosa, 12' }, true],
    ['persona', 'direccion_persona', 9, 9, 'SEARCH', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 10, 10, 'SEARCH', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 11, 11, 'SEARCH', { direccion_persona: 'aaaaaa1' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 12, 12, 'SEARCH', { direccion_persona: 'Calle de la Rosa, 12' }, true],
    //--------------------telefono_persona--------------------
    ['persona', 'telefono_persona', 1, 1, 'ADD', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 2, 2, 'ADD', { telefono_persona: '123456789' }, true],
    ['persona', 'telefono_persona', 3, 3, 'EDIT', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 4, 4, 'EDIT', { telefono_persona: '123456789' }, true],
    ['persona', 'telefono_persona', 5, 5, 'SEARCH', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 6, 6, 'SEARCH', { telefono_persona: '123456789' }, true],
    //--------------------email_persona--------------------
    ['persona', 'email_persona', 1, 1, 'ADD', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 2, 2, 'ADD', { email_persona: 'javi@ejemplo.com' }, true],
    ['persona', 'email_persona', 3, 3, 'EDIT', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 4, 4, 'EDIT', { email_persona: 'javi@ejemplo.com' }, true],
    ['persona', 'email_persona', 5, 5, 'SEARCH', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 6, 6, 'SEARCH', { email_persona: 'javi@ejemplo.com' }, true],
    //--------------------nuevo_foto_persona--------------------
    ['persona', 'nuevo_foto_persona', 10, 10, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 11, 11, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 12, 12, 'ADD', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 13, 13, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 14, 14, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 15, 15, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    ['persona', 'nuevo_foto_persona', 16, 16, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 17, 17, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 18, 18, 'EDIT', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 19, 19, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 20, 20, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 21, 21, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    ['persona', 'nuevo_foto_persona', 22, 22, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 23, 23, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 24, 24, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 25, 25, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 26, 26, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 27, 27, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    //--------------------foto persona(ADD EDIT Y SEARCH)--------------------
    ['persona', 'foto_persona', 28, 28, 'ADD', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 29, 29, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 30, 30, 'ADD', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_KO'],
    ['persona', 'foto_persona', 31, 31, 'ADD', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 32, 32, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 33, 33, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    ['persona', 'foto_persona', 34, 34, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 35, 35, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 36, 36, 'EDIT', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_KO'],
    ['persona', 'foto_persona', 37, 37, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 38, 38, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 39, 39, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],

    ['persona', 'foto_persona', 40, 40, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 41, 41, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 42, 42, 'SEARCH', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_KO'],
    ['persona', 'foto_persona', 43, 43, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 44, 44, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 45, 45, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true]
);