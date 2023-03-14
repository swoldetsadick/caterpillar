var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"sso","loadChildren":"./modules/single-sign-on/single-sign-on.module#SingleSignOnModule"},{"path":"home","loadChildren":"./modules/home/home.module#HomeModule"},{"path":"**","redirectTo":"/home"}],"kind":"module"},{"name":"routes","filename":"src/app/modules/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent","pathMatch":"full"}],"kind":"module"},{"name":"routes","filename":"src/app/modules/single-sign-on/single-sign-on-routing.module.ts","module":"SingleSignOnRoutingModule","children":[{"path":"","component":"SingleSignOnComponent","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"login","component":"LoginComponent"},{"path":"manage","component":"ManageComponent"},{"path":"register","component":"RegisterComponent"},{"path":"reset","component":"ResetComponent"},{"path":"update","component":"UpdateComponent"}]}],"kind":"module"}]}
