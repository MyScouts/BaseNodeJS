import { JsonController } from "routing-controllers";
import { Service } from "typedi";

@JsonController('/auth')
@Service()
export class AuthController {

}