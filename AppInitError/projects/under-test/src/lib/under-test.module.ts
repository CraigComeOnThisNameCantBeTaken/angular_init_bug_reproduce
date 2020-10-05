import { APP_INITIALIZER, NgModule } from '@angular/core';

export function myFact() {
  console.log("This should always run, but doesnt via npm link")
  return () => Promise.resolve();
}

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: myFact,
      deps: [],
      multi: true
    }
  ]
})
export class UnderTestModule { }
