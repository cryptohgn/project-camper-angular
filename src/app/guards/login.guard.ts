import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const loginGuard = () => {

    const router = inject(Router)

    if (localStorage.getItem('clave')) {
        return true;
    } else{
        router.navigate(['/login'])
        return false;
    }
}