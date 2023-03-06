import { Libros } from "./Libros";

class Biblioteca{

    //Atributos//
    private nombre:string;
    private direccion:string;
    private telefono:number;
    private localidad:string;
    private libro:Libros;

    //Constructor//
    public constructor(Pnombre:string,Pdireccion:string,Ptelefono:number,Plocalidad:string,Plibro:Libros){
       this.nombre = Pnombre;
       this.direccion = Pdireccion;
       this.telefono = Ptelefono;
       this.localidad = Plocalidad; 
       this.libro = Plibro;
    }

    //Get y set//
    public setNombreBiblioteca(n:string){
        this.nombre = n;
    }

    public getNombreBiblioteca():string{
        return this.nombre
    }

    public setDireccionBiblioteca(d:string){
        this.direccion = d;
    }

    public getDireccionBiblioteca():string{
        return this.direccion;
    }

    public setTelefonoBiblioteca(t:number){
        this.telefono = t;
    }

    public getTelefonoBiblioteca():number{
        return this.telefono
    }

    public setLocalidadBiblioteca(l:string){
        this.localidad = l;
    }

    public getLocalidadBiblioteca():string{
        return this.localidad;
    }

    public setLibroDescripcion(l:Libros){
        this.libro = l;
    }

    public getLibroDescripcion():Libros{
        return this.libro;
    }


    //Metodos//
    public nombreBiblioteca(): string{
        return this.nombre;
    }

    public direccionBiblioteca(): string{
        return this.direccion;
    }

    public telefonoBiblioteca():number{
        return this.telefono;
    }

    public localidadBiblioteca():string{
        return this.localidad
    }

    public libroDescripcion():Libros{
        return this.libro;
    }

}

let Libro001:Libros = new Libros("El principito", 111, "Novela", 120, "Antoine de Saint-Exupéry",true, "Planeta de Libros");
let Libro002:Libros = new Libros("Orgullo y prejuicio", 165, "Novela",360, "Jane Austen",false,"Planeta de Libros");

let Biblioteca001:Biblioteca = new Biblioteca("25 de mayo", "Rivadavia 665", 2244423560, "Las flores", Libro001);

let cambioDireccion = Biblioteca001.setDireccionBiblioteca("Pte. Peron");
console.log(cambioDireccion);

let infoLibro = Biblioteca001.getLibroDescripcion();
console.log(infoLibro);





