import { IsString } from 'class-validator';
import {
  JsonController,
  Post,
  Body,
  BadRequestError
} from 'routing-controllers';
import User from '../users/entity';
import { sign } from '../jwt';

class AuthenticatePayload {
  @IsString()
  emailAddress: string;

  @IsString()
  password: string;
}

@JsonController()
export default class LoginController {
  @Post('/logins')
  async authenticate(@Body() { emailAddress, password }: AuthenticatePayload) {
    const user = await User.findOne({ where: { emailAddress } });
    if (!user || !user.id)
      throw new BadRequestError('A user with this email does not exist ');

    if (!(await user.checkPassword(password)))
      throw new BadRequestError('The password is not correct');

    const jwt = sign({ id: user.id });
    return { jwt };
  }
}
