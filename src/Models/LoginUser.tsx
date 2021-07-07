class Login {
    private id:string="";
    private cedula:String="";
    private nombres:String="";
    private apellidos:String="";
    private username:String="";
    private email:String="";
    private telefono:String="";
    private cargo:Number=0;
    private empresa:String="";
    private token:String="";

    constructor (){}

    public getId(): string {
        return this.id;
    }

    public setId(id: string=""): void {
        this.id = id;
    }

    public getCedula(): String {
        return this.cedula;
    }

    public setCedula(cedula: String=""): void {
        this.cedula = cedula;
    }

    public getNombres(): String  {
        return this.nombres;
    }

    public setNombres(nombres: String=""): void {
        this.nombres = nombres;
    }

    public getApellidos(): String {
        return this.apellidos;
    }

    public setApellidos(apellidos: String=""): void {
        this.apellidos = apellidos;
    }

    public getUsername(): String {
        return this.username;
    }

    public setUsername(username: String=""): void {
        this.username = username;
    }

    public getEmail(): String {
        return this.email;
    }

    public setEmail(email: String=""): void {
        this.email = email;
    }

    public getTelefono(): String  {
        return this.telefono;
    }

    public setTelefono(telefono: String=""): void {
        this.telefono = telefono;
    }

    public getCargo(): Number  {
        return this.cargo;
    }

    public setCargo(cargo: Number=0): void {
        this.cargo = cargo;
    }

    public getEmpresa(): String  {
        return this.empresa;
    }

    public setEmpresa(empresa: String=""): void {
        this.empresa = empresa;
    }

    public getToken(): String  {
        return this.token;
    }

    public setToken(token: String=""): void {
        this.token = token;
    }
}

export default Login
