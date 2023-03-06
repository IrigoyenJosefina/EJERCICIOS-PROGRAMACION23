export class Libros{
    private titulo:string;
    private codigo:number;
    private genero:string;
    private cantidadDePaginas:number;
    private autor:string; 
    private disponible:boolean;
    private editorial:string;
    
    constructor(Ptitulo:string, Pcodigo:number,Pgenero:string,Pcantdepag:number,Pautor:string,Pdisponible:boolean,Peditorial:string){
       this.titulo = Ptitulo;
       this.codigo = Pcodigo;
       this.genero = Pgenero;
       this.cantidadDePaginas = Pcantdepag;
       this.autor = Pautor;
       this.disponible = Pdisponible;
       this.editorial = Peditorial;
    }
}

