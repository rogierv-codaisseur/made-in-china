import {
  JsonController,
  Get,
  Param,
  Post,
  HttpCode,
  Body,
  Authorized
} from 'routing-controllers';
import Ad from './entity';

@JsonController()
export default class AdController {
  @Get('/ads/:id')
  getAd(@Param('id') id: number) {
    return Ad.findOne(id);
  }

  @Get('/ads')
  async getAll() {
    const ads = await Ad.find();
    return { ads };
  }

  @Authorized()
  @Post('/ads')
  @HttpCode(201)
  createAd(@Body() ad: Ad) {
    return ad.save();
  }
}
