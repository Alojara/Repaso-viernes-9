import { Component, Output, EventEmitter} from '@angular/core';
import {Pokemon, TipoPokemon} from './../../modelos/pokemon';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  @Output()
  public enviar = new EventEmitter<Pokemon>();

public tipos: Array<string> =[
  'Fuego' ,
  'Agua' ,
  'Roca' ,
  'Planta',
  'Volador' ,
  'Veneno' ,
  'Nada'
  ]
public pokemon: Pokemon ={
  numpd: 0,
  nombre:'',
  descripcion:'',
  foto:'',
  tipo:'Agua',
  debilidades:'Agua'
}
public cambiarNumeropd(evento:Event):void{
const vari =evento.target as HTMLInputElement;
  this.pokemon.numpd = Number.parseInt (vari.value) || 0; //por si da error
}
public cambiarNombre(evento:Event):void{
  const varNom = evento.target as HTMLInputElement;
  this.pokemon.nombre = varNom.value;
}
public cambiarDescri(evento:Event):void{
  const varDes = evento.target as HTMLInputElement;
  this.pokemon.descripcion = varDes.value;
}
public cambiarFoto(evento:Event):void{
  const varFoto = evento.target as HTMLInputElement;
  this.pokemon.foto = varFoto.value;
}
public cambiarTipo(evento:Event):void{
  const elemento = evento.target as HTMLSelectElement;
  this.pokemon.tipo = elemento.value as TipoPokemon;
}
public cambiarDeb(evento:Event):void{
  const varDeb = evento.target as HTMLSelectElement;
  this.pokemon.debilidades = varDeb.value as TipoPokemon;
}
public guardar():void{
  const copia: Pokemon ={
    ...this.pokemon
  }
  this.enviar.emit(copia);
  console.log(this.pokemon);
}
}
