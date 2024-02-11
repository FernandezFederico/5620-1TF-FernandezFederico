import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../dashboard/pages/students/interface';
@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {
    const fullName = `${this.firstLetterUpper(value.firstName)} ${this.firstLetterUpper(value.lastName)}`
    
    if (args[0] === 'firstUpper') {
      return fullName;
    }
    return fullName.toLowerCase();
  }

  private firstLetterUpper(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
