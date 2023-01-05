import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email(
      "Digite o email corretamente, verifique os caracteres especiais (@, . )"
    )
    .required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Minimo de 6 caracteres"),
});
