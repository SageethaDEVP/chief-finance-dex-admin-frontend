import { apiUrls } from '../../constants'
import { httpService } from '../httpServise'

class BdltyService {
    constructor(httpService) {
        this.httpService = httpService
    }

    async mint(data) {
        return await this.httpService.post(apiUrls.bdlty.mint, data)
    }
    async burn(data) {
        return await this.httpService.post(apiUrls.bdlty.burn, data)
    }
    async getBurn() {
        return await this.httpService.get(apiUrls.bdlty.getBurn)
    }
    async pause() {
        return await this.httpService.post(apiUrls.bdlty.pause)
    }
    async unpause() {
        return await this.httpService.post(apiUrls.bdlty.unpause)
    }
}

export const bdltyService = new BdltyService(httpService)
