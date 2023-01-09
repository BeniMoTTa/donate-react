import { BiEditAlt } from "react-icons/bi";
import { Input } from "../../../../../components/input";
import { StyledButton } from "../../../../../styles/buttons";
import { StyledDashProfileForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { profileUpdateSchema } from "./profileUpdateSchema";
import Textarea from "../../../../../components/TextArea";
import { useContext, useEffect, useState } from "react";
import { DashContext } from "../../../../../context/DashContext";


const DashProfileForm = () => {
    const [editActive, setEditActive] = useState(true);
    const [loadingUpdateUser, setLoadingUpdateUser] = useState(false);

    const { updateUser, currentUser, getCurrentUser } = useContext(DashContext);

    const unlockEditProfile = () => {
        setEditActive(!editActive);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(profileUpdateSchema)
    });


    function submit(data) {
        updateUser(data, setLoadingUpdateUser);
    }


    return (
        <StyledDashProfileForm block={editActive}>
            <StyledButton
                buttonSize="default"
                buttonStyle={!editActive ? "primaryActive" : "primaryDefault"}
                onClick={unlockEditProfile}>
                <span>
                    <BiEditAlt />
                </span>
            </StyledButton>

            <form noValidate onSubmit={handleSubmit(submit)}>
                <div>
                    <div>
                        <Input
                            placeholder="Nome"
                            id="name"
                            type="text"
                            error={errors.name}
                            defaultValue={currentUser?.name}
                            {...register("name")}
                        />
                        <Input
                            placeholder="Meta"
                            id="goal"
                            type="text"
                            error={errors.goal}
                            defaultValue={currentUser?.goal}
                            {...register("goal")}
                        />
                    </div>

                    <div>
                        <Input
                            placeholder="Senha"
                            id="password"
                            type="password"
                            error={errors.password}
                            defaultValue={currentUser?.password}
                            {...register("password")}
                        />
                        <Input
                            placeholder="Link da imagem"
                            id="image"
                            type="text"
                            error={errors.image}
                            defaultValue={currentUser?.image}
                            {...register("image")}
                        />
                    </div>
                </div>
                <Textarea
                    placeholder="Fale sobre sua instituição"
                    id="description"
                    label="SOBRE"
                    error={errors.description}
                    defaultValue={currentUser?.description}
                    {...register("description")} />
                <StyledButton
                    type="submit"
                    buttonSize="medium"
                    buttonStyle="dashSubmit">
                    ATUALIZAR INFORMAÇÕES
                </StyledButton>
            </form>
        </StyledDashProfileForm>
    );
};

export default DashProfileForm;