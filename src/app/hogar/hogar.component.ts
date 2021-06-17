//
//
import { Component, OnInit } from '@angular/core';
import { MensajeroService } from '../servicios/mensajero.service';

//
//
@Component({
                selector:       'app-hogar',
                templateUrl:    './hogar.component.html',
                styleUrls:      ['./hogar.component.css']
            })

//
//
export class HogarComponent implements OnInit {

    //
    constructor(private servicioMensajeria: MensajeroService) { }

    //
    ngOnInit(): void {  }

    //                                                  // envia un mensaje a los suscritores via observable subject
    enviarMensaje(): void {                             
        var msg: string = 'Message from Home Component to App Component!';
        this.servicioMensajeria.enviarMensaje(msg);  }


    //
    limpiarMensajes(): void {                           // vaciar el deposito de mensajes
        this.servicioMensajeria.limpiarMensajes();}
}