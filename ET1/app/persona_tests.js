let persona_def_tests = Array(
    //campos no ficheros
    //--------------------dni--------------------
    ['persona','dni','input',1,'cumple formato','format','ADD','dni_format_ko','Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona','dni','input',2,'es correcto','valid','ADD',true,'DNI correcto'],
    ['persona','dni','input',3,'cumple formato','format','EDIT','dni_format_ko','Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona','dni','input',4,'es correcto','valid','EDIT',true,'DNI correcto'],
    ['persona','dni','input',5,'cumple formato','format','SEARCH','dni_format_ko','Formato inválido. Debe contener 8 números y una letra al final'],
    ['persona','dni','input',6,'es correcto','valid','SEARCH',true,'DNI correcto'],

    //--------------------nombre_persona--------------------
    ['persona','nombre_persona','input',7,'cumple tamaño minimo','min_size','ADD','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona','nombre_persona','input',8,'cumple tamaño maximo','max_size','ADD','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona','nombre_persona','input',9,'cumple formato','format','ADD','nombre_persona_format_ko','Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona','nombre_persona','input',10,'es correcto','valid','ADD',true,'Nombre persona correcto'],
    ['persona','nombre_persona','input',11,'cumple tamaño minimo','min_size','EDIT','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona','nombre_persona','input',12,'cumple tamaño maximo','max_size','EDIT','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona','nombre_persona','input',13,'cumple formato','format','EDIT','nombre_persona_format_ko','Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona','nombre_persona','input',14,'es correcto','valid','EDIT',true,'Nombre persona correcto'],
    ['persona','nombre_persona','input',15,'cumple tamaño minimo','min_size','SEARCH','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona','nombre_persona','input',16,'cumple tamaño maximo','max_size','SEARCH','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona','nombre_persona','input',17,'cumple formato','format','SEARCH','nombre_persona_format_ko','Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona','nombre_persona','input',18,'es correcto','valid','SEARCH',true,'Nombre persona correcto'],

    //--------------------apellidos_persona--------------------
    ['persona','apellidos_persona','input',19,'cumple tamaño minimo','min_size','ADD','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona','apellidos_persona','input',20,'cumple tamaño maximo','max_size','ADD','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona','apellidos_persona','input',13,'cumple formato','format','ADD','apellidos_persona_format_ko','Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona','apellidos_persona','input',14,'es correcto','valid','ADD',true,'Apellidos correctos'],
    ['persona','apellidos_persona','input',15,'cumple tamaño minimo','min_size','EDIT','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona','apellidos_persona','input',16,'cumple tamaño maximo','max_size','EDIT','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona','apellidos_persona','input',17,'cumple formato','format','EDIT','apellidos_persona_format_ko','Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona','apellidos_persona','input',18,'es correcto','valid','EDIT',true,'Apellidos corrects'],
    ['persona','apellidos_persona','input',19,'cumple tamaño minimo','min_size','SEARCH','apellidos_persona_min_size_ko','Tamaño muy corto. Debe estar entre 3 y 100 caracteres'],
    ['persona','apellidos_persona','input',20,'cumple tamaño maximo','max_size','SEARCH','apellidos_persona_max_size_ko','Tamaño muy grande. Debe estar entre 3 y 100 caracteres'],
    ['persona','apellidos_persona','input',21,'cumple formato','format','SEARCH','apellidos_persona_format_ko','Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos'],
    ['persona','apellidos_persona','input',22,'es correcto','valid','SEARCH',true,'Apellidos corrects'],


    //--------------------fechaNacimiento_persona--------------------
    ['persona','fechaNacimiento_persona','input',19,'cumple formato','format','ADD','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona','fechaNacimiento_persona','input',20,'fecha posible','personalized','ADD','fechaNacimiento_persona_fecha_valida_ko','Fecha nacimiento correcta'],
    []
    ['persona','fechaNacimiento_persona','input',20,'es correcto','valid','ADD',true,'Fecha nacimiento correcta'],
    ['persona','fechaNacimiento_persona','input',21,'cumple formato','format','EDIT','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona','fechaNacimiento_persona','input',22,'es correcto','valid','EDIT',true,'Fecha nacimiento correcta'],
    ['persona','fechaNacimiento_persona','input',23,'cumple formato','format','SEARCH','fechaNacimiento_persona_format_ko','Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona','fechaNacimiento_persona','input',24,'es correcto','valid','SEARCH',true,'Fecha nacimiento correcta'],

    //--------------------direccion_persona--------------------
    ['persona','direccion_persona','input',11,'cumple tamaño minimo','min_size','ADD','direccion_persona_min_size_ko','Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona','direccion_persona','input',12,'cumple tamaño maximo','max_size','ADD','direccion_persona_max_size_ko','Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona','direccion_persona','input',17,'cumple formato','format','ADD','direccion_persona_format_ko','Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con  acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona','direccion_persona','input',14,'es correcto','valid','ADD',true,'Direccion correcta'],
    ['persona','direccion_persona','input',11,'cumple tamaño minimo','min_size','EDIT','direccion_persona_min_size_ko','Tamaño muy corto. Debe estar entre 10 y 200 caracteres'],
    ['persona','direccion_persona','input',12,'cumple tamaño maximo','max_size','EDIT','direccion_persona_max_size_ko','Tamaño muy grande. Debe estar entre 10 y 200 caracteres'],
    ['persona','direccion_persona','input',17,'cumple formato','format','EDIT','direccion_persona_format_ko','Formato inválido. Debe estar entre 10 y 200 caracteres alfabéticos con  acentos, puntos, guiones, punto y coma, espacio y /'],
    ['persona','direccion_persona','input',14,'es correcto','valid','EDIT',true,'Direccion correcta'],


    //--------------------telefono_persona--------------------
    ['persona','telefono_persona','input',17,'cumple formato','format','ADD','telefono_persona_format_ko','Formato inválido. Deben ser 9 números'],
    ['persona','telefono_persona','input',14,'es correcto','valid','ADD',true,'Teléfono correcto'],
    ['persona','telefono_persona','input',17,'cumple formato','format','EDIT','telefono_persona_format_ko','Formato inválido. Deben ser 9 números'],
    ['persona','telefono_persona','input',14,'es correcto','valid','EDIT',true,'Teléfono correcto'],

    
    //--------------------email_persona--------------------
    ['persona','email_persona','input',17,'cumple formato','format','ADD','email_persona_format_ko','Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona','email_persona','input',14,'es correcto','valid','ADD',true,'Email correcto'],
    ['persona','email_persona','input',17,'cumple formato','format','EDIT','email_persona_format_ko','Formato inválido. Debe seguir nombredeusuario@dominio.com'],
    ['persona','email_persona','input',14,'es correcto','valid','EDIT',true,'Email correcto'],

    //---------------------nuevo foto persona--------------------
   
    ['persona', 'nuevo_foto_persona', 16, 'Comprobar formato nombre', 'ADD', 'nuevo_foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 17, 'Comprobar formato fichero', 'ADD', 'nuevo_foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 18, 'Comprobar tamaño fichero', 'ADD', 'nuevo_foto_persona_max_size_file_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 19, 'Comprobar tamaño minimo', 'ADD', 'nuevo_foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 20, 'Comprobar tamaño max nombre', 'ADD', 'nuevo_foto_persona_max_size_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 21, 'Comprobar valor correcto', 'ADD', true],
    ['persona', 'nuevo_foto_persona', 22, 'Comprobar formato nombre', 'EDIT', 'nuevo_foto_persona_format_name_file_KO', 'El formato del nombre es incorrecto. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 23, 'Comprobar formato fichero', 'EDIT', 'nuevo_foto_persona_type_file_KO', 'El formato del archivo es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 24, 'Comprobar tamaño fichero', 'EDIT', 'nuevo_foto_persona_max_size_KO', 'El tamaño del archivo fotoacto es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 25, 'Comprobar tamaño minimo', 'EDIT', 'nuevo_foto_persona_min_size_KO', 'El campo fotoacto es demasiado pequeño. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 26, 'Comprobar tamaño max nombre', 'EDIT', 'nuevo_foto_persona_max_size_name_KO', 'El tamaño del nombre es demasiado grande. Debe ser una imagen con alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min3 Max 15. Solo jpg o jpeg y tamaño de fichero menor de 2.000.000 bytes'],
    ['persona', 'nuevo_foto_persona', 27, 'Comprobar valor correcto', 'EDIT', true],
    //--------------------foto persona(SEARCH)--------------------
    

);

let persona_pruebas = Array(
    //--------------------dni--------------------
    ['persona','dni',1,1,'ADD',{dni:'333333333'},'dni_format_ko'],
    ['persona','dni',2,2,'ADD',{dni:'4444444'},'dni_format_ko'],
    ['persona','dni',3,3,'ADD',{dni:'555555555'},'dni_format_ko'],
    ['persona','dni',4,4,'ADD',{dni:'A55555555'},'dni_format_ko'],
    ['persona','dni',5,5,'ADD',{dni:'99999999R'},true],

    //--------------------nombre_persona--------------------
    ['persona','nombre_persona',1,1,'ADD',{nombre_persona:'a'},'nombre_persona_min_size_ko'],
    ['persona','nombre_persona',2,2,'ADD',{nombre_persona:'a'.repeat(45)},'nombre_persona_max_size_ko'],
    ['persona','nombre_persona',3,3,'ADD',{nombre_persona:'aaaaaa1'},'nombre_persona_format_ko'],
    ['persona','nombre_persona',4,4,'ADD',{nombre_persona:'javi'},true],
    ['persona','nombre_persona',5,5,'EDIT',{nombre_persona:'a'},'nombre_persona_min_size_ko'],
    ['persona','nombre_persona',6,6,'EDIT',{nombre_persona:'a'.repeat(45)},'nombre_persona_max_size_ko'],
    ['persona','nombre_persona',7,7,'EDIT',{nombre_persona:'aaaaaa1'},'nombre_persona_format_ko'],
    ['persona','nombre_persona',8,8,'EDIT',{nombre_persona:'javi'},true],
    
    //--------------------apellidos_persona--------------------
    ['persona','apellidos_persona',1,1,'ADD',{apellidos_persona:'a'},'apellidos_persona_min_size_ko'],
    ['persona','apellidos_persona',2,2,'ADD',{apellidos_persona:'a'.repeat(45)},'apellidos_persona_max_size_ko'],
    ['persona','apellidos_persona',3,3,'ADD',{apellidos_persona:'aaaaaa1'},'apellidos_persona_format_ko'],
    ['persona','apellidos_persona',4,4,'ADD',{apellidos_persona:'javi'},true],
    ['persona','apellidos_persona',5,5,'EDIT',{apellidos_persona:'a'},'apellidos_persona_min_size_ko'],
    ['persona','apellidos_persona',6,6,'EDIT',{apellidos_persona:'a'.repeat(45)},'apellidos_persona_max_size_ko'],
    ['persona','apellidos_persona',7,7,'EDIT',{apellidos_persona:'aaaaaa1'},'apellidos_persona_format_ko'],
    ['persona','apellidos_persona',8,8,'EDIT',{apellidos_persona:'javi'},true],

    //--------------------fechaNacimiento_persona--------------------
    
    //--------------------direccion_persona--------------------
    ['persona','direccion_persona',1,1,'ADD',{direccion_persona:'a'},'direccion_persona_min_size_ko'],
    ['persona','direccion_persona',2,2,'ADD',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'],
    ['persona','direccion_persona',3,3,'ADD',{direccion_persona:'aaaaaa1'},'direccion_persona_format_ko'],
    ['persona','direccion_persona',4,4,'ADD',{direccion_persona:'Calle de la Rosa, 12'},true],
    ['persona','direccion_persona',5,5,'EDIT',{direccion_persona:'a'},'direccion_persona_min_size_ko'],
    ['persona','direccion_persona',6,6,'EDIT',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'],
    ['persona','direccion_persona',7,7,'EDIT',{direccion_persona:'aaaaaa1'},'direccion_persona_format_ko'],
    ['persona','direccion_persona',8,8,'EDIT',{direccion_persona:'Calle de la Rosa, 12'},true],
    //--------------------telefono_persona--------------------
    ['persona','telefono_persona',1,1,'ADD',{telefono_persona:'12345678'},'telefono_persona_format_ko'],
    ['persona','telefono_persona',2,2,'ADD',{telefono_persona:'123456789'},true],
    ['persona','telefono_persona',3,3,'EDIT',{telefono_persona:'12345678'},'telefono_persona_format_ko'],
    ['persona','telefono_persona',4,4,'EDIT',{telefono_persona:'123456789'},true],
    //--------------------email_persona--------------------
    ['persona','email_persona',1,1,'ADD',{email_persona:'javi'},'email_persona_format_ko'],
    ['persona','email_persona',2,2,'ADD',{email_persona:'javi@ejemplo.com'},true],
    ['persona','email_persona',3,3,'EDIT',{email_persona:'javi'},'email_persona_format_ko'],
    ['persona','email_persona',4,4,'EDIT',{email_persona:'javi@ejemplo.com'},true],
    //--------------------nuevo_foto_persona--------------------
    ['persona','nuevo_foto_persona',9,9,'ADD',{},'nuevo_foto_persona_not_exist_file_ko'],
    ['persona','nuevo_foto_persona',10,10,'ADD',{nuevo_foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'nuevo_foto_persona_format_name_file_ko'],
    ['persona','nuevo_foto_persona',11,11,'ADD',{nuevo_foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'nuevo_foto_persona_max_size_file_ko'],
    
    



);

