import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProjects'
})
export class FilterProjectsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
