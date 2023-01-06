import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .matches(/^[A-z\s]+$/, "Apenas letras são permitidas nesse campo"),
  email: yup
    .string()
    .email("Digite o email corretamente")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Minimo de 6 caracteres"),
});
