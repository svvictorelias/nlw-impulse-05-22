import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendEmailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  {create: createFeedbackSpy},
  {sendMail: sendEmailSpy}
)

describe('Submit feedback',()=>{
  it('should be able to submit a feedback', async()=>{
    await expect(submitFeedback.execute({
      type:'BUG',
      comment:'Exemple comment',
      screenshot: 'data:image/png;base64,gqergeqwgqreteste.jpg',
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendEmailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit a feedback without type', async()=>{
    await expect(submitFeedback.execute({
      type:'',
      comment:'Exemple comment',
      screenshot: 'data:image/png;base64,gqergeqwgqreteste.jpg',
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without comment', async()=>{
    await expect(submitFeedback.execute({
      type:'BUG',
      comment:'',
      screenshot: 'data:image/png;base64,gqergeqwgqreteste.jpg',
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback with an invalid screenshot', async()=>{
    await expect(submitFeedback.execute({
      type:'BUG',
      comment:'weewf',
      screenshot: 'ata:image/png;base64,gqergeqwgqreteste.jpg',
    })).rejects.toThrow()
  })
})