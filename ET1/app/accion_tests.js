let accion_def_tests = Array (

    ['accion','id_accion','input',1,'cumple tamaño minimo','min_size','ADD','id_accion_min_size_ko','Tamaño muy corto. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','input',2,'cumple tamaño maximo','max_size','ADD','id_accion_max_size_ko','Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','input',3,'cumple formato','format','ADD','id_accion_format_ko','Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion','id_accion','input',4,'es correcto','valid','ADD',true,'ID acción es correcto'],
    ['accion','id_accion','input',5,'cumple tamaño minimo','min_size','EDIT','id_accion_min_size_ko','Tamaño muy corto. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','input',6,'cumple tamaño maximo','max_size','EDIT','id_accion_max_size_ko','Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','input',7,'cumple formato','format','EDIT','id_accion_format_ko','Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion','id_accion','input',8,'es correcto','valid','EDIT',true,'ID acción es correcto'],
    ['accion','id_accion','input',9,'cumple tamaño maximo','max_size','SEARCH','id_accion_max_size_ko','Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','input',10,'cumple formato','format','SEARCH','id_accion_format_ko','Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion','id_accion','input',11,'es correcto','valid','SEARCH',true,'ID acción es correcto'],

    ['accion','nombre_accion','input',12,'cumple tamaño minimo','min_size','ADD','nombre_accion_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 48 caracteres'],
    ['accion','nombre_accion','input',13,'cumple tamaño maximo','max_size','ADD','nombre_accion_max_size_ko','Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion','nombre_accion','input',14,'cumple formato','format','ADD','nombre_accion_format_ko','Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion','nombre_accion','input',15,'es correcto','valid','ADD',true,'Nombre acción es correcto'],
    ['accion','nombre_accion','input',16,'cumple tamaño minimo','min_size','EDIT','nombre_accion_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 48 caracteres'],
    ['accion','nombre_accion','input',17,'cumple tamaño maximo','max_size','EDIT','nombre_accion_max_size_ko','Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion','nombre_accion','input',18,'cumple formato','format','EDIT','nombre_accion_format_ko','Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion','nombre_accion','input',19,'es correcto','valid','EDIT',true,'Nombre acción es correcto'],
    ['accion','nombre_accion','input',20,'cumple tamaño maximo','max_size','SEARCH','nombre_accion_max_size_ko','Tamaño muy grande. Debe estar entre 5 y 48 caracteres'],
    ['accion','nombre_accion','input',21,'cumple formato','format','SEARCH','nombre_accion_format_ko','Formato invalido. Debe estar entre 5 y 48 caracteres alfabeticos'],
    ['accion','nombre_accion','input',22,'es correcto','valid','SEARCH',true,'Nombre acción es correcto'],

    ['accion','descrip_accion','input',23,'cumple tamaño minimo','min_size','ADD','descrip_accion_min_size_ko','Tamño muy corto. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion','descrip_accion','input',24,'cumple tamaño maximo','max_size','ADD','descrip_accion_max_size_ko','Tamaño muy grande. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion','descrip_accion','input',25,'cumple formato','format','ADD','descrip_accion_format_ko','Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos (ñ, espacio y signos de puntuación son válidos)'],
    ['accion','descrip_accion','input',26,'es correcto','valid','ADD',true,'Descripcion de accion es correcto'],
    ['accion','descrip_accion','input',27,'cumple tamaño minimo','min_size','EDIT','descrip_accion_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion','descrip_accion','input',28,'cumple tamaño maximo','max_size','EDIT','descrip_accion_max_size_ko','Tamaño muy grande. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion','descrip_accion','input',29,'cumple formato','format','EDIT','descrip_accion_format_ko','Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos (ñ, espacio y signos de puntuación son válidos)'],
    ['accion','descrip_accion','input',30,'es correcto','valid','EDIT',true,'Descripcion de accion es correcto'],
    ['accion','descrip_accion','input',31,'cumple tamaño maximo','max_size','SEARCH','descrip_accion_max_size_ko','Tamaño muy grande. Debe estar entre 5 y 200 caracteres (ñ, espacio y signos de puntuación son válidos)'],
    ['accion','descrip_accion','input',32,'cumple formato','format','SEARCH','descrip_accion_format_ko','Formato invalido. Debe estar entre 5 y 200 caracteres alfabeticos (ñ, espacio y signos de puntuación son válidos)'],
    ['accion','descrip_accion','input',33,'es correcto','valid','SEARCH',true,'Descripcion de accion es correcto'],

)

let accion_pruebas = Array (

    ['accion','id_accion',1,1,'ADD',{id_accion: ''},'id_accion_min_size_ko'],
    ['accion','id_accion',2,2,'ADD',{id_accion: '1'.repeat(11)},'id_accion_max_size_ko'],
    ['accion','id_accion',3,3,'ADD',{id_accion: '1a1b1c'},'id_accion_format_ko'],
    ['accion','id_accion',3,4,'ADD',{id_accion: '?-1'},'id_accion_format_ko'],
    ['accion','id_accion',4,5,'ADD',{id_accion: '99999999999'},true],
    ['accion','id_accion',5,6,'EDIT',{id_accion: ''},'id_accion_min_size_ko'],
    ['accion','id_accion',6,7,'EDIT',{id_accion: '11111111111111111111'},'id_accion_max_size_ko'],
    ['accion','id_accion',7,8,'EDIT',{id_accion: '2A2B2c'},'id_accion_format_ko'],
    ['accion','id_accion',8,9,'EDIT',{id_accion: '!-1.,'},'id_accion_format_ko'],
    ['accion','id_accion',9,10,'EDIT',{id_accion: '88888888888'},true],
    ['accion','id_accion',10,11,'SEARCH',{id_accion: }]










)