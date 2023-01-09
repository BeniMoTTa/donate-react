import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Digite o email corretamente")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Minimo de 6 caracteres"),
});
