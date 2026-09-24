class persona extends Validations {
  constructor(esTest) {
    super();
    this.dom = new dom();
    this.nombreentidad = "persona";

    if (esTest == "test") {
    } else {
      this.dom.fillform(this.manual_form_creation(), "IU_form");
    }
  }

  /**
   * creates a variable with a form for a particular entity menu
   * @returns a variable with the form definition
   */
  manual_form_creation() {
    var form_content = `
			<form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad.ADD_submit_persona() === 'object') {return false} else {return true};">

			<label class="label_dni">dni</label>
			<input type='text' id='dni' name='dni' onblur=" return entidad.ADD_dni_validation();"></input>
			<span id="span_error_dni"><a id="error_dni"></a></span>
			<br>
			
			<label class="label_nombre_persona">Nombre de pila</label>
			<input type='text' id='nombre_persona' name='nombre_persona' onblur=" return entidad.ADD_nombre_persona_validation();"></input>
			<span id="span_error_nombre_persona" ><a id="error_nombre_persona"></a></span>
			<br>
			
			<label class="label_apellidos_persona">apellidos</label>
			<input type='text' id='apellidos_persona' name='apellidos_persona'></input>
			<span id="span_error_apellidos_persona" ><a id="error_apellidos_persona"></a></span>
			<br>
			
			<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
			<input type='text' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
			<span id="span_error_fechaNacimiento_persona" ><a id="error_fechaNacimiento_persona"></a></span>
			
			<br>
			<label class="label_direccion_persona">Dirección Postal</label>
			<textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona'></textarea>
			<span id="span_error_direccion_persona" ><a id="error_direccion_persona"></a></span>
			<br>

			<label class="label_telefono_persona">Teléfono Persona</label>
			<input type='text' id='telefono_persona' name='telefono_persona'></input>
			<span id="span_error_telefono_persona" ><a id="error_telefono_persona"></a></span>
			
			<br>
			<label class="label_email_persona">Correo Electronico</label>
			<input type='text' id='email_persona' name='email_persona'></input>
			<span id="span_error_email_persona" ><a id="error_email_persona"></a></span>

			<br>
			<label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
			<input type='text' id='foto_persona' name='foto_persona'></input>
			<span id="span_error_foto_persona"><a id="error_foto_persona"></a></span>
			<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
			<span id="span_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`;
    return form_content;
  }

  /**********************************************************************************************
		fields validations for ADD
	***********************************************************************************************/

  /** 
		
		@return	{string} Error code of field value (fieldname_validationfunction_ko) or
		@return {bool} true due the field value is correct

	*/
  ADD_dni_validation() {
    if (!this.min_size("dni", 9)) {
      this.dom.mostrar_error_campo("dni", "dni_min_size_ko");
      return "dni_min_size_ko";
    }
    if (!this.max_size("dni", 9)) {
      this.dom.mostrar_error_campo("dni", "dni_max_size_ko");
      return "dni_max_size_ko";
    }

    if (!this.format("dni", "^[0-9]{8}[A-Z]")) {
      this.dom.mostrar_error_campo("dni", "dni_format_ko");
      return "dni_format_ko";
    }

    this.dom.mostrar_exito_campo("dni");
    return true;
  }

  /**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_ko) 
			or
			{bool} true due the field value is correct

	*/

  ADD_nombre_persona_validation() {
    if (!this.min_size("nombre_persona", 4)) {
      this.dom.mostrar_error_campo(
        "nombre_persona",
        "nombre_persona_min_size_ko",
      );
      return "nombre_persona_min_size_ko";
    }
    if (!this.max_size("nombre_persona", 15)) {
      this.dom.mostrar_error_campo(
        "nombre_persona",
        "nombre_persona_max_size_ko",
      );
      return "nombre_persona_max_size_ko";
    }
    // allowed format aA to zZ letter
    if (!this.format("nombre_persona", "^[A-Za-z]*$")) {
      this.dom.mostrar_error_campo(
        "nombre_persona",
        "nombre_persona_format_ko",
      );
      return "nombre_persona_format_ko";
    }
    this.dom.mostrar_exito_campo("nombre_persona");
    return true;
  }

  ADD_nuevo_foto_persona_validation() {
    if (!this.exist_file("nuevo_foto_persona")) {
      this.dom.mostrar_error_campo(
        "nuevo_foto_persona",
        "nuevo_foto_persona_empty_file_ko",
      );
      return "nuevo_foto_persona_not_exist_file_ko";
    }
    if (!this.max_size_file("nuevo_foto_persona", 2000)) {
      this.dom.mostrar_error_campo(
        "nuevo_foto_persona",
        "nuevo_foto_persona_max_size_file_ko",
      );
      return "nuevo_foto_persona_max_size_file_ko";
    }
    if (!this.type_file("nuevo_foto_persona", ["image/jpeg"])) {
      this.dom.mostrar_error_campo(
        "nuevo_foto_persona",
        "nuevo_foto_persona_type_file_ko",
      );
      return "nuevo_foto_persona_type_file_ko";
    }
    if (!this.format_name_file("nuevo_foto_persona", "^[a-zA-Z]*$")) {
      this.dom.mostrar_error_campo(
        "nuevo_foto_persona",
        "nuevo_foto_persona_format_name_file_ko",
      );
      return "nuevo_foto_persona_format_name_file_ko";
    }
    this.dom.mostrar_exito_campo("nuevo_foto_persona");
    return true;
  }

  /**
	 
		@param
		@return	{bool} true if all fields validations are ok or 
		@return {object} object with the ids of elements and error code if field validation is not ok and true if field validation is ok
	*/
  ADD_submit_persona() {
    // object to store de fields validations
    var set_result = {};

    // store in key (id element) value (result of field validation method)
    set_result.dni = this.ADD_dni_validation();
    set_result.nombre_persona = this.ADD_nombre_persona_validation();
    set_result.nuevo_foto_persona = this.ADD_nuevo_foto_persona_validation();

    // calculate combination of all field validations
    let result =
      set_result.dni &
      set_result.nombre_persona &
      set_result.nuevo_foto_persona;

    // convert the result to boolean
    result = Boolean(result);

    // if boolean and true return true
    if (typeof result === "boolean" && result == true) {
      return result;
    } // if not boolean or false return the object with id element as key and code error as value
    else {
      return set_result;
    }
  }

  EDIT_nombre_persona_validation() {
    return this.ADD_nombre_persona_validation();
  }

  EDIT_nuevo_foto_persona_validation() {
    if (!this.not_exist_file("nuevo_foto_persona")) {
      this.dom.mostrar_exito_campo("nuevo_foto_persona");
      return true;
    }
    if (!this.max_size_file("nuevo_foto_persona", 2000)) {
      this.dom.mostrar_error_campo(
        "nuevo_foto_persona",
        "nuevo_foto_persona_max_size_file_ko",
      );
      return "nuevo_foto_persona_max_size_file_ko";
    }
    if (!this.type_file("nuevo_foto_persona", ["image/jpeg"])) {
      this.dom.mostrar_error_campo(
        "nuevo_foto_persona",
        "nuevo_foto_persona_type_file_ko",
      );
      return "nuevo_foto_persona_type_file_ko";
    }
    if (!this.format_name_file("nuevo_foto_persona", "[a-zA-Z.]")) {
      this.dom.mostrar_error_campo(
        "nuevo_foto_persona",
        "nuevo_foto_persona_format_name_file_ko",
      );
      return "nuevo_foto_persona_format_name_file_ko";
    }
    this.dom.mostrar_exito_campo("nuevo_foto_persona");
    return true;
  }
}
