import z, { AnyZodObject } from 'zod';
import { NextFunction, Response, Request } from 'express';

const LoginSchema = z.object({
  body: z.object({
    email: z.string().email("O e-mail precisa ser válido."),
    password: z.string().min(6, "A senha precisa ter no minímo 6 caractres.")
  })
});

type LoginSchema = z.infer<typeof LoginSchema>;

const ValidateLogin = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params
    });
    return next()
  } catch(err) {
    if (err instanceof z.ZodError) {
      const resultError = err.issues;
      return res.status(400).json({message: resultError[0].message});
    };
  }
}

export { ValidateLogin, LoginSchema };