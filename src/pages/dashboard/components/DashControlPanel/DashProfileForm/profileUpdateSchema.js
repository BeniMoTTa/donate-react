import * as yup from "yup";

export const profileUpdateSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório")
        .min(3, "O nome precisa de pelo menos 3 caracteres")
        .max(60, "O nome pode ter no máximo 60 caracteres."),
    goal: yup
        .string()
        .matches(/(^[0-9]*$)/, "Inserir apenas números")
        .required("Valor obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(
            /(?=.*?[#?!@$%^&*-])/,
            "É necessário pelo menos um caractere especial"
        )
        .min(6, "É necessário uma senha de pelos 6 caracteres"),
    image: yup
        .string(),
    description: yup.string().max(800, "Limite de 800 caracteres")
});
