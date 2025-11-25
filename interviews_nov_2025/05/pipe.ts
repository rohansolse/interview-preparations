import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) return '';

    // Convert to string & remove spaces
    const phoneStr = value.toString().trim();

    // Check if 10 digits
    if (phoneStr.length !== 10) {
      return 'Invalid Number';  // Optional validation
    }

    // Add "+91" and dash after 5th digit
    const firstPart = phoneStr.slice(0, 5);     // 98765
    const secondPart = phoneStr.slice(5);       // 43210

    return `+91 ${firstPart}-${secondPart}`;
  }
}


// <p>{{ '9876543210' | phoneFormat }}</p>

