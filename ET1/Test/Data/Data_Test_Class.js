class Data_Test {
    
    /**
     * 
     * @param {declaracion de la entidad} entidad
     * @return {void}
     */
    constructor(entidad){

        
        this.actions = ["ADD","EDIT","SEARCH"]

        // se crea la entidad indicada en modo test
        this.entidad = new entidad('test');
        this.dom = new dom;

        this.dom.fillHtmlContent(this.entidad.nombreentidad, 'titulo_nombre_entidad_test');
        // se crea el formulario oculto
        //document.getElementById('form').innerHTML = this.entidad.manual_form_creation();


        // se almacena la variable de definicion de test, pruebas no file y pruebas file
        this.array_def_tests = eval(this.entidad.nombreentidad+'_def_tests');
        this.array_pruebas = eval(this.entidad.nombreentidad+'_pruebas');

        // se invoca la realizacion de pruebas
        this.data_test_class();

    }

    /**
     * @name data_test_data()
     * carga las variables del fichero de test de la entidad y ejecuta las pruebas definidas y presenta el resultado por pantalla
     * @param 
     * @returns {bool}
     */

    data_test_data(){

        var pruebas = this.array_pruebas;
       
        var salidapruebas = [];

        var resultadopruebas = {
            entidad: "",
            campo: '',
            NumDef: '',
            NumPrueba: '',
            descripcion: '',
            accion: '',
            valorprueba: '',
            respuestaesperada: '',
            resultadoprueba:'',
            pruebastatus:''      
        };

        var contadorpruebas = 0;

        // recorro todas las pruebas definidas
        
        for (let i=0;i<pruebas.length;i++){

            resultadopruebas.entidad = pruebas[i][0];
            resultadopruebas.campo = pruebas[i][1];
            resultadopruebas.NumDef = pruebas[i][2];
            resultadopruebas.NumPrueba = pruebas[i][3];
            resultadopruebas.descripcion = '';
            resultadopruebas.accion = pruebas[i][4];

            //mostrar valores de prueba

            const mostrarValores = (valores) => {
                Object.keys(pruebas[i][5]).forEach(clave => {
                    const valor = pruebas[i][5][clave];
                    var salida = '';
                    if (typeof(valor) == 'object'){
                        Object.keys(valor).forEach(laclave => {
                            const estevalor = valor[laclave];
                            salida += laclave+'='+estevalor+'<br>';
                        });
                        resultadopruebas.valorprueba += clave+'={'+salida+'}<br>';
                    }
                    else{
                        resultadopruebas.valorprueba += clave+'='+valor+'<br>';
                    }
                });
            }

            var valores = pruebas[i][5];
            mostrarValores(valores);
                       

            resultadopruebas.respuestaesperada = pruebas[i][6];
        

            // recupero el test correspondiente a la prueba que realizo
            var def = this.devolver_def(resultadopruebas.NumDef);
            resultadopruebas.descripcion = def[4];

            // creo objeto html sino tengo cargado el formulario (para crear cada elemento dinamicamente dentro del form)
            if (def[2] == 'input'){
                var elementoform = this.dom.crearElementoHtml(def[2], 'text', def[1], pruebas[i][5]);
            }
            if (def[2] == 'file'){
                var elementoform = this.dom.crearElementoHtml(def[2], 'file', def[1], pruebas[i][5]);
            }
            
            // se colocan los elementos de muestra de error por si falla la validacion y la entidad intenta mostrarlos
            this.dom.crearElementoHtml('span', '', 'span_error_'+def[1], {});
            this.dom.crearElementoHtml('a', '', 'error_'+def[1], {});
            this.dom.crearElementoHtml('input', 'submit', 'submit_button', {submit_button:0});

            
            //llamo a la funcion de validacion del campo según su accion
            var resultadoprueba = eval('this.entidad.'+resultadopruebas.accion+'_'+resultadopruebas.campo+'_validation()');
            resultadopruebas.resultadoprueba = resultadoprueba;
           

            // compruebo si el resultado del test y la respuesta esperada es la misma
            if (resultadoprueba == resultadopruebas.respuestaesperada){
                resultadopruebas.pruebastatus = 'CORRECTO';
            }
            else{
                resultadopruebas.pruebastatus = 'INCORRECTO';
            }

            salidapruebas[contadorpruebas] = resultadopruebas;
            contadorpruebas++;
            resultadopruebas = 
                {   
                    entidad: '',
                    campo: '',
                    NumDef: '',
                    NumPrueba: '',
                    descripcion: '',
                    accion: '',
                    valorprueba: '',
                    respuestaesperada: '',  
                    resultadoprueba:'',
                    pruebastatus:''      
                };

            
            this.dom.vaciarDiv('form');

        }

        return salidapruebas;
    }


    /**
     *  se comprueban las pruebas definidas contra la clase para la que son definidas.
     *  se ejecutan las pruebas y se envian al metodo showData para su muestra por pantalla
     * 
     *      @return un objeto con un objeto con clase asociativa para cada prueba
     */

    data_test_class(){


        var salidapruebas = this.data_test_data();
         // se invoca la muestra del resultado de las pruebas
        let marcados =	{
					pruebastatus: {value:'INCORRECTO', style:'background-color: red'}
        };
        
        this.dom.showData('IU_Test_result_nofile', salidapruebas, marcados);
       
        return true;

    }

    /**
     * devuelve la definición de test correspondiente al numero proporcionado
     * 
     * @param {number} num_def numero de definición de test
     * @returns {object} el array de definición de test correspondiente al numero de test puesto como parametro
     */

    devolver_def(num_def){

        for (let i=0;i<this.array_def_tests.length;i++){
            if (this.array_def_tests[i][3] == num_def){
                return this.array_def_tests[i];
            }
        }
    }
    

    

    
    
}