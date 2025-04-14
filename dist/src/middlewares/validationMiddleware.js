import { ZodError } from 'zod';
import _ from 'lodash';
export function validateData(schema) {
    return async (req, res, next) => {
        try {
            schema.parse(req.body);
            req.cleanBody = await _.pick(req.body, Object.keys(schema.shape));
            next();
        }
        catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }));
                res.status(400).json({ error: 'Invalid data', details: errorMessages });
            }
            else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}
