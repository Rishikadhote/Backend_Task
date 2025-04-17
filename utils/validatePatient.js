import Joi from 'joi';
const patientSchema= Joi.object({
    name:Joi.string().min(1).required().messages({
        'string.base':'Name must be a string.',
        'string.empty':'Name cannot be empty.',
        'any.required':'Name is required.',
    }),
  triageLevel: Joi.number().integer().min(1).max(5).required().messages({
    'number.base': 'Triage level must be a number.',
    'number.min':'Triage level must be at least 1.',
    'number.max': 'Triage level cannot be exceed 5.',
    'any.required':'Triage level is required.',
  })
});

export default patientSchema;