class Televisor{
    //Estados del televisor//
    //se definen como private por el concepto de encapsulamiento//
    private encendido:boolean; 
    private volumenActual:number;
    private canalActual:number;

    //Constructor//
    constructor(encendido:boolean,volumenActual:number,canalActual:number){
        this.encendido = encendido;
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }

    //Get y set//
    public setEncender(p:boolean){
        this.encendido = p;
    }

    public getEncender():boolean{
        return this.encendido;
    }

    public setVolumen(v:number){
        this.volumenActual = v;
    }

    public getVolumen():number{
        return this.volumenActual;
    }

    public setCanal(c:number){
        this.canalActual = c;
    }

    public getCanal():number{
        return this.canalActual;
    }

   //Funciones del televisor//
   public PrenderApagar():boolean{
     if(this.encendido==true){
        this.encendido = false 
     }else{
        this.encendido = true
     }
     return this.encendido
   }

   public subirVolumen():number{
    if(this.volumenActual>=0){
        this.volumenActual++
    }
    return this.volumenActual
   }

   public bajarVolumen():number{
    if(this.volumenActual<=80){
        this.volumenActual--
    }
    return this.volumenActual
   }

   public subirCanal():number{
    if(this.canalActual>=2){
        this.canalActual++
    }
    return this.canalActual
   }

   public bajarCanal():number{
    if(this.canalActual<=90){
        this.canalActual--
    }
    return this.canalActual
   }

}

let televisor001:Televisor = new Televisor(true, 15, 24);


