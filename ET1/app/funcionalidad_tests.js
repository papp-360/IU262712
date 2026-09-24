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
    ['funcionalidad','nombre_funcionalidad','input',9,'cumple tamaño mínimo','min_size','ADD','nombre_funcionalidad_min_size_ko','Tamaño muy corto. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',10,'cumple tamaño máximo','max_size','ADD','nombre_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',11,'cumple formato','format','ADD','nombre_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], sin espacios ni acentos'],
    ['funcionalidad','nombre_funcionalidad','input',12,'es correcto','valid','ADD',true,'Nombre de funcionalidad correcto'],
    ['funcionalidad','nombre_funcionalidad','input',13,'cumple tamaño mínimo','min_size','EDIT','nombre_funcionalidad_min_size_ko','Tamaño muy corto. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',14,'cumple tamaño máximo','max_size','EDIT','nombre_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad','nombre_funcionalidad','input',15,'cumple formato','format','EDIT','nombre_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], sin espacios ni acentos'],
    ['funcionalidad','nombre_funcionalidad','input',16,'es correcto','valid','EDIT',true,'Nombre de funcionalidad correcto'],
    ['funcionalidad','descrip_funcionalidad','input',17,'cumple tamaño mínimo','min_size','ADD','descrip_funcionalidad_min_size_ko','Tamaño muy corto. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',18,'cumple tamaño máximo','max_size','ADD','descrip_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',19,'cumple formato','format','ADD','descrip_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], espacios y signos de puntuación'],
    ['funcionalidad','descrip_funcionalidad','input',20,'es correcto','valid','ADD',true,'Descripción de funcionalidad correcta'],
    ['funcionalidad','descrip_funcionalidad','input',21,'cumple tamaño mínimo','min_size','EDIT','descrip_funcionalidad_min_size_ko','Tamaño muy corto. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',22,'cumple tamaño máximo','max_size','EDIT','descrip_funcionalidad_max_size_ko','Tamaño muy grande. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad','descrip_funcionalidad','input',23,'cumple formato','format','EDIT','descrip_funcionalidad_format_ko','Formato inválido. Solo se permiten letras (incluida la ñ], espacios y signos de puntuación'],
    ['funcionalidad','descrip_funcionalidad','input',24,'es correcto','valid','EDIT',true,'Descripción de funcionalidad correcta']
);

let funcionalidad_pruebas = Array( 





);