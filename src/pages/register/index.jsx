import { StyledRegister } from "./style";
import { Input } from "../../components/input";
import logImage from "../../assets/img/registerImage.jpg";
import { ImageDiv, LogButton, RegisterButton, StyledLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./registerSchema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const ReqRegister = async (data) => {
    try {
      const response = await api.post("/register", data);
    } catch (error) {
      console.log(error);
    }
  };

  function registerForm(data) {
    ReqRegister(data);
  }

  return (
    <StyledRegister>
      <ImageDiv>
        <img src={logImage} alt="" />
      </ImageDiv>
      <form action="" onSubmit={handleSubmit(registerForm)}>
        <h1>CADASTRE SUA ONG</h1>
        <div className="form-div">
          <Input
            placeholder="Nome"
            id="nome"
            type="text"
            error={errors.nome}
            {...register("nome")}
          />

          <Input
            placeholder="Email"
            id="email"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            placeholder="Senha"
            id="password"
            type="password"
            error={errors.password}
            {...register("password")}
          />

          <Input
            placeholder="Meta a alcançar em reais"
            id="number"
            type="text"
            error={errors.number}
            {...register("goal")}
          />

          <Input
            placeholder="Link da imagem"
            id="link"
            type="text"
            error={errors.link}
            {...register("image")}
          />

          <textarea
            placeholder="Descrição"
            id="description"
            type="text"
            error={errors.description}
            {...register("description")}
          />
        </div>
        <RegisterButton className="hover-underline-animation">
          Cadastrar
        </RegisterButton>
      </form>
    </StyledRegister>
  );
};
export default Register;
