// Definicion de tests: usuario_def_tests

var usuario_def_tests = [
  // --------- DNI --------------------

	// ----------- DNI ADD ----------    
    
    ["usuario","dni","input", 1, "Validar formato dni en ADD", "ADD", "dni_format_KO", "El Formato del DNI debe ser 8 numeros y una letra"],
    ["usuario","dni","input", 2, "Validar letra dni en ADD (modulo 23)", "ADD", "dni_letra_KO", "La letra del DNI no se corresponde con los numeros"],
	["usuario","dni","input", 3, "Validar dni correcto en ADD", "ADD", true, "DNI correcto"],
    
    // ------------- DNI EDIT ---------------
    ["usuario","dni","input", 4, "Validar formato dni en EDIT", "EDIT", "dni_format_KO", "El Formato del DNI debe ser 8 numeros y una letra"],
	["usuario","dni","input", 5, "Validar letra dni en EDIT (modulo 23)", "EDIT", "dni_letra_KO", "La letra del DNI no se corresponde con los numeros"],
	["usuario","dni","input", 6, "Validar dni correcto en EDIT", "EDIT", true, "DNI correcto en EDIT"],
	
    // ---------- DNI SEARCH ------------------
	["usuario","dni","input", 7, "Validar formato dni en SEARCH", "SEARCH", "dni_format_KO", "Formato de DNI no valido en SEARCH"],
	["usuario","dni","input", 8, "Validar dni correcto en SEARCH", "SEARCH", true, "Busqueda por DNI correcta"],
        
     // Atributo: usuario (min 5, max 45, alfabetico sin ñ ni acentos)
	
    // --- usuario ADD ------

	["usuario", "usuario", "input", 9, "Validar min size usuario en ADD (min 5)", "ADD", "usuario_min_size_KO", "El nombre de usuario es demasiado corto (minimo 5)"],
	["usuario", "usuario", "input", 10, "Validar max size usuario en ADD (max 45)", "ADD", "usuario_max_size_KO", "El nombre de usuario es demasiado largo (maximo 45)"],
	["usuario", "usuario", "input", 11, "Validar format usuario en ADD (solo letras sin acentos ni ñ)", "ADD", "usuario_format_KO", "El usuario solo permite caracteres alfabeticos sin acentos ni ñ"],
	["usuario", "usuario", "input", 12, "Validar usuario correcto en ADD", "ADD", true, "Usuario correcto"],

// ---- usuario EDIT -------
	["usuario", "usuario", "input", 13, "Validar min size usuario en EDIT (min 5)", "EDIT", "usuario_min_size_KO", "El nombre de usuario es demasiado corto en EDIT (minimo 5)"],
	["usuario", "usuario", "input", 14, "Validar max size usuario en EDIT (max 45)", "EDIT", "usuario_max_size_KO", "El nombre de usuario es demasiado largo en EDIT (maximo 45)"],
	["usuario", "usuario", "input", 15, "Validar format usuario en EDIT", "EDIT", "usuario_format_KO", "Caracteres no permitidos en usuario en EDIT"],
	["usuario", "usuario", "input", 16, "Validar usuario correcto en EDIT", "EDIT", true, "Usuario correcto en EDIT"],

// ---- usuario Search --------
	["usuario", "usuario", "input", 17, "Validar max size usuario en SEARCH (max 45)", "SEARCH", "usuario_max_size_KO", "El usuario excede el maximo permitido en SEARCH"],
	["usuario", "usuario", "input", 18, "Validar format usuario en SEARCH", "SEARCH", "usuario_format_KO", "Caracteres no permitidos en SEARCH"],
	["usuario", "usuario", "input", 19, "Validar usuario correcto en SEARCH", "SEARCH", true, "Busqueda de usuario correcta"],
    
    //-------------------------------------------------------
    // Atributo: contrasena (min 8, max 45, alfabetico sin ñ ni acento)
	//-----------------------------------------------------
	
// ---- contrasena ADD -----

	["usuario", "contrasena", "input", 20, "Validar min size contrasena en ADD (min 8)", "ADD", "contrasena_min_size_KO", "La contrasena es demasiado corta (minimo 8)"],
	["usuario", "contrasena", "input", 21, "Validar max size contrasena en ADD (max 45)", "ADD", "contrasena_max_size_KO", "La contrasena es demasiado larga (maximo 45)"],
	["usuario", "contrasena", "input", 22, "Validar format contrasena en ADD (solo letras sin acentos ni n)", "ADD", "contrasena_format_KO", "La contrasena solo permite caracteres alfabeticos sin acentos ni n"],
	["usuario", "contrasena", "input", 23, "Validar contrasena correcta en ADD", "ADD", true, "Contrasena correcta"], 

// ---- contrasena EDIT -----

  ["usuario", "contrasena", "input", 24, "Validar min size contrasena en EDIT (min 8)", "EDIT", "contrasena_min_size_KO", "La contrasena es demasiado corta en EDIT (minimo 8)"],
  ["usuario", "contrasena", "input", 25, "Validar max size contrasena en EDIT (max 45)", "EDIT", "contrasena_max_size_KO", "La contrasena es demasiado larga en EDIT (maximo 45)"],
  ["usuario", "contrasena", "input", 26, "Validar format contrasena en EDIT", "EDIT", "contrasena_format_KO", "Caracteres no permitidos en la contrasena en EDIT"],
  ["usuario", "contrasena", "input", 27, "Validar contrasena correcta en EDIT", "EDIT", true, "Contrasena correcta en EDIT"],

//------------------------------------------------------------
// Atributo: id_rol (numerico min 1 max digitos, elemento select)
//------------------------------------------------------------

// ----- id_rol ADD -------
	["usuario", "id_rol", "select", 28, "Validar format numerico id_rol en ADD", "ADD", "id_rol_format_KO", "El identificador de rol debe ser numerico"],
	["usuario", "id_rol", "select", 29, "Validar max size id_rol en ADD (max 11 digitos)", "ADD", "id_rol_max_size_KO", "El identificador de rol no puede superar 11 digitos"],
	["usuario", "id_rol", "select", 30, "Validar id_rol correcto en ADD", "ADD", true, "Rol correcto"],

// ----- id_rol EDIT ------
	["usuario", "id_rol", "select", 31, "Validar format numerico id_rol en EDIT", "EDIT", "id_rol_format_KO", "El rol seleccionado no es numerico en EDIT"],
	["usuario", "id_rol", "select", 32, "Validar max size id_rol en EDIT (max 11 digitos)", "EDIT", "id_rol_max_size_KO", "El rol excede el tamano maximo en EDIT"],
	["usuario", "id_rol", "select", 33, "Validar id_rol correcto en EDIT", "EDIT", true, "Rol correcto en EDIT"],

// ------ id_rol SEARCH ------
	["usuario", "id_rol", "select", 34, "Validar format numerico id_rol en SEARCH", "SEARCH", "id_rol_format_KO", "Rol invalido en SEARCH"],
	["usuario", "id_rol", "select", 35, "Validar id_rol correcto en SEARCH", "SEARCH", true, "Busqueda por rol correcta"]
];


