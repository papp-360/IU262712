// Entidad: funcionalidad
// Definición de tests y pruebas para la validación de los campos del formulario

let funcionalidad_def_tests = Array(
    ['funcionalidad','id_funcionalidad','input',1,'cumple tamaño mínimo','min_size','ADD','id_funcionalidad_min_size_ko','Tamaño muy corto. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad','id_funcionalidad','input',2,'cumple tamaño máximo','max_size','ADD','id_funcionalidad_max_size_ko','Tamaño muy grande. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad','id_funcionalidad','input',3,'cumple formato','format','ADD','id_funcionalidad_format_ko','Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad','id_funcionalidad','input',4,'es correcto','valid','ADD',true,'El identificador de funcionalidad correcto'],

    ['funcionalidad','id_funcionalidad','input',5,'cumple tamaño mínimo','min_size','EDIT','id_funcionalidad_min_size_ko','Tamaño muy corto. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad','id_funcionalidad','input',6,'cumple tamaño máximo','max_size','EDIT','id_funcionalidad_max_size_ko','Tamaño muy grande. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad','id_funcionalidad','input',7,'cumple formato','format','EDIT','id_funcionalidad_format_ko','Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad','id_funcionalidad','input',8,'es correcto','valid','EDIT',true,'El identificador de funcionalidad correcto'],

    ['funcionalidad','id_funcionalidad','input',9,'cumple tamaño maximo','max_size','SEARCH','id_funcionalidad_max_size_ko','Tamaño muy grande. El identificador de funcionalidad debe tener como maximo 11 dígitos'],
    ['funcionalidad','id_funcionalidad','input',10,'cumple formato','format','SEARCH','id_funcionalidad_format_ko','Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad','id_funcionalidad','input',11,'es correcto','valid','SEARCH',true,'El identificador de funcionalidad correcto'],

    ['funcionalidad','nombre_funcionalidad','input',11,'cumple tamaño mínimo','min_size','ADD','nombre_funcionalidad_min_size_ko','Tamaño muy corto. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',12,'cumple tamaño máximo','max_size','ADD','nombre_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',13,'cumple formato','format','ADD','nombre_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], sin espacios ni acentos'],
    ['funcionalidad','nombre_funcionalidad','input',14,'es correcto','valid','ADD',true,'Nombre de funcionalidad correcto'],

    ['funcionalidad','nombre_funcionalidad','input',15,'cumple tamaño mínimo','min_size','EDIT','nombre_funcionalidad_min_size_ko','Tamaño muy corto. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',16,'cumple tamaño máximo','max_size','EDIT','nombre_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',17,'cumple formato','format','EDIT','nombre_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], sin espacios ni acentos'],
    ['funcionalidad','nombre_funcionalidad','input',18,'es correcto','valid','EDIT',true,'Nombre de funcionalidad correcto'],

    ['funcionalidad','nombre_funcionalidad','input',19,'cumple tamaño máximo','max_size','SEARCH','nombre_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener como maximo 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',20,'cumple formato','format','SEARCH','nombre_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], sin espacios ni acentos'],
    ['funcionalidad','nombre_funcionalidad','input',21,'es correcto','valid','SEARCH',true,'Nombre de funcionalidad correcto'],

    ['funcionalidad','descrip_funcionalidad','input',22,'cumple tamaño mínimo','min_size','ADD','descrip_funcionalidad_min_size_ko','Tamaño muy corto. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',23,'cumple tamaño máximo','max_size','ADD','descrip_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',24,'cumple formato','format','ADD','descrip_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], espacios y signos de puntuación'],
    ['funcionalidad','descrip_funcionalidad','input',25,'es correcto','valid','ADD',true,'Descripción de funcionalidad correcta'],

    ['funcionalidad','descrip_funcionalidad','input',26,'cumple tamaño mínimo','min_size','EDIT','descrip_funcionalidad_min_size_ko','Tamaño muy corto. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',27,'cumple tamaño máximo','max_size','EDIT','descrip_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',28,'cumple formato','format','EDIT','descrip_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], espacios y signos de puntuación'],
    ['funcionalidad','descrip_funcionalidad','input',29,'es correcto','valid','EDIT',true,'Descripción de funcionalidad correcta'],

    ['funcionalidad','descrip_funcionalidad','input',30,'cumple tamaño máximo','max_size','SEARCH','descrip_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener como maximo 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',31,'cumple formato','format','SEARCH','descrip_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], espacios y signos de puntuación'],
    ['funcionalidad','descrip_funcionalidad','input',32,'es correcto','valid','SEARCH',true,'Descripción de funcionalidad correcta'],
);

let funcionalidad_pruebas = Array( 
    ['funcionalidad','id_funcionalidad','input',1,1,'ADD',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'],
    ['funcionalidad','id_funcionalidad','input',2,2,'ADD',{id_funcionalidad:'1'.repeat(11)},'id_funcionalidad_max_size_ko'],
    ['funcionalidad','id_funcionalidad','input',3,3,'ADD',{id_funcionalidad:'1234567890a'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad','input',3,4,'ADD',{id_funcionalidad:'123456#7890'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad','input',4,5,'ADD',{id_funcionalidad:'12345678901'},true],

    ['funcionalidad','id_funcionalidad','input',5,6,'EDIT',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'],
    ['funcionalidad','id_funcionalidad','input',6,7,'EDIT',{id_funcionalidad:'1'.repeat(11)},'id_funcionalidad_max_size_ko'],
    ['funcionalidad','id_funcionalidad','input',7,8,'EDIT',{id_funcionalidad:'1234567890a'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad','input',7,9,'EDIT',{id_funcionalidad:'123456#7890'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad','input',8,10,'EDIT',{id_funcionalidad:'12345678901'},true],

    ['funcionalidad','id_funcionalidad','input',9,11,'SEARCH',{id_funcionalidad:'1'.repeat(12)},'id_funcionalidad_max_size_ko'],
    ['funcionalidad','id_funcionalidad','input',10,12,'SEARCH',{id_funcionalidad:'1234567890a'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad','input',10,13,'SEARCH',{id_funcionalidad:'123456#7890'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad','input',11,14,'SEARCH',{id_funcionalidad:'12345678901'},true],

    ['funcionalidad','nombre_funcionalidad','input',11,15,'ADD',{nombre_funcionalidad:'abcd'},'nombre_funcionalidad_min_size_ko'],
    ['funcionalidad','nombre_funcionalidad','input',12,16,'ADD',{nombre_funcionalidad:'a'.repeat(49)},'nombre_funcionalidad_max_size_ko'],
    ['funcionalidad','nombre_funcionalidad','input',13,17,'ADD',{nombre_funcionalidad:'abcd1'},'nombre_funcionalidad_format_ko'],
    ['funcionalidad','nombre_funcionalidad','input',13,18,'ADD',{nombre_funcionalidad:'abcd#'},'nombre_funcionalidad_format_ko'],
    ['funcionalidad','nombre_funcionalidad','input',14,19,'ADD',{nombre_funcionalidad:'abcdñ'},true],




);