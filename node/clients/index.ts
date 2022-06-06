import { IOClients } from "@vtex/api"
import Analytics from "../clients/analytics"

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  //adicionando o clients Analytics para visualização de quantidades de pessoas no produto
  public get analytics() {
    return this.getOrSet("analytics", Analytics)
  }
}
