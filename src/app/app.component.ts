//
//
import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { MensajeroService } from './servicios/mensajero.service';


//
//
@Component({
                selector:       'app-root',
                templateUrl:    './app.component.html',
                styleUrls:      ['./app.component.css']
})

//
//
export class AppComponent implements OnDestroy {
    
    //
    @Input() titulo_eng = 'Angular 10 - Communicating Between Components with Observable & Subject';
    @Input() titulo_spa = 'Angular 10 - Comunicando entre |Components| y |Observable & Subject|'
    
    aMensajes: any[] = [];
    subscription: Subscription;

    //
    constructor(private servicioMensajeria: MensajeroService) {
                                                                            // nos suscribimos al servicio de mensajeria
        this.subscription = this.servicioMensajeria.enMensaje()             
            .subscribe(msg => {                                             
                if (msg) {                                                  // agregamos un mensaje al almacen
                    this.aMensajes.push(msg);
                } else {                                                    // elimina todos los mensajes existentes cuando se recibe un mensaje vacío
                    this.aMensajes = [];
                }
            });
    }

    //
    ngOnDestroy() {                                     // evitar perdida de recursos
        this.subscription.unsubscribe();    }
}