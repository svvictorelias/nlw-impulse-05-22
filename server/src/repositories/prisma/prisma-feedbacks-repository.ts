import { prisma } from "../../prisma";
import { feedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrimaFeedbacksRepository implements FeedbacksRepository{
  async create({type, comment, screenshot}: feedbackCreateData){
    await prisma.feedback.create({
      data:{
        type,
        comment,
        screenshot,
      }
    })
    
  }
}