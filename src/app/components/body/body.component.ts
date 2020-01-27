import { Component } from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;

    frase: any = {
    mensaje: 'mensaje de prueba numero 1',
    autor: 'ben parker'
    };
    personajes: string[] = ['spiderman','venom','Dr.Octopus'];
}