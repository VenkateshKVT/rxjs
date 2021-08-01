import { FunctionExpr } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CancelObservableComponent } from "./components/cancel-observable/cancel-observable.component";
import { ConvertToObservableComponent } from "./components/convert-to-observable/convert-to-observable.component";
import { FunctionObservableComponent } from "./components/function-observable/function-observable.component";
import { NewObservableComponent } from "./components/new-observable/new-observable.component";
import { MemoryLeakageComponent } from "./memory-leakage/memory-leakage.component";

const routes: Routes = [
    {
        path: 'convert-to-observable',
        component: ConvertToObservableComponent
    },
    {
        path: 'function-observable',
        component: FunctionObservableComponent
    },
    {
        path: 'subscribe-ways',
        component: NewObservableComponent
    },
    {
        path: 'cancel-observable',
        component: CancelObservableComponent
    },
    {
        path: 'memory-leakage',
        component: MemoryLeakageComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}