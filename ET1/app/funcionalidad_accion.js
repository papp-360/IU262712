let funcionalidad_accion_def_tests = Array(
    ['funcionalidad','id_funcionalidad','select',1,'cumple tamaño mínimo','min_size','ADD','id_funcionalidad_min_size_ko','Tamaño muy corto. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad','id_funcionalidad','select',2,'cumple tamaño máximo','max_size','ADD','id_funcionalidad_max_size_ko','Tamaño muy grande. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad','id_funcionalidad','select',3,'cumple formato','format','ADD','id_funcionalidad_format_ko','Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad','id_funcionalidad','select',4,'es correcto','valid','ADD',true,'El identificador de funcionalidad correcto'],

    ['funcionalidad','id_funcionalidad','select',5,'cumple tamaño mínimo','min_size','EDIT','id_funcionalidad_min_size_ko','Tamaño muy corto. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad','id_funcionalidad','select',6,'cumple tamaño máximo','max_size','EDIT','id_funcionalidad_max_size_ko','Tamaño muy grande. El identificador de funcionalidad debe tener entre 1 y 11 dígitos'],
    ['funcionalidad','id_funcionalidad','select',7,'cumple formato','format','EDIT','id_funcionalidad_format_ko','Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad','id_funcionalidad','select',8,'es correcto','valid','EDIT',true,'El identificador de funcionalidad correcto'],

    ['funcionalidad','id_funcionalidad','select',9,'cumple tamaño maximo','max_size','SEARCH','id_funcionalidad_max_size_ko','Tamaño muy grande. El identificador de funcionalidad debe tener como maximo 11 dígitos'],
    ['funcionalidad','id_funcionalidad','select',10,'cumple formato','format','SEARCH','id_funcionalidad_format_ko','Formato inválido. El identificador de funcionalidad solo admite dígitos numéricos'],
    ['funcionalidad','id_funcionalidad','select',11,'es correcto','valid','SEARCH',true,'El identificador de funcionalidad correcto'],

    ['accion','id_accion','select',12,'cumple tamaño minimo','min_size','ADD','id_accion_min_size_ko','Tamaño muy corto. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','select',13,'cumple tamaño maximo','max_size','ADD','id_accion_max_size_ko','Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','select',14,'cumple formato','format','ADD','id_accion_format_ko','Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion','id_accion','select',15,'es correcto','valid','ADD',true,'ID acción es correcto'],
    

    ['accion','id_accion','select',16,'cumple tamaño minimo','min_size','EDIT','id_accion_min_size_ko','Tamaño muy corto. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','select',17,'cumple tamaño maximo','max_size','EDIT','id_accion_max_size_ko','Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','select',18,'cumple formato','format','EDIT','id_accion_format_ko','Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion','id_accion','select',19,'es correcto','valid','EDIT',true,'ID acción es correcto'],
    

    ['accion','id_accion','select',20,'cumple tamaño maximo','max_size','SEARCH','id_accion_max_size_ko','Tamaño muy grande. Debe estar entre 1 y 11 caracteres'],
    ['accion','id_accion','select',21,'cumple formato','format','SEARCH','id_accion_format_ko','Formato invalido. Debe estar entre 1 y 11 caracteres numéricos'],
    ['accion','id_accion','select',22,'es correcto','valid','SEARCH',true,'ID acción es correcto'],

)

let funcionalidad_accion_pruebas = Array (

    ['funcionalidad','id_funcionalidad',1,1,'ADD',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'],
    ['funcionalidad','id_funcionalidad',2,2,'ADD',{id_funcionalidad:'1'.repeat(11)},'id_funcionalidad_max_size_ko'],
    ['funcionalidad','id_funcionalidad',3,3,'ADD',{id_funcionalidad:'1234567890a'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad',3,4,'ADD',{id_funcionalidad:'123456#7890'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad',4,5,'ADD',{id_funcionalidad:'12345678901'},true],

    ['funcionalidad','id_funcionalidad',5,6,'EDIT',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'],
    ['funcionalidad','id_funcionalidad',6,7,'EDIT',{id_funcionalidad:'1'.repeat(11)},'id_funcionalidad_max_size_ko'],
    ['funcionalidad','id_funcionalidad',7,8,'EDIT',{id_funcionalidad:'1234567890a'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad',7,9,'EDIT',{id_funcionalidad:'123456#7890'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad',8,10,'EDIT',{id_funcionalidad:'12345678901'},true],

    ['funcionalidad','id_funcionalidad',9,11,'SEARCH',{id_funcionalidad:'1'.repeat(12)},'id_funcionalidad_max_size_ko'],
    ['funcionalidad','id_funcionalidad',10,12,'SEARCH',{id_funcionalidad:'1234567890a'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad',10,13,'SEARCH',{id_funcionalidad:'123456#7890'},'id_funcionalidad_format_ko'],
    ['funcionalidad','id_funcionalidad',11,14,'SEARCH',{id_funcionalidad:'12345678901'},true],

   
    ['accion','id_accion',12,15,'ADD',{id_accion: ''},'id_accion_min_size_ko'],
    ['accion','id_accion',13,16,'ADD',{id_accion: '1'.repeat(11)},'id_accion_max_size_ko'],
    ['accion','id_accion',14,17,'ADD',{id_accion: '1a1b1c'},'id_accion_format_ko'],
    ['accion','id_accion',14,18,'ADD',{id_accion: '?-1'},'id_accion_format_ko'],
    ['accion','id_accion',15,19,'ADD',{id_accion: '99999999999'},true],
    
  
    ['accion','id_accion',16,20,'EDIT',{id_accion: ''},'id_accion_min_size_ko'],
    ['accion','id_accion',17,21,'EDIT',{id_accion: '11111111111111111111'},'id_accion_max_size_ko'],
    ['accion','id_accion',18,22,'EDIT',{id_accion: '2A2B2c'},'id_accion_format_ko'],
    ['accion','id_accion',18,23,'EDIT',{id_accion: '!-1.,'},'id_accion_format_ko'],
    ['accion','id_accion',19,24,'EDIT',{id_accion: '88888888888'},true],
    
   
    ['accion','id_accion',20,25,'SEARCH',{id_accion: '1'.repeat(11)},'id_accion_max_size_ko'],
    ['accion','id_accion',21,26,'SEARCH',{id_accion: 'a'.repeat(11)},'id_accion_format_ko'],
    ['accion','id_accion',21,27,'SEARCH',{id_accion: '1ab'},'id_accion_format_ko'],
    ['accion','id_accion',22,28,'SEARCH',{id_accion: '123456789'},true],


)