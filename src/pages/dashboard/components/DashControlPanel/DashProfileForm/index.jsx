import { BiEditAlt } from "react-icons/bi";
import { Input } from "../../../../../components/input";
import { StyledButton } from "../../../../../styles/buttons";
import { StyledDashProfileForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { profileUpdateSchema } from "./profileUpdateSchema";
import Textarea from "../../../../../components/TextArea";


const DashProfileForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(profileUpdateSchema),
    });


    function submit(data) {
        console.log(data);
    }


    return (
        <StyledDashProfileForm>
            <StyledButton buttonSize="default" buttonStyle="primaryDefault">
                <span>
                    <BiEditAlt />
                </span>
            </StyledButton>

            <form>
                <div>
                    <Input
                        placeholder="Nome"
                        id="name"
                        type="text"
                        error={errors.name}
                        {...register("name")}
                    />
                    <Input
                        placeholder="Meta"
                        id="goal"
                        type="number"
                        error={errors.goal}
                        {...register("goal")}
                    />
                </div>

                <div>
                    <Input
                        placeholder="Senha"
                        id="password"
                        type="password"
                        error={errors.password}
                        {...register("password")}
                    />
                    <Input
                        placeholder="Link da imagem"
                        id="image"
                        type="text"
                        error={errors.image}
                        {...register("image")}
                    />
                </div>
                <Textarea
                    placeholder="Fale sobre sua instituição"
                    id="description"
                    label="SOBRE"
                    error={errors.description}
                    {...register("description")} />
                <StyledButton>
                    ATUALIZAR INFORMAÇÕES
                </StyledButton>
            </form>
        </StyledDashProfileForm>
    );
};

export default DashProfileForm;