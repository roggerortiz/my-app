// custom-date-adapter.ts

import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  // Los nombres de los días que quieres mostrar
  private readonly _customDayNames = ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'];

  // Sobrescribe este método para obtener los nombres de los días personalizados
  public override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    // Si necesitas diferentes estilos, puedes usar un switch/case.
    // Para este ejemplo simple, siempre retornamos nuestros nombres personalizados.
    return this._customDayNames;
  }

  // Sobrescribe este método para cambiar el formato de la fecha que se muestra en el input
  public override format(date: Date, displayFormat: Object): string {
    // En este caso, usaremos el formato 'DD/MM/YYYY'.
    const day = date.getDate();
    const month = date.getMonth() + 1; // getMonth() es base 0
    const year = date.getFullYear();

    // Añade un '0' al inicio si el día o mes es menor a 10
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }
}
