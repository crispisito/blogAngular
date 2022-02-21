import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoCorto'
})
export class TextoCortoPipe implements PipeTransform {

  transform(value: string | undefined, ...args: any[]): string {

    let numberCharacters = (args[0])? Number(args[0]): 80;
    let finalIcon = (args[1])? String(args[1]): '...';

    let arrText = value?.split('');
    arrText = arrText?.slice(0, numberCharacters);
    let result = arrText?.join('') + finalIcon
    
    return result;
  }

}
