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
    ['persona', 'apellidos_persona', 'input', 21, 'cumple formato', 'format', 'ADD', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 22, 'es correcto', 'valid', 'ADD', true, 'Apellidos correctos'],
    ['persona', 'apellidos_persona', 'input', 23, 'cumple tamaño minimo', 'min_size', 'EDIT', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 24, 'cumple tamaño maximo', 'max_size', 'EDIT', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 25, 'cumple formato', 'format', 'EDIT', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 26, 'es correcto', 'valid', 'EDIT', true, 'Apellidos corrects'],
    ['persona', 'apellidos_persona', 'input', 27, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 28, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 29, 'cumple formato', 'format', 'SEARCH', 'apellidos_persona_format_ko', 'Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona', 'apellidos_persona', 'input', 30, 'es correcto', 'valid', 'SEARCH', true, 'Apellidos corrects'],
 
 
    //--------------------fechaNacimiento_persona--------------------
    ['persona', 'fechaNacimiento_persona', 'input', 31, 'cumple formato', 'format', 'ADD', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 32, 'fecha posible', 'personalized', 'ADD', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 33, 'fecha anterior a la actual', 'personalized', 'ADD', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 34, 'es correcto', 'valid', 'ADD', true, 'Fecha nacimiento correcta'],
    ['persona', 'fechaNacimiento_persona', 'input', 35, 'cumple formato', 'format', 'EDIT', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 36, 'fecha posible', 'personalized', 'EDIT', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 37, 'fecha anterior a la actual', 'personalized', 'EDIT', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 38, 'es correcto', 'valid', 'EDIT', true, 'Fecha nacimiento correcta'],
    ['persona', 'fechaNacimiento_persona', 'input', 39, 'cumple formato', 'format', 'SEARCH', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 40, 'fecha posible', 'personalized', 'SEARCH', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha de nacimiento debe ser una fecha válida'],
    ['persona', 'fechaNacimiento_persona', 'input', 41, 'fecha anterior a la actual', 'personalized', 'SEARCH', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 42, 'es correcto', 'valid', 'SEARCH', true, 'Fecha nacimiento correcta'],
 
    //--------------------direccion_persona--------------------
    ['persona', 'direccion_persona', 'input', 43, 'cumple tamaño minimo', 'min_size', 'ADD', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 44, 'cumple tamaño maximo', 'max_size', 'ADD', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 45, 'cumple formato', 'format', 'ADD', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con  acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 46, 'es correcto', 'valid', 'ADD', true, 'Direccion correcta'],
    ['persona', 'direccion_persona', 'input', 47, 'cumple tamaño minimo', 'min_size', 'EDIT', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 48, 'cumple tamaño maximo', 'max_size', 'EDIT', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 49, 'cumple formato', 'format', 'EDIT', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con  acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 50, 'es correcto', 'valid', 'EDIT', true, 'Direccion correcta'],
    ['persona', 'direccion_persona', 'input', 51, 'cumple tamaño minimo', 'min_size', 'SEARCH', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 52, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 53, 'cumple formato', 'format', 'SEARCH', 'direccion_persona_format_ko', 'Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con  acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona', 'direccion_persona', 'input', 54, 'es correcto', 'valid', 'SEARCH', true, 'Direccion correcta'],
 
 
    //--------------------telefono_persona--------------------
    ['persona', 'telefono_persona', 'input', 55, 'cumple formato', 'format', 'ADD', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 56, 'es correcto', 'valid', 'ADD', true, 'Teléfono correcto'],
    ['persona', 'telefono_persona', 'input', 57, 'cumple formato', 'format', 'EDIT', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 58, 'es correcto', 'valid', 'EDIT', true, 'Teléfono correcto'],
    ['persona', 'telefono_persona', 'input', 59, 'cumple formato', 'format', 'SEARCH', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 números'],
    ['persona', 'telefono_persona', 'input', 60, 'es correcto', 'valid', 'SEARCH', true, 'Teléfono correcto'],
 
 
    //--------------------email_persona--------------------
    ['persona', 'email_persona', 'input', 61, 'cumple formato', 'format', 'ADD', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 62, 'es correcto', 'valid', 'ADD', true, 'Email correcto'],
    ['persona', 'email_persona', 'input', 63, 'cumple formato', 'format', 'EDIT', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 64, 'es correcto', 'valid', 'EDIT', true, 'Email correcto'],
    ['persona', 'email_persona', 'input', 65, 'cumple formato', 'format', 'SEARCH', 'email_persona_format_ko', 'Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona', 'email_persona', 'input', 66, 'es correcto', 'valid', 'SEARCH', true, 'Email correcto'],
 
 
    //---------------------nuevo foto persona--------------------
    ['persona', 'nuevo_foto_persona', 67, 'Comprobar formato nombre', 'ADD', 'nuevo_foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 68, 'Comprobar formato fichero', 'ADD', 'nuevo_foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 69, 'Comprobar tamaño fichero', 'ADD', 'nuevo_foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 70, 'Comprobar tamaño minimo', 'ADD', 'nuevo_foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 71, 'Comprobar tamaño max nombre', 'ADD', 'nuevo_foto_persona_max_size_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 72, 'Comprobar valor correcto', 'ADD', true],
    ['persona', 'nuevo_foto_persona', 73, 'Comprobar formato nombre', 'EDIT', 'nuevo_foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 74, 'Comprobar formato fichero', 'EDIT', 'nuevo_foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 75, 'Comprobar tamaño fichero', 'EDIT', 'nuevo_foto_persona_max_size_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 76, 'Comprobar tamaño minimo', 'EDIT', 'nuevo_foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 77, 'Comprobar tamaño max nombre', 'EDIT', 'nuevo_foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 78, 'Comprobar valor correcto', 'EDIT', true],
    ['persona', 'nuevo_foto_persona', 79, 'Comprobar formato nombre', 'SEARCH', 'nuevo_foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 80, 'Comprobar formato fichero', 'SEARCH', 'nuevo_foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 81, 'Comprobar tamaño fichero', 'SEARCH', 'nuevo_foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 82, 'Comprobar tamaño minimo', 'SEARCH', 'nuevo_foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 83, 'Comprobar tamaño max nombre', 'SEARCH', 'nuevo_foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 84, 'Comprobar valor correcto', 'SEARCH', true],
 
    //--------------------foto persona(ADD EDIT Y SEARCH)--------------------
    ['persona', 'foto_persona', 85, 'Comprobar formato nombre', 'ADD', 'foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 86, 'Comprobar formato fichero', 'ADD', 'foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 87, 'Comprobar tamaño fichero', 'ADD', 'foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 88, 'Comprobar tamaño minimo', 'ADD', 'foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 89, 'Comprobar tamaño max nombre', 'ADD', 'foto_persona_max_size_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 90, 'Comprobar valor correcto', 'ADD', true],
    ['persona', 'foto_persona', 91, 'Comprobar formato nombre', 'EDIT', 'foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 92, 'Comprobar formato fichero', 'EDIT', 'foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 93, 'Comprobar tamaño fichero', 'EDIT', 'foto_persona_max_size_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 94, 'Comprobar tamaño minimo', 'EDIT', 'foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 95, 'Comprobar tamaño max nombre', 'EDIT', 'foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 96, 'Comprobar valor correcto', 'EDIT', true],
    ['persona', 'foto_persona', 97, 'Comprobar formato nombre', 'SEARCH', 'foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 98, 'Comprobar formato fichero', 'SEARCH', 'foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 99, 'Comprobar tamaño fichero', 'SEARCH', 'foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 100, 'Comprobar tamaño minimo', 'SEARCH', 'foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 101, 'Comprobar tamaño max nombre', 'SEARCH', 'foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min5 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'foto_persona', 102, 'Comprobar valor correcto', 'SEARCH', true]
 
);

let persona_pruebas = Array(
    //--------------------dni--------------------
    ['persona', 'dni', 1, 1, 'ADD', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 2, 1, 'ADD', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 3, 1, 'ADD', { dni: '555555555' }, 'dni_format_ko'],
    ['persona', 'dni', 4, 1, 'ADD', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 5, 2, 'ADD', { dni: '99999999R' }, true],
    ['persona', 'dni', 6, 3, 'EDIT', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 7, 3, 'EDIT', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 8, 3, 'EDIT', { dni: '5555_5555R' }, 'dni_format_ko'],
    ['persona', 'dni', 9, 3, 'EDIT', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 10, 4, 'EDIT', { dni: '99999999R' }, true],
    ['persona', 'dni', 11, 5, 'SEARCH', { dni: '333333333' }, 'dni_format_ko'],
    ['persona', 'dni', 12, 5, 'SEARCH', { dni: '4444444' }, 'dni_format_ko'],
    ['persona', 'dni', 13, 5, 'SEARCH', { dni: '5555_5555R' }, 'dni_format_ko'],
    ['persona', 'dni', 14, 5, 'SEARCH', { dni: 'A55555555' }, 'dni_format_ko'],
    ['persona', 'dni', 15, 6, 'SEARCH', { dni: '99999999R' }, true],
 
    //--------------------nombre_persona--------------------
    ['persona', 'nombre_persona', 16, 7, 'ADD', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 17, 8, 'ADD', { nombre_persona: 'a'.repeat(45) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 18, 9, 'ADD', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 19, 10, 'ADD', { nombre_persona: 'javi' }, true],
    ['persona', 'nombre_persona', 20, 11, 'EDIT', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 21, 12, 'EDIT', { nombre_persona: 'a'.repeat(45) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 22, 13, 'EDIT', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 23, 14, 'EDIT', { nombre_persona: 'javi' }, true],
    ['persona', 'nombre_persona', 24, 15, 'SEARCH', { nombre_persona: 'a' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 25, 16, 'SEARCH', { nombre_persona: 'a'.repeat(45) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 26, 17, 'SEARCH', { nombre_persona: 'aaaaaa1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 27, 18, 'SEARCH', { nombre_persona: 'javi' }, true],
 
 
    //--------------------apellidos_persona--------------------
    ['persona', 'apellidos_persona', 28, 19, 'ADD', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 29, 20, 'ADD', { apellidos_persona: 'a'.repeat(45) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 30, 21, 'ADD', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 31, 22, 'ADD', { apellidos_persona: 'javi' }, true],
    ['persona', 'apellidos_persona', 32, 23, 'EDIT', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 33, 24, 'EDIT', { apellidos_persona: 'a'.repeat(45) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 34, 25, 'EDIT', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 35, 26, 'EDIT', { apellidos_persona: 'javi' }, true],
    ['persona', 'apellidos_persona', 36, 27, 'SEARCH', { apellidos_persona: 'a' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 37, 28, 'SEARCH', { apellidos_persona: 'a'.repeat(45) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 38, 29, 'SEARCH', { apellidos_persona: 'aaaaaa1' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 39, 30, 'SEARCH', { apellidos_persona: 'javi' }, true],
 
    //--------------------fechaNacimiento_persona--------------------
 
    //--------------------direccion_persona--------------------
    ['persona', 'direccion_persona', 40, 43, 'ADD', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 41, 44, 'ADD', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 42, 45, 'ADD', { direccion_persona: 'aaaaaa1' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 43, 46, 'ADD', { direccion_persona: 'Calle de la Rosa, 12' }, true],
    ['persona', 'direccion_persona', 44, 47, 'EDIT', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 45, 48, 'EDIT', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 46, 49, 'EDIT', { direccion_persona: 'aaaaaa1' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 47, 50, 'EDIT', { direccion_persona: 'Calle de la Rosa, 12' }, true],
    ['persona', 'direccion_persona', 48, 51, 'SEARCH', { direccion_persona: 'a' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 49, 52, 'SEARCH', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 50, 53, 'SEARCH', { direccion_persona: 'aaaaaa1' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 51, 54, 'SEARCH', { direccion_persona: 'Calle de la Rosa, 12' }, true],
    //--------------------telefono_persona--------------------
    ['persona', 'telefono_persona', 52, 55, 'ADD', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 53, 56, 'ADD', { telefono_persona: '123456789' }, true],
    ['persona', 'telefono_persona', 54, 57, 'EDIT', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 55, 58, 'EDIT', { telefono_persona: '123456789' }, true],
    ['persona', 'telefono_persona', 56, 59, 'SEARCH', { telefono_persona: '12345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 57, 60, 'SEARCH', { telefono_persona: '123456789' }, true],
    //--------------------email_persona--------------------
    ['persona', 'email_persona', 58, 61, 'ADD', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 59, 62, 'ADD', { email_persona: 'javi@ejemplo.com' }, true],
    ['persona', 'email_persona', 60, 63, 'EDIT', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 61, 64, 'EDIT', { email_persona: 'javi@ejemplo.com' }, true],
    ['persona', 'email_persona', 62, 65, 'SEARCH', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 63, 66, 'SEARCH', { email_persona: 'javi@ejemplo.com' }, true],
    //--------------------nuevo_foto_persona--------------------
    ['persona', 'nuevo_foto_persona', 64, 67, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 65, 69, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 66, 70, 'ADD', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 67, 67, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 68, 68, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 69, 72, 'ADD', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],
 
    ['persona', 'nuevo_foto_persona', 70, 73, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 71, 75, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 72, 76, 'EDIT', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 73, 73, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 74, 74, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 75, 78, 'EDIT', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],
 
    ['persona', 'nuevo_foto_persona', 76, 79, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 77, 81, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 78, 82, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_min_size_ko'],
    ['persona', 'nuevo_foto_persona', 79, 79, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 80, 80, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 81, 84, 'SEARCH', { nuevo_foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],
 
    //--------------------foto persona(ADD EDIT Y SEARCH)--------------------
    ['persona', 'foto_persona', 82, 85, 'ADD', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 83, 87, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 84, 88, 'ADD', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_KO'],
    ['persona', 'foto_persona', 85, 85, 'ADD', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 86, 86, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 87, 90, 'ADD', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],
 
    ['persona', 'foto_persona', 88, 91, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 89, 93, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 90, 94, 'EDIT', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_KO'],
    ['persona', 'foto_persona', 91, 91, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 92, 92, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 93, 96, 'EDIT', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true],
 
    ['persona', 'foto_persona', 94, 97, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 200 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 95, 99, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000000000 } }, 'foto_persona_max_size_file_ko'],
    ['persona', 'foto_persona', 96, 100, 'SEARCH', { foto_persona: { format_name_file: 'a.jp', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_min_size_KO'],
    ['persona', 'foto_persona', 97, 97, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg00.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, 'foto_persona_format_name_file_ko'],
    ['persona', 'foto_persona', 98, 98, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'pdf', max_size_file: 2000 } }, 'foto_persona_type_file_ko'],
    ['persona', 'foto_persona', 99, 102, 'SEARCH', { foto_persona: { format_name_file: 'nombrejpg.jpg', type_file: 'image/jpeg', max_size_file: 2000 } }, true]
);