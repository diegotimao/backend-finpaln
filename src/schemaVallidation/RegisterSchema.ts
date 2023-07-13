import z, { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';

const RegisterSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email({ message: 'Campo deve ser do tipo e-mail.'}),
    password: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres.'}),
  }),
});

type RegisterSchema = z.infer<typeof RegisterSchema>;

const ValidationRegister = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      const resultError = err.issues;
      return res.status(400).json({message: resultError[0].message});
    };
  };
};

export { RegisterSchema, ValidationRegister }