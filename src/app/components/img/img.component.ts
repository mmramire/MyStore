import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  //@Input() img: string = '';

  //separo la imagen del input con esta técnica
  img: string = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img') //le pongo el nombre de lo del html que le mando y por atrás le puedo cambiar el nombre a la función, lo customizo
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('@Input -> set changeImg');
    //code -- acá sólo estoy seguro de que lo que cambió fue la imagen
  }
  @Output()
  loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/image/default.png';

  // counter: number = 0;
  // counterFn: number | undefined;

  constructor() {
    //before render, solo se crea una vez, no tener cosas ASYNC
    // console.log('Constructor', 'imgValue => ', this.img);
    console.log('constructor de img-component');
  }

  ngOnChanges(changes: SimpleChanges) {
    //before - during render
    //changes inputs - corre las veces que actualicemos los inputs del componente
    // console.log('ngOnChanges', 'imgValue => ', this.img);
    // console.log(
    //   changes,
    //   ' la desventaja es que no sé cuál input cambió, debo usar algún if para detectar cuál es'
    // );
    // if (changes.) { //code }
    console.log('ngAfterViewInit de img-component');
  }

  ngOnInit(): void {
    //before render
    //async - fetch -- once time --> acá ponerlas -- corre sólo una vez
    //es un error común pensar que los imputs se deben escuchar acá, sin embargo debe ser en en ngOnChanges()
    // console.log('ngOnInit', 'imgValue => ', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
    console.log('ngOnInit de img-component');
  }

  ngAfterViewInit(): void {
    //after render
    //handler children -- manejamos los hijos
    //si quisieramos de alguna forma manipular esos hijos, ejecutar algunos eventos con ellos, de forma programática y no desde template porque esos componentes ya deberían estar renderizados
    //este trigger lo vamos a ver más en las Directivas, que normalmente se corren con un ngAfterViewInit()
    // console.log('ngAfterViewInit');
    console.log('ngAfterViewInit de img-component');
  }

  ngOnDestroy(): void {
    //cuando se elimina el componente
    //delete render --> dejamos de verlo en la interfaz --> ngIf crea un componente y cuando lo quitamos literalmente lo mueve de la interfaz, el componente deja de existir, por ende su instancia también
    // console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
    console.log('ngOnDestroy de img-component');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }
}
