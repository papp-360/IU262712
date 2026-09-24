// Definicion de tests: usuario_def_tests

var usuario_def_tests = [
  // --------- DNI --------------------

	// ----------- DNI ADD ----------    
    
    ["usuario","dni","input", 1 "Validar formato dni en ADD", "ADD", "dni_format_KO", "Formato de DNI no valido"],
    ["usuario","dni","input", 2 "Validar letra dni en ADD (modulo 23)", "ADD", "dni_letra_KO", "La letra del DNI no se corresponde con los numeros"],
	["usuario","dni","input", 3 "Validar dni correcto en ADD", "ADD", true, "DNI correcto"],
    
    // ------------- DNI EDIT ---------------
    ["usuario","dni","input", 4 "Validar formato dni en EDIT", "EDIT", "dni_format_KO", "Formato de DNI no valido"],
	["usuario","dni","input", 5 "Validar letra dni en EDIT (modulo 23)", "EDIT", "dni_letra_KO", "La letra del DNI no se corresponde con los numeros"],
    ["usuario","dni","input", 6 "Validar dni correcto en EDIT", "EDIT", true, "DNI correcto en EDIT"],
];