// ===============================================================
// BATERIA DE PRUEBAS: usuario_pruebas
// ===============================================================

var usuario_pruebas = [
	// --- DNI ADD ---

// Test1: dni_format_KO (longitud incorrecta o caracteres raros)
	["usuario", "dni", 1, 1, "ADD", {"dni": "1234567"}, "dni_format_KO"],
	["usuario", "dni", 1, 2, "ADD", {"dni": "1234567890"}, "dni_format_KO"],
	["usuario", "dni", 1, 3, "ADD", {"dni": "12345678-A"}, "dni_format_KO"],
	["usuario", "dni", 1, 4, "ADD", {"dni": "53912456L"}, true],

  // Test2: dni_letra_KO (8 dígitos y 1 letra, pero letra errónea según módulo 23)
	["usuario", "dni", 2, 5, "ADD", {"dni": "53912456Z"}, "dni_letra_KO"],
	["usuario", "dni", 2, 6, "ADD", {"dni": "53912456L"}, true],

  // Test3: dni correcto en ADD
	["usuario", "dni", 3, 7, "ADD", {"dni": "53912456L"}, true],
	["usuario", "dni", 3, 8, "ADD", {"dni": ""}, "dni_format_KO"],

  // --- DNI EDIT ---
	["usuario", "dni", 4, 9, "EDIT", {"dni": "1234"}, "dni_format_KO"],
	["usuario", "dni", 4, 10, "EDIT", {"dni": "53912456L"}, true],
	["usuario", "dni", 5, 11, "EDIT", {"dni": "53912456Z"}, "dni_letra_KO"],
	["usuario", "dni", 5, 12, "EDIT", {"dni": "53912456L"}, true],
	["usuario", "dni", 6, 13, "EDIT", {"dni": "53912456L"}, true],

  // --- DNI SEARCH ---
	["usuario", "dni", 7, 14, "SEARCH", {"dni": "123456789A_LARGO"}, "dni_format_KO"],
	["usuario", "dni", 7, 15, "SEARCH", {"dni": "53912456L"}, true],
	["usuario", "dni", 8, 16, "SEARCH", {"dni": ""}, true], // en SEARCH dejar vacío es legal
	["usuario", "dni", 8, 17, "SEARCH", {"dni": "53912456L"}, true],

  // --- USUARIO ADD ---
  // Test9: usuario_min_size_KO (min 5)
	["usuario", "usuario", 9, 18, "ADD", {"usuario": "a"}, "usuario_min_size_KO"],
	["usuario", "usuario", 9, 19, "ADD", {"usuario": "abcd"}, "usuario_min_size_KO"], // frontera inf - 1
	["usuario", "usuario", 9, 20, "ADD", {"usuario": "abcde"}, true],                 // frontera inf (5)

  // Test10: usuario_max_size_KO (max 45)
	["usuario", "usuario", 10, 21, "ADD", {"usuario": "a".repeat(46)}, "usuario_max_size_KO"], // frontera sup + 1
	["usuario", "usuario", 10, 22, "ADD", {"usuario": "a".repeat(45)}, true],                 // frontera sup (45)

  // Test11: usuario_format_KO (alfabético sin ñ ni acentos)
	["usuario", "usuario", 11, 23, "ADD", {"usuario": "usuariño"}, "usuario_format_KO"],
	["usuario", "usuario", 11, 24, "ADD", {"usuario": "usuarió"}, "usuario_format_KO"],
	["usuario", "usuario", 11, 25, "ADD", {"usuario": "user123"}, "usuario_format_KO"],
	["usuario", "usuario", 11, 26, "ADD", {"usuario": "user space"}, "usuario_format_KO"],
	["usuario", "usuario", 11, 27, "ADD", {"usuario": "validuser"}, true],

  // Test12: usuario correcto en ADD
	["usuario", "usuario", 12, 28, "ADD", {"usuario": "gestorvalido"}, true],
	["usuario", "usuario", 12, 29, "ADD", {"usuario": ""}, "usuario_min_size_KO"],

  // --- USUARIO EDIT ---
// Test13-16: usuario en EDIT
	["usuario", "usuario", 13, 30, "EDIT", {"usuario": "test"}, "usuario_min_size_KO"],
	["usuario", "usuario", 13, 31, "EDIT", {"usuario": "abcde"}, true],
	["usuario", "usuario", 14, 32, "EDIT", {"usuario": "a".repeat(46)}, "usuario_max_size_KO"],
	["usuario", "usuario", 14, 33, "EDIT", {"usuario": "a".repeat(45)}, true],
	["usuario", "usuario", 15, 34, "EDIT", {"usuario": "user_edit!"}, "usuario_format_KO"],
	["usuario", "usuario", 15, 35, "EDIT", {"usuario": "usuariomod"}, true],
	["usuario", "usuario", 16, 36, "EDIT", {"usuario": "usuarioeditadook"}, true],

  // --- USUARIO SEARCH ---
  // Test17-19: usuario en SEARCH
	["usuario", "usuario", 17, 37, "SEARCH", {"usuario": "a".repeat(46)}, "usuario_max_size_KO"],
	["usuario", "usuario", 17, 38, "SEARCH", {"usuario": "a".repeat(45)}, true],
	["usuario", "usuario", 18, 39, "SEARCH", {"usuario": "user#1"}, "usuario_format_KO"],
	["usuario", "usuario", 18, 40, "SEARCH", {"usuario": "user"}, true],
	["usuario", "usuario", 19, 41, "SEARCH", {"usuario": ""}, true],
	["usuario", "usuario", 19, 42, "SEARCH", {"usuario": "admin"}, true],

  // --- CONTRASEÑA ADD ---
  // Test20: contrasena_min_size_KO (min 8)
	["usuario", "contrasena", 20, 43, "ADD", {"contrasena": "corta"}, "contrasena_min_size_KO"],
	["usuario", "contrasena", 20, 44, "ADD", {"contrasena": "abcdefg"}, "contrasena_min_size_KO"], // 7 chars
	["usuario", "contrasena", 20, 45, "ADD", {"contrasena": "abcdefgh"}, true],                     // 8 chars (frontera)

  // Test21: contrasena_max_size_KO (max 45)
	["usuario", "contrasena", 21, 46, "ADD", {"contrasena": "p".repeat(46)}, "contrasena_max_size_KO"],
	["usuario", "contrasena", 21, 47, "ADD", {"contrasena": "p".repeat(45)}, true],

  // Test22: contrasena_format_KO (alfabético sin acentos ni ñ)
	["usuario", "contrasena", 22, 48, "ADD", {"contrasena": "passw\u00f1ord"}, "contrasena_format_KO"],
	["usuario", "contrasena", 22, 49, "ADD", {"contrasena": "passw\u00f3rd"}, "contrasena_format_KO"],
	["usuario", "contrasena", 22, 50, "ADD", {"contrasena": "pass1234"}, "contrasena_format_KO"],
	["usuario", "contrasena", 22, 51, "ADD", {"contrasena": "pass word"}, "contrasena_format_KO"],
	["usuario", "contrasena", 22, 52, "ADD", {"contrasena": "passwordsegura"}, true],

  // Test23: contrasena correcta en ADD
	["usuario", "contrasena", 23, 53, "ADD", {"contrasena": "clavedificil"}, true],
	["usuario", "contrasena", 23, 54, "ADD", {"contrasena": ""}, "contrasena_min_size_KO"],

  // --- CONTRASEÑA EDIT ---
 // Test24-27: contrasena en EDIT
	["usuario", "contrasena", 24, 55, "EDIT", {"contrasena": "pass"}, "contrasena_min_size_KO"],
	["usuario", "contrasena", 24, 56, "EDIT", {"contrasena": "abcdefgh"}, true],
	["usuario", "contrasena", 25, 57, "EDIT", {"contrasena": "p".repeat(46)}, "contrasena_max_size_KO"],
	["usuario", "contrasena", 25, 58, "EDIT", {"contrasena": "p".repeat(45)}, true],
	["usuario", "contrasena", 26, 59, "EDIT", {"contrasena": "passw@rd"}, "contrasena_format_KO"],
	["usuario", "contrasena", 26, 60, "EDIT", {"contrasena": "nuevapassword"}, true],
	["usuario", "contrasena", 27, 61, "EDIT", {"contrasena": "modificadacorrecta"}, true],

  // --- ID_ROL ADD ---
  // Test28: id_rol_format_KO
	["usuario", "id_rol", 28, 62, "ADD", {"id_rol": "abc"}, "id_rol_format_KO"],
 	["usuario", "id_rol", 28, 63, "ADD", {"id_rol": "12a"}, "id_rol_format_KO"],
	["usuario", "id_rol", 28, 64, "ADD", {"id_rol": "1"}, true],

  // Test29: id_rol_max_size_KO (max 11 dígitos)
	["usuario", "id_rol", 29, 65, "ADD", {"id_rol": "123456789012"}, "id_rol_max_size_KO"], // 12 dígitos
	["usuario", "id_rol", 29, 66, "ADD", {"id_rol": "12345678901"}, true],                   // 11 dígitos
	["usuario", "id_rol", 29, 67, "ADD", {"id_rol": "1"}, true],

  // Test30: id_rol correcto en ADD
	["usuario", "id_rol", 30, 68, "ADD", {"id_rol": "2"}, true],
	["usuario", "id_rol", 30, 69, "ADD", {"id_rol": ""}, "id_rol_format_KO"],

  // --- ID_ROL EDIT ---
  // Test31-33: id_rol en EDIT
	["usuario", "id_rol", 31, 70, "EDIT", {"id_rol": "texto"}, "id_rol_format_KO"],
	["usuario", "id_rol", 31, 71, "EDIT", {"id_rol": "3"}, true],
	["usuario", "id_rol", 32, 72, "EDIT", {"id_rol": "123456789012"}, "id_rol_max_size_KO"],
 	["usuario", "id_rol", 32, 73, "EDIT", {"id_rol": "12345678901"}, true],
	["usuario", "id_rol", 33, 74, "EDIT", {"id_rol": "1"}, true],

  // --- ID_ROL SEARCH ---
  // Test34-35: id_rol en SEARCH
	["usuario", "id_rol", 34, 75, "SEARCH", {"id_rol": "rolErroneo"}, "id_rol_format_KO"],
	["usuario", "id_rol", 34, 76, "SEARCH", {"id_rol": "1"}, true],
	["usuario", "id_rol", 35, 77, "SEARCH", {"id_rol": ""}, true], // select en blanco en búsqueda
	["usuario", "id_rol", 35, 78, "SEARCH", {"id_rol": "2"}, true]
];
