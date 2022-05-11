import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/213")
  getRootRoute() {
    return "hi there!!!!!!!!!!!";
  }
}
