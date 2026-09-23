class dom extends dom_table {

	constructor(){
		super()
	}

	/**
	 * pone visible block el elemento con el id proporcionado
	 * @name show_element
	 * @param {string} id id de un elemento html
	 */
	show_element(id){
		document.getElementById(id).style.display = 'block';
	}

	/**
	 	Modifica el aspecto del campo en función de si tiene un error. Borde rojo y mensaje de error si tiene error
		@name mostrar_error_campo
		@param {string} id es el id del campo del formulario al cual se va mostrar el error 
		@param {string} codigoerror es el código del error a mostrar para ese campo del formulario
		
	*/
	mostrar_error_campo(id, codigoerror){
		document.getElementById('span_error_'+id).style.display = 'inline';
		document.getElementById('error_'+id).innerHTML = codigoerror;
		document.getElementById(id).style.borderBlockColor = 'red';
		document.getElementById('submit_button').focus();
	}
	/**
	 	Modifica el aspecto del campo en función de si no tiene un error. Borde verde si correcto
		
		@param {string} id es el id del campo del formulario al cual se va mostrar el error 
		@param {string} codigoerror es el código del error a mostrar para ese campo del formulario
		
	*/
	mostrar_exito_campo(id){
		document.getElementById('span_error_'+id).style.display = 'none';
		document.getElementById('error_'+id).innerHTML = '';
		document.getElementById(id).style.borderBlockColor = 'green';
	}

	/**
		coloca el contenido html en un contenedor visible inline 
		@param {string} contenido html
		@param {string} id del contenedor donde colocar el contenido
	*/
	fillHtmlContent(contenido, idcontenedor){
		document.getElementById(idcontenedor).innerHTML = contenido;
		document.getElementById(idcontenedor).style.display = 'inline';
	}
	/**
		coloca el contenido html en el div 
		@param {string} contenido html
		@param {string} id del div donde colocar el contenido
	*/
	fillform(formdata, idform){
		document.getElementById(idform).innerHTML = formdata;
		document.getElementById(idform).style.display = 'block';
	}

	/**
	 * crea un elemento del DOM y lo devuelve
	 * 
	 * @param {string} tag html a crear
	 * @param {string} tipo del tag si corresponde 
	 * @param {string} nombrecampo name e id del tag html a crear
	 * @param {object} valores objeto con los valores a colocar en el tad
	 * @returns el objeto dom creado
	 */
	crearElementoHtml(tag, tipo, nombrecampo, valores){

		switch (tag){
			case 'input':
				//si tiene mas de un valor, creo y relleno todos los campos con sus valores y devuelvo el primero
				//let counter = 0;
				for (var clave in valores){
					
					var nombrecampo = clave;
					var valorcampo = valores[nombrecampo];
					var element = this.createInput(nombrecampo, tipo);
					this.fillElementValue(element, valorcampo);
					this.colocarelemento(element, 'form');
					/*if (counter == 0){
						var elementToReturn = element;
					}
					counter++;*/

				}
				
				//return elementToReturn;
				break;
			case 'file':
				element = this.createInput(nombrecampo, tipo);
				this.fillElementFile(element, valores);
				//return element;
				this.colocarelemento(element, 'form');
				break;
			default: // este lo uso para crear los span y los a de los errores sin valor
				element = document.createElement(tag);
				element.type = tipo;
				element.id = nombrecampo;
				this.fillElementValue(element, '');
				this.colocarelemento(element, 'form');
				return element;
				break;	
		}

	}

	/**
	 * 
	 * crea un elemento input proporcionandole su nombre y su tipo
	 * @name createInput
	 * @param {string} nombre nombre el elemento input, se usa tambien como id 
	 * @param {string} tipo del input
	 * @returns elemento input creado
	 */

	createInput(nombre, tipo){
		var newElement = document.createElement('input');
		newElement.type = tipo;
		newElement.id = nombre;
		newElement.name = nombre;
		return newElement;
	}

	/**
	 * rellena el valor de un objeto simple del DOM
	 * @name fillElementValue
	 * @param {object} elemento se le pasa el objeto del DOM 
	 * @param {string} valor valor a colocar en el objeto DOM
	 */

	fillElementValue(elemento, valor){
		elemento.setAttribute('value', valor);
	}

	/**
	 * Rellena el valor de un objeto file para ponerselo a un elemento DOM input file
	 * @name fillElementFile
	 * @param {*} elemento elemento input file DOM
	 * @param {*} valores del fichero que se incluye en el elemento.
	 */
	fillElementFile(elemento, valores){
	
		// creo objeto html sino tengo cargado el formulario (para crear cada elemento dinamicamente dentro del form)
        // construyo objeto file y relleno valor para prueba
        if (Object.values(valores).length > 0){
                              
			var fichero = Object.keys(valores)[0];			
			
			var nombrefichero = valores[fichero].format_name_file;
			var tipomime = valores[fichero].type_file;
			var maxsize = valores[fichero].max_size_file;   

			var file = new File([new ArrayBuffer(maxsize)], nombrefichero ,{type:tipomime, webkitRelativePath:"C:\\fakepath\\"+nombrefichero});
					
			// Create a data transfer object. Similar to what you get from a `drop` event as `event.dataTransfer`
			const dataTransfer = new DataTransfer();

			// Add your file to the file list of the object
			dataTransfer.items.add(file);

			// Save the file list to a new variable
			const fileList = dataTransfer.files;

			// Set your input `files` to the file list
			elemento.files = fileList;

        }
		else{
			const dataTransfer = new DataTransfer();
			const fileList = dataTransfer.files;
			elemento.files = fileList;
		}
	
	}

	/**
	 * vacia el contenido de un div
	 * @name vaciarDiv
	 * @param {string} iddiv id del un contenedor div
	 */
	vaciarDiv(iddiv){
		document.getElementById(iddiv).innerHTML = '';
	}

	/**
	 * coloca el elemento en el contenedor con el div indicado
	 * @name colocarelemento
	 * @param {object} elemento elemento DOM a colocar 
	 * @param {string} divdestino id del contenedor donde se va colocar el elemento
	 */
	colocarelemento(elemento, divdestino){
		document.getElementById(divdestino).append(elemento);
	}

}

	/**
	 * if id and mode switch the state of display of html element(id) to 'none' or 'block'/'inline'
	 * if 'on'/'off' force html element (id) to show or hide
	 * 
	 * 
	 * @param {string} id  id of html element to show/hide
	 * @param {string} mode 'block'/'inline'
	 * @param {string} ponerestado 'on'/'off'
	 */

	function switch_display_mode(id,mode, ponerestado=null){

	if (ponerestado == 'on'){
		document.getElementById(id).style.display = mode;
	}
	else{
		if (ponerestado == 'off'){
		document.getElementById(id).style.display = 'none';
		}
		else{ 
			if (document.getElementById(id).style.display == 'none'){
				document.getElementById(id).style.display = mode;
			}
			else{
				document.getElementById(id).style.display = 'none';
			}
		}
	}
}


