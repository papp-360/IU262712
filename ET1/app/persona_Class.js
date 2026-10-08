class persona extends Validations {
  constructor(esTest) {
    super();
    this.dom = new dom();
    this.nombreentidad = "persona";
    this.validations = new Validations();

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

			<label class="label_dni">DNI</label>
			<input type='text' id='dni' name='dni' onblur=" return entidad.ADD_dni_validation();"></input>
			<span id="span_error_dni"><a id="error_dni"></a></span>
			<br>
			
			<label class="label_nombre_persona">Nombre de pila</label>
			<input type='text' id='nombre_persona' name='nombre_persona' onblur=" return entidad.ADD_nombre_persona_validation();"></input>
			<span id="span_error_nombre_persona" ><a id="error_nombre_persona"></a></span>
			<br>
			
			<label class="label_apellidos_persona">Apellidos</label>
			<input type='text' id='apellidos_persona' name='apellidos_persona' onblur=" return entidad.ADD_apellidos_persona_validation();"></input>
			<span id="span_error_apellidos_persona" ><a id="error_apellidos_persona"></a></span>
			<br>
			
			<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
			<input type='text' id='fechanacimiento_persona' name='fechanacimiento_persona' onblur=" return entidad.ADD_fechanacimiento_persona_validation();"></input>
			<span id="span_error_fechaNacimiento_persona" ><a id="error_fechaNacimiento_persona"></a></span>
			
			<br>
			<label class="label_direccion_persona">Dirección Postal</label>
			<textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona' onblur=" return entidad.ADD_direccion_persona_validation();"></textarea>
			<span id="span_error_direccion_persona" ><a id="error_direccion_persona"></a></span>
			<br>

			<label class="label_telefono_persona">Teléfono Persona</label>
			<input type='text' id='telefono_persona' name='telefono_persona' onblur=" return entidad.ADD_telefono_persona_validation();"></input>
			<span id="span_error_telefono_persona" ><a id="error_telefono_persona"></a></span>
			
			<br>
			<label class="label_email_persona">Correo Electronico</label>
			<input type='text' id='email_persona' name='email_persona' onblur=" return entidad.ADD_email_persona_validation();"></input>
			<span id="span_error_email_persona" ><a id="error_email_persona"></a></span>

			<br>
			<label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
			<input type='text' id='foto_persona' name='foto_persona' onblur=" return entidad.ADD_foto_persona_validation();"></input>
			<span id="span_error_foto_persona"><a id="error_foto_persona"></a></span>
			<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona' onblur=" return entidad.ADD_nuevo_foto_persona_validation();"></input>
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
    //Con la validacion de formato también evitamos errores de tamaño
    if (!this.format("dni", "^[0-9]{8}[A-Z]$")) {
      this.dom.mostrar_error_campo("dni", "dni_format_ko");
      return "dni_format_ko";
    }

    //Validar que el dni sea correcto
    if (!(this.verificar_formato_dni('dni') === true)) {
      this.dom.mostrar_error_campo("dni", "dni_letra_ko");
      return "dni_letra_ko";
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
    if (!this.min_size("nombre_persona", 2)) {
      this.dom.mostrar_error_campo(
        "nombre_persona",
        "nombre_persona_min_size_ko",
      );
      return "nombre_persona_min_size_ko";
    }
    if (!this.max_size("nombre_persona", 45)) {
      this.dom.mostrar_error_campo(
        "nombre_persona",
        "nombre_persona_max_size_ko",
      );
      return "nombre_persona_max_size_ko";
    }
    // Acepta alfabético con ñ, acentos, puntos,  guiones y espacio
    if (!this.format("nombre_persona", "^[a-zA-ZñÑáéíóúÁÉÍÓÚ. -]+$")) {
      this.dom.mostrar_error_campo(
        "nombre_persona",
        "nombre_persona_format_ko",
      );
      return "nombre_persona_format_ko";
    }

    this.dom.mostrar_exito_campo("nombre_persona");
    return true;
  }

  ADD_apellidos_persona_validation() {
    if (!this.min_size("apellidos_persona", 3)) {
      this.dom.mostrar_error_campo(
        "apellidos_persona",
        "apellidos_persona_min_size_ko",
      );
      return "apellidos_persona_min_size_ko";
    }
    if (!this.max_size("apellidos_persona", 100)) {
      this.dom.mostrar_error_campo(
        "apellidos_persona",
        "apellidos_persona_max_size_ko",
      );
      return "apellidos_persona_max_size_ko";
    }
    // Acepta alfabético con ñ, acentos, puntos,  guiones y espacio
    if (!this.format("apellidos_persona", "^[a-zA-ZñÑáéíóúÁÉÍÓÚ. -]+$")) {
      this.dom.mostrar_error_campo(
        "apellidos_persona",
        "apellidos_persona_format_ko",
      );
      return "apellidos_persona_format_ko";
    }

    this.dom.mostrar_exito_campo("apellidos_persona");
    return true;
  }

  ADD_fechanacimiento_persona_validation() {
    if (!this.format("fechanacimiento_persona", "^\\d{1,2}\/\\d{1,2}\/\\d{4}$")) {
      this.dom.mostrar_error_campo("fechanacimiento_persona", "fechanacimiento_persona_format_ko");
      return "fechanacimiento_persona_format_ko";
    }
    //Comprobar que la fecha no sea superior a la actual
    if (!(this.verificar_fechaNacimiento_valida('fechanacimiento_persona') === true)) {

    }

    //Comprobar que la fecha sea posible
    if (!this.format("fechanacimiento_persona", "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19[2-9][0-9]|20[0-2][0-9])$")) {
      this.dom.mostrar_error_campo("fechanacimiento_persona", "fechanacimiento_persona_fecha_valida_ko");
      return "fechanacimiento_persona_fecha_valida_ko";
    }

    this.dom.mostrar_exito_campo("fechanacimiento_persona");
    return true;
  }

  ADD_direccion_persona_validation() {
    let elem = document.getElementById("direccion_persona");
    let valor = elem ? elem.value : "";

    if (valor.length < 10) {
      this.dom.mostrar_error_campo("direccion_persona", "direccion_persona_min_size_ko");
      return "direccion_persona_min_size_ko";
    }
    if (valor.length > 200) {
      this.dom.mostrar_error_campo("direccion_persona", "direccion_persona_max_size_ko");
      return "direccion_persona_max_size_ko";
    }
    if (!this.format("direccion_persona", "^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ.;, ºª'\n\r/-]+$")) {
      this.dom.mostrar_error_campo("direccion_persona", "direccion_persona_format_ko");
      return "direccion_persona_format_ko";
    }

    this.dom.mostrar_exito_campo("direccion_persona");
    return true;
  }

  ADD_telefono_persona_validation() {
    if (!this.format("telefono_persona", "^[6789][0-9]{8}$")) {
      this.dom.mostrar_error_campo("telefono_persona", "telefono_persona_format_ko");
      return "telefono_persona_format_ko";
    }
    this.dom.mostrar_exito_campo("telefono_persona");
    return true;
  }


  ADD_email_persona_validation() {
    if (!this.format("email_persona", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
      this.dom.mostrar_error_campo("email_persona", "email_persona_format_ko");
      return "email_persona_format_ko";
    }
    this.dom.mostrar_exito_campo("email_persona");
    return true;
  }

  ADD_foto_persona_validation() {
    this.dom.mostrar_exito_campo("foto_persona");
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
    if (!this.max_size_file("nuevo_foto_persona", 2000000)) {
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
    if (!this.format_name_file("nuevo_foto_persona", "^[a-zA-Z0-9_-]+\\.(jpg|jpeg)$")) {
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
    set_result.apellidos_persona = this.ADD_apellidos_persona_validation();
    set_result.fechaNacimiento_persona = this.ADD_fechaNacimiento_persona_validation();
    set_result.direccion_persona = this.ADD_direccion_persona_validation();
    set_result.telefono_persona = this.ADD_telefono_persona_validation();
    set_result.email_persona = this.ADD_email_persona_validation();
    set_result.nuevo_foto_persona = this.ADD_nuevo_foto_persona_validation();

    // calculate combination of all field validations
    let result =
      set_result.dni &
      set_result.nombre_persona &
      set_result.apellidos_persona &
      set_result.fechaNacimiento_persona &
      set_result.direccion_persona &
      set_result.telefono_persona &
      set_result.email_persona &
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


  /**********************************************************************************************
    fields validations for EDIT
  ***********************************************************************************************/

  EDIT_dni_validation() {
    return this.ADD_dni_validation();
  }

  EDIT_nombre_persona_validation() {
    return this.ADD_nombre_persona_validation();
  }

  EDIT_apellidos_persona_validation() {
    return this.ADD_apellidos_persona_validation();
  }

  EDIT_fechanacimiento_persona_validation() {
    return this.ADD_fechanacimiento_persona_validation();
  }

  EDIT_direccion_persona_validation() {
    return this.ADD_direccion_persona_validation();
  }

  EDIT_telefono_persona_validation() {
    return this.ADD_telefono_persona_validation();
  }

  EDIT_email_persona_validation() {
    return this.ADD_email_persona_validation();
  }

  EDIT_foto_persona_validation() {
    this.dom.mostrar_exito_campo("foto_persona");
    return true;
  }

  EDIT_nuevo_foto_persona_validation() {
    if (!this.not_exist_file("nuevo_foto_persona")) {
      this.dom.mostrar_exito_campo("nuevo_foto_persona");
      return true;
    }
    if (!this.max_size_file("nuevo_foto_persona", 2000000)) {
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

  EDIT_submit_persona() {
    return this.ADD_submit_persona();
  }




  /**********************************************************************************************
    fields validations for SEARCH 
  ***********************************************************************************************/
  SEARCH_submit_persona() {
    return true;
  }

  SEARCH_dni_validation() {
    let elem = document.getElementById("dni");
    let valor = elem ? elem.value : "";
    if (valor === "") {
      this.dom.mostrar_exito_campo("dni");
      return true;
    }
    if (!this.format("dni", "^[0-9]{8}[A-Z]$")) {
      this.dom.mostrar_error_campo("dni", "dni_format_ko");
      return "dni_format_ko";
    }
    this.dom.mostrar_exito_campo("dni");
    return true;
  }

  SEARCH_nombre_persona_validation() {
    let elem = document.getElementById("nombre_persona");
    let valor = elem ? elem.value : "";
    if (valor === "") {
      this.dom.mostrar_exito_campo("nombre_persona");
      return true;
    }
    if (valor.length > 45) {
      this.dom.mostrar_error_campo("nombre_persona", "nombre_persona_max_size_ko");
      return "nombre_persona_max_size_ko";
    }
    if (!this.format("nombre_persona", "^[a-zA-ZñÑáéíóúÁÉÍÓÚ. -]+$")) {
      this.dom.mostrar_error_campo("nombre_persona", "nombre_persona_format_ko");
      return "nombre_persona_format_ko";
    }
    this.dom.mostrar_exito_campo("nombre_persona");
    return true;
  }

  SEARCH_apellidos_persona_validation() {
    let elem = document.getElementById("apellidos_persona");
    let valor = elem ? elem.value : "";
    if (valor === "") {
      this.dom.mostrar_exito_campo("apellidos_persona");
      return true;
    }
    if (valor.length > 100) {
      this.dom.mostrar_error_campo("apellidos_persona", "apellidos_persona_max_size_ko");
      return "apellidos_persona_max_size_ko";
    }
    if (!this.format("apellidos_persona", "^[a-zA-ZñÑáéíóúÁÉÍÓÚ. -]+$")) {
      this.dom.mostrar_error_campo("apellidos_persona", "apellidos_persona_format_ko");
      return "apellidos_persona_format_ko";
    }
    this.dom.mostrar_exito_campo("apellidos_persona");
    return true;
  }

  SEARCH_fechanacimiento_persona_validation() {
    let elem = document.getElementById("fechanacimiento_persona") || document.getElementById("fechaNacimiento_persona");
    let id = elem ? elem.id : "fechanacimiento_persona";
    let valor = elem ? elem.value : "";
    if (valor === "") {
      this.dom.mostrar_exito_campo(id);
      return true;
    }
    if (!this.format(id, "^\\d{1,2}\/\\d{1,2}\/\\d{4}$")) {
      this.dom.mostrar_error_campo(id, "fechanacimiento_persona_format_ko");
      return "fechanacimiento_persona_format_ko";
    }
    this.dom.mostrar_exito_campo(id);
    return true;
  }

  SEARCH_direccion_persona_validation() {
    let elem = document.getElementById("direccion_persona");
    let valor = elem ? elem.value : "";
    if (valor === "") {
      this.dom.mostrar_exito_campo("direccion_persona");
      return true;
    }
    if (valor.length > 200) {
      this.dom.mostrar_error_campo("direccion_persona", "direccion_persona_max_size_ko");
      return "direccion_persona_max_size_ko";
    }
    if (!this.format("direccion_persona", "^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ.;, ºª'\n\r/-]+$")) {
      this.dom.mostrar_error_campo("direccion_persona", "direccion_persona_format_ko");
      return "direccion_persona_format_ko";
    }
    this.dom.mostrar_exito_campo("direccion_persona");
    return true;
  }

  SEARCH_telefono_persona_validation() {
    let elem = document.getElementById("telefono_persona");
    let valor = elem ? elem.value : "";
    if (valor === "") {
      this.dom.mostrar_exito_campo("telefono_persona");
      return true;
    }
    if (!this.format("telefono_persona", "^[6789][0-9]{8}$")) {
      this.dom.mostrar_error_campo("telefono_persona", "telefono_persona_format_ko");
      return "telefono_persona_format_ko";
    }
    this.dom.mostrar_exito_campo("telefono_persona");
    return true;
  }

  SEARCH_email_persona_validation() {
    let elem = document.getElementById("email_persona");
    let valor = elem ? elem.value : "";
    if (valor === "") {
      this.dom.mostrar_exito_campo("email_persona");
      return true;
    }
    if (!this.format("email_persona", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
      this.dom.mostrar_error_campo("email_persona", "email_persona_format_ko");
      return "email_persona_format_ko";
    }
    this.dom.mostrar_exito_campo("email_persona");
    return true;
  }

  SEARCH_foto_persona_validation() {
    this.dom.mostrar_exito_campo("foto_persona");
    return true;
  }

  SEARCH_nuevo_foto_persona_validation() {
    this.dom.mostrar_exito_campo("nuevo_foto_persona");
    return true;
  }


  /**********************************************************************************************
    métodos adicionales
  ***********************************************************************************************/

  verificar_formato_dni(id_campo) {

    if (document.getElementById(id_campo).value === '') {
      return false;
    }

    let dni = document.getElementById(id_campo).value.toUpperCase();
    const dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dni_regex = '^[0-9]{8}[A-Z]$';

    let numero, letra, letra_calculada;

    if (this.validations.format(id_campo, dni_regex)) {

      numero = dni.substr(0, 8);
      letra = dni.charAt(8);
      letra_calculada = dni_letters.charAt(numero % 23);

      return (letra === letra_calculada); // Devuelve true si coinciden, false si no

    } else {
      return false; // No cumple el formato de DNI
    }
  }

  verificar_fechanacimiento_valida(id_campo) {
    const campo = document.getElementById(id_campo);
    if (!campo || campo.value === '') {
      return false;
    }


  }
}
