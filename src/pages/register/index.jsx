import { StyledRegister } from "./style";
import { Input } from "../../components/input";
import logImage from "../../assets/img/registerImage.jpg";
import { ImageDiv, LogButton, RegisterButton, StyledLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./registerSchema";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button";

const Register = () => {
  const { reqRegister } = useContext(AuthContext);

  const { getUsers } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  function registerForm(data) {
    reqRegister(data);
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
            id="name"
            type="text"
            error={errors.name}
            {...register("name")}
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

        <Button
          name={"CADASTRAR"}
          size={"small"}
          style={"brand3"}
          className="hover-underline-animation"
        />
      </form>
    </StyledRegister>
  );
};
export default Register;
