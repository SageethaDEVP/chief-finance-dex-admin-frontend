import { apiUrls } from '../../constants'
import { httpService } from '../httpServise'

class QuizService {
    constructor(httpService) {
        this.httpService = httpService
    }
    async question(data) {
        return await this.httpService.post(apiUrls.quiz.question, data)
    }
    async level(data) {
        return await this.httpService.post(apiUrls.quiz.level, data)
    }
    async getQuestion() {
        return await this.httpService.get(apiUrls.quiz.getQuestion)
    }
    async getLevel() {
        return await this.httpService.get(apiUrls.quiz.getLevel)
    }
}
export const quizService = new QuizService(httpService)
