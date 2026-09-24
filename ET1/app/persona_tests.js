let persona_def_tests = Array(
    //campos no ficheros
    Array('persona','nombre_persona','input',1,'cumple tamaño minimo','min_size','ADD','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',2,'cumple tamaño maximo','max_size','ADD','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona','nombre_persona','input',3,'cumple formato','format','ADD','nombre_persona_format_ko','Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'),
    Array('persona','nombre_persona','input',4,'es correcto','valid','ADD',true,'Nombre persona correcto'),
    ['persona','nombre_persona','input',5,'cumple tamaño minimo','max_size','EDIT','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 2 y 45 caracteres'],
    ['persona','nombre_persona','input',6,'cumple tamaño maximo','max_size','EDIT','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 2 y 45 caracteres'],
    ['persona','nombre_persona','input',7,'cumple formato','format','EDIT','nombre_persona_format_ko','Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos'],
    ['persona','nombre_persona','input',8,'es correcto','valid','EDIT',true,'Nombre persona correcto'],
    Array('persona','nuevo_foto_persona','file',9,'existe fichero en foto_persona','exist_file','ADD','foto_persona_exist_file_ko','No existe foto. Debe subir una foto en jpg'),
    Array('persona','nuevo_foto_persona','file',10,'foto persona formato incorrecto','format_name_file','ADD','foto_persona_format_name_file_ko','nombre de foto incorrecto. Deben ser alfabeticos sin acentos'),
    Array('persona','nuevo_foto_persona','file',11,'foto persona tamaño excesivo','max_size_file','ADD','foto_persona_max_size_file_ko','Tamaño fichero foto excesivo. Deben ser menor de 20000 bytes'),
);

let persona_pruebas = Array(
    Array('persona','nombre_persona',1,1,'ADD',{nombre_persona:'a'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',2,2,'ADD',{nombre_persona:'a'.repeat(50)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',3,3,'ADD',{nombre_persona:'aaaaaa1'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',4,4,'ADD',{nombre_persona:'javi'},true),
    ['persona','nombre_persona',5,5,'EDIT',{nombre_persona:'a'},'nombre_persona_min_size_ko'],
    ['persona','nombre_persona',6,6,'EDIT',{nombre_persona:'a'.repeat(50)},'nombre_persona_max_size_ko'],
    ['persona','nombre_persona',7,7,'EDIT',{nombre_persona:'aaaaaa1'},'nombre_persona_format_ko'],
    ['persona','nombre_persona',8,8,'EDIT',{nombre_persona:'javi'},true],
    Array('persona','nuevo_foto_persona',9,9,'ADD',{},'nuevo_foto_persona_not_exist_file_ko'),
    ['persona','nuevo_foto_persona',10,10,'ADD',{nuevo_foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'nuevo_foto_persona_format_name_file_ko'],
    ['persona','nuevo_foto_persona',11,11,'ADD',{nuevo_foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'nuevo_foto_persona_max_size_file_ko'],
    
    



);

