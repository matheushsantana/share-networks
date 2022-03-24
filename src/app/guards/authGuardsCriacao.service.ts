import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { VeerificaCriacaoService } from "../pages/criacao/shared/verificaCriacao.service";

@Injectable()
export class AuthGuardCriacao implements CanActivate {

    constructor(private verificaCriacaoService: VeerificaCriacaoService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        route.
        console.log('O que tem aqui ?', route)
        return true;
    }
}